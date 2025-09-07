import { test, expect } from "@playwright/test";
import { createTestHelpers } from "../utils/test-helpers";
import { VIEWPORT_SIZES } from "../constants";

test.describe("Responsive Design", () => {
  let helpers: ReturnType<typeof createTestHelpers>;

  test.beforeEach(async ({ page }) => {
    helpers = createTestHelpers(page);
    await page.goto("/");
    await helpers.waitForPageLoad();
  });

  test("should adapt to mobile viewport", async ({ page }) => {
    await helpers.setViewportSize(VIEWPORT_SIZES.mobile.width, VIEWPORT_SIZES.mobile.height);

    // Check that main sections are visible
    await expect(page.locator("#hello-area")).toBeVisible();
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();

    // Check mobile navigation
    const mobileMenu = page.locator('[data-testid="mobile-menu"]');
    if (await mobileMenu.isVisible()) {
      await expect(mobileMenu).toBeVisible();
    }
  });

  test("should adapt to tablet viewport", async ({ page }) => {
    await helpers.setViewportSize(VIEWPORT_SIZES.md.width, VIEWPORT_SIZES.md.height);

    // Check that content is properly displayed
    await expect(page.locator("#hello-area")).toBeVisible();

    // Check grid layout
    const gridContainer = page.locator("#hello-area .grid");
    await expect(gridContainer).toBeVisible();
  });

  test("should adapt to desktop viewport", async ({ page }) => {
    await helpers.setViewportSize(VIEWPORT_SIZES.xl.width, VIEWPORT_SIZES.xl.height);

    // Check desktop layout
    await expect(page.locator("#hello-area")).toBeVisible();

    // Check two-column layout
    const gridItems = page.locator("#hello-area .grid > div");
    await expect(gridItems).toHaveCount(2);
  });

  test("should adapt to large desktop viewport", async ({ page }) => {
    await helpers.setViewportSize(VIEWPORT_SIZES["2xl"].width, VIEWPORT_SIZES["2xl"].height);

    // Check that content is properly centered and sized
    await expect(page.locator("#hello-area")).toBeVisible();

    // Check that body has max-width constraint
    const body = page.locator("body");
    const bodyStyles = await body.evaluate((el) => {
      const styles = window.getComputedStyle(el);
      return {
        maxWidth: styles.maxWidth,
        margin: styles.margin,
      };
    });

    expect(bodyStyles.maxWidth).toBe("1400px");
  });

  test("should have proper text scaling on different screen sizes", async ({ page }) => {
    const introSection = page.locator("#hello-area");

    // Test mobile text sizes
    await helpers.setViewportSize(VIEWPORT_SIZES.mobile.width, VIEWPORT_SIZES.mobile.height);
    const mobileH2 = introSection.locator("h2").first();
    const mobileClasses = await mobileH2.getAttribute("class");
    expect(mobileClasses).toContain("text-[39px]");

    // Test desktop text sizes
    await helpers.setViewportSize(VIEWPORT_SIZES.xl.width, VIEWPORT_SIZES.xl.height);
    const desktopH2 = introSection.locator("h2").first();
    const desktopClasses = await desktopH2.getAttribute("class");
    expect(desktopClasses).toContain("md:text-[54px]");
  });

  test("should have proper button sizing on different screen sizes", async ({ page }) => {
    const buttons = page.locator("#hello-area a");

    // Test mobile button sizes
    await helpers.setViewportSize(VIEWPORT_SIZES.mobile.width, VIEWPORT_SIZES.mobile.height);
    const mobileButtonClasses = await buttons.first().getAttribute("class");
    expect(mobileButtonClasses).toContain("px-4");
    expect(mobileButtonClasses).toContain("py-2");

    // Test desktop button sizes
    await helpers.setViewportSize(VIEWPORT_SIZES.xl.width, VIEWPORT_SIZES.xl.height);
    const desktopButtonClasses = await buttons.first().getAttribute("class");
    expect(desktopButtonClasses).toContain("sm:px-6");
    expect(desktopButtonClasses).toContain("sm:py-3");
  });

  test("should have proper image scaling", async ({ page }) => {
    const avatar = page.locator('img[alt="Stanislav Zaitsev"]');

    // Test mobile image size
    await helpers.setViewportSize(VIEWPORT_SIZES.mobile.width, VIEWPORT_SIZES.mobile.height);
    await expect(avatar).toBeVisible();

    // Test desktop image size
    await helpers.setViewportSize(VIEWPORT_SIZES.xl.width, VIEWPORT_SIZES.xl.height);
    await expect(avatar).toBeVisible();

    // Check image container classes
    const imageContainer = avatar.locator("..");
    const containerClasses = await imageContainer.getAttribute("class");
    expect(containerClasses).toContain("h-48");
    expect(containerClasses).toContain("sm:h-64");
    expect(containerClasses).toContain("md:h-96");
  });

  test("should handle orientation changes", async ({ page }) => {
    // Test portrait orientation
    await helpers.setViewportSize(375, 667);
    await expect(page.locator("#hello-area")).toBeVisible();

    // Test landscape orientation
    await helpers.setViewportSize(667, 375);
    await expect(page.locator("#hello-area")).toBeVisible();
  });

  test("should not have horizontal scroll on mobile", async ({ page }) => {
    await helpers.setViewportSize(VIEWPORT_SIZES.mobile.width, VIEWPORT_SIZES.mobile.height);

    // Check that there's no horizontal scroll
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });

    expect(hasHorizontalScroll).toBe(false);
  });
});
