import { test, expect } from "@playwright/test";
import { createTestHelpers } from "../utils/test-helpers";
import { VIEWPORT_SIZES } from "../constants";

test.describe("Homepage", () => {
  let helpers: ReturnType<typeof createTestHelpers>;

  test.beforeEach(async ({ page }) => {
    helpers = createTestHelpers(page);
    await page.goto("/");
    await helpers.waitForPageLoad();
  });

  test("should load homepage successfully", async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/Portfolio/);

    // Check main sections are present
    await expect(page.locator("#hello-area")).toBeVisible();
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();
  });

  test("should display introduction section correctly", async ({ page }) => {
    const introSection = page.locator("#hello-area");

    // Check section is visible
    await expect(introSection).toBeVisible();

    // Check main heading elements
    await expect(introSection.locator("h2")).toHaveCount(3);
    await expect(introSection.locator("h4")).toHaveCount(1);

    // Check buttons are present
    const buttons = introSection.locator("a[href]");
    await expect(buttons).toHaveCount(2);

    // Check buttons have correct attributes
    await expect(buttons.first()).toHaveAttribute("target", "_blank");
    await expect(buttons.first()).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("should display avatar image", async ({ page }) => {
    const avatar = page.locator('img[alt="Stanislav Zaitsev"]');

    await expect(avatar).toBeVisible();
    const src = await avatar.getAttribute("src");
    expect(src).toContain("my-avatar.jpg");
  });

  test("should have working navigation", async ({ page }) => {
    // Check header navigation
    const header = page.locator("header");
    await expect(header).toBeVisible();

    // Check main title link (always present)
    const titleLink = header.locator('[data-testid="header-title-link"]');
    await expect(titleLink).toBeVisible();

    // Check desktop menu (may be hidden on mobile)
    const desktopMenu = header.locator('[data-testid="desktop-menu"]');
    if (await desktopMenu.isVisible()) {
      const navLinks = desktopMenu.locator('[data-testid^="nav-link-"]');
      const linkCount = await navLinks.count();
      expect(linkCount).toBeGreaterThan(0);
    }
  });

  test("should be responsive on different screen sizes", async ({ page }) => {
    // Test mobile viewport
    await helpers.setViewportSize(VIEWPORT_SIZES.mobile.width, VIEWPORT_SIZES.mobile.height);
    await expect(page.locator("#hello-area")).toBeVisible();

    // Test tablet viewport
    await helpers.setViewportSize(VIEWPORT_SIZES.md.width, VIEWPORT_SIZES.md.height);
    await expect(page.locator("#hello-area")).toBeVisible();

    // Test desktop viewport
    await helpers.setViewportSize(VIEWPORT_SIZES.xl.width, VIEWPORT_SIZES.xl.height);
    await expect(page.locator("#hello-area")).toBeVisible();
  });

  test("should have proper meta tags", async ({ page }) => {
    // Check viewport meta tag
    await expect(page.locator('meta[name="viewport"]')).toHaveAttribute(
      "content",
      /width=device-width/
    );

    // Check charset
    await expect(page.locator("meta[charset]")).toHaveAttribute("charset", "utf-8");
  });

  test("should load without console errors", async ({ page }) => {
    const errors: string[] = [];

    page.on("console", (msg) => {
      if (msg.type() === "error") {
        errors.push(msg.text());
      }
    });

    await page.reload();
    await helpers.waitForPageLoad();

    // Filter out known non-critical errors
    const criticalErrors = errors.filter(
      (error) => !error.includes("favicon") && !error.includes("404")
    );

    expect(criticalErrors).toHaveLength(0);
  });
});
