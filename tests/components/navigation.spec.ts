import { test, expect } from "@playwright/test";
import { createTestHelpers } from "../utils/test-helpers";

test.describe("Navigation", () => {
  let helpers: ReturnType<typeof createTestHelpers>;

  test.beforeEach(async ({ page }) => {
    helpers = createTestHelpers(page);
    await page.goto("/");
    await helpers.waitForPageLoad();
  });

  test("should have working header navigation", async ({ page }) => {
    const header = page.locator("header");
    await expect(header).toBeVisible();

    // Check main title link (always visible)
    const titleLink = header.locator('[data-testid="header-title-link"]');
    await expect(titleLink).toBeVisible();

    // Check desktop navigation links (may be hidden on mobile)
    const desktopMenu = header.locator('[data-testid="desktop-menu"]');
    if (await desktopMenu.isVisible()) {
      const navLinks = desktopMenu.locator('[data-testid^="nav-link-"]');
      const linkCount = await navLinks.count();
      expect(linkCount).toBeGreaterThan(0);

      // Test clicking on first navigation link
      if (linkCount > 0) {
        const firstLink = navLinks.first();
        const href = await firstLink.getAttribute("href");

        if (href && href.startsWith("#")) {
          await firstLink.click();
          await page.waitForTimeout(500);

          // Check if the target section exists and is visible
          const targetId = href.substring(1);
          if (targetId) {
            const targetSection = page.locator(`#${targetId}`);
            if ((await targetSection.count()) > 0) {
              await expect(targetSection).toBeVisible();
            }
          }
        }
      }
    }
  });

  test("should have working mobile menu", async ({ page }) => {
    // Set mobile viewport
    await helpers.setViewportSize(375, 667);

    // Look for burger button
    const burgerButton = page.locator('[data-testid="burger-button"]');

    if (await burgerButton.isVisible()) {
      // Click to open mobile menu
      await burgerButton.click();
      await page.waitForTimeout(300);

      // Check if mobile menu is visible
      const mobileMenu = page.locator('[data-testid="mobile-menu"]');
      if ((await mobileMenu.count()) > 0) {
        await expect(mobileMenu).toBeVisible();

        // Test menu items
        const menuItems = mobileMenu.locator("a");
        const itemCount = await menuItems.count();
        expect(itemCount).toBeGreaterThan(0);
      }
    } else {
      // If burger button is not visible, skip this test
      test.skip();
    }
  });

  test("should have smooth scrolling for anchor links", async ({ page }) => {
    // Check main title link first
    const titleLink = page.locator('[data-testid="header-title-link"]');

    if (await titleLink.isVisible()) {
      // Scroll down first to test scrolling up
      await page.evaluate(() => window.scrollTo(0, 500));
      await page.waitForTimeout(300);

      // Get scroll position after scrolling down
      const scrollAfterDown = await page.evaluate(() => window.scrollY);
      expect(scrollAfterDown).toBeGreaterThan(0);

      // Click the title link to scroll back to top
      await titleLink.click();
      await page.waitForTimeout(1000);

      // Check if scroll position changed (should be back to top)
      const finalScrollY = await page.evaluate(() => window.scrollY);
      expect(finalScrollY).toBeLessThan(scrollAfterDown);
    } else {
      // If title link is not visible, skip this test
      test.skip();
    }
  });

  test("should have proper focus management", async ({ page }) => {
    // Test keyboard navigation
    await page.keyboard.press("Tab");

    // Check if focus is visible
    const focusedElement = page.locator(":focus");
    await expect(focusedElement).toBeVisible();

    // Test tab navigation through multiple elements
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press("Tab");
      const currentFocused = page.locator(":focus");
      if ((await currentFocused.count()) > 0) {
        await expect(currentFocused).toBeVisible();
      }
    }
  });

  test("should have accessible navigation", async ({ page }) => {
    const header = page.locator("header");

    // Check for proper ARIA labels
    const navElements = header.locator('nav, [role="navigation"]');
    if ((await navElements.count()) > 0) {
      await expect(navElements.first()).toBeVisible();
    }

    // Check for proper heading structure
    const headings = page.locator("h1, h2, h3, h4, h5, h6");
    const headingCount = await headings.count();
    expect(headingCount).toBeGreaterThan(0);

    // Check that h1 exists (main page heading)
    const h1 = page.locator("h1");
    if ((await h1.count()) > 0) {
      await expect(h1).toBeVisible();
    }
  });
});
