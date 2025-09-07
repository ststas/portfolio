import { test, expect } from "@playwright/test";
import { createTestHelpers } from "../utils/test-helpers";
import { VIEWPORT_SIZES } from "../constants";

test.describe("Introduction Component", () => {
  let helpers: ReturnType<typeof createTestHelpers>;

  test.beforeEach(async ({ page }) => {
    helpers = createTestHelpers(page);
    await page.goto("/");
    await helpers.waitForPageLoad();
  });

  test("should display introduction content correctly", async ({ page }) => {
    const introSection = page.locator("#hello-area");

    // Check main structure
    await expect(introSection).toBeVisible();
    await expect(introSection.locator("h2")).toHaveCount(3);
    await expect(introSection.locator("h4")).toHaveCount(1);

    // Check buttons
    const buttons = introSection.locator("a");
    await expect(buttons).toHaveCount(2);

    // Check button attributes
    await expect(buttons.first()).toHaveAttribute("target", "_blank");
    await expect(buttons.first()).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("should display avatar image correctly", async ({ page }) => {
    const avatar = page.locator('img[alt="Stanislav Zaitsev"]');

    await expect(avatar).toBeVisible();
    const src = await avatar.getAttribute("src");
    expect(src).toContain("my-avatar.jpg");

    // Check image styling
    const imageClasses = await avatar.getAttribute("class");
    expect(imageClasses).toContain("rounded-lg");
    expect(imageClasses).toContain("object-cover");
  });

  test("should be responsive on different screen sizes", async ({ page }) => {
    const introSection = page.locator("#hello-area");

    // Test mobile
    await helpers.setViewportSize(VIEWPORT_SIZES.mobile.width, VIEWPORT_SIZES.mobile.height);
    await expect(introSection).toBeVisible();

    // Check mobile layout (single column)
    const gridContainer = introSection.locator(".grid");
    await expect(gridContainer).toBeVisible();

    // Test tablet
    await helpers.setViewportSize(VIEWPORT_SIZES.md.width, VIEWPORT_SIZES.md.height);
    await expect(introSection).toBeVisible();

    // Test desktop
    await helpers.setViewportSize(VIEWPORT_SIZES.xl.width, VIEWPORT_SIZES.xl.height);
    await expect(introSection).toBeVisible();

    // Check desktop layout (two columns)
    const gridItems = introSection.locator(".grid > div");
    await expect(gridItems).toHaveCount(2);
  });

  test("should have proper text hierarchy", async ({ page }) => {
    const introSection = page.locator("#hello-area");

    // Check heading sizes
    const h2Elements = introSection.locator("h2");
    const h4Element = introSection.locator("h4");

    await expect(h2Elements).toHaveCount(3);
    await expect(h4Element).toHaveCount(1);

    // Check that headings have proper styling
    for (let i = 0; i < 3; i++) {
      const h2Classes = await h2Elements.nth(i).getAttribute("class");
      expect(h2Classes).toContain("font-bold");
    }

    const h4Classes = await h4Element.getAttribute("class");
    expect(h4Classes).toContain("text-xl");
  });

  test("should have working external links", async ({ page }) => {
    const buttons = page.locator("#hello-area a");

    // Check that buttons have external links
    const firstButtonHref = await buttons.first().getAttribute("href");
    const secondButtonHref = await buttons.nth(1).getAttribute("href");

    expect(firstButtonHref).toBeTruthy();
    expect(secondButtonHref).toBeTruthy();

    // Check that links open in new tab
    await expect(buttons.first()).toHaveAttribute("target", "_blank");
    await expect(buttons.nth(1)).toHaveAttribute("target", "_blank");
  });
});
