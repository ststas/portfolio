import { Page } from "@playwright/test";

export const createTestHelpers = (page: Page) => {
  /**
   * Wait for the page to be fully loaded
   */
  const waitForPageLoad = async () => {
    await page.waitForLoadState("networkidle");
    await page.waitForSelector("body");
  };

  /**
   * Change language and wait for content to update
   */
  const changeLanguage = async (language: "en" | "ru" | "he") => {
    // Check if we're on mobile by looking for burger button
    const mobileMenuButton = page.locator('[data-testid="burger-button"]');
    const isMobile = await mobileMenuButton.isVisible();

    if (isMobile) {
      // Mobile flow: open mobile menu first
      await mobileMenuButton.click();
      await page.waitForTimeout(500); // Wait for menu animation

      // In mobile menu, language buttons are directly visible (no dropdown)
      const languageSelector = `[data-testid="language-${language}"]`;
      const languageButton = page.locator(languageSelector).first();

      // Click the button directly (it should be visible in mobile menu)
      await languageButton.click({ force: true });
    } else {
      // Desktop flow: look for language dropdown
      let dropdown = page.locator('[data-testid="language-dropdown"]');

      // If dropdown is not visible, try to find it in desktop menu
      if (!(await dropdown.isVisible())) {
        dropdown = page.locator('[data-testid="desktop-menu"] [data-testid="language-dropdown"]');
      }

      // Open dropdown if it exists and is visible
      if (await dropdown.isVisible()) {
        await dropdown.click();
        await page.waitForTimeout(300);
      }

      // Click on language button in dropdown
      const languageSelector = `[data-testid="language-${language}"]`;
      const languageButton = page.locator(languageSelector).first();

      // Try to click the button, use force if not visible
      try {
        await languageButton.click({ timeout: 5000 });
      } catch (error) {
        // If normal click fails, try with force
        await languageButton.click({ force: true });
      }
    }

    // Wait for language change to complete
    await page.waitForTimeout(500);
    await waitForPageLoad();
  };

  /**
   * Check if RTL is active
   */
  const isRTL = async (): Promise<boolean> => {
    const dir = await page.getAttribute("html", "dir");
    return dir === "rtl";
  };

  /**
   * Get current language from document
   */
  const getCurrentLanguage = async (): Promise<string> => {
    return (await page.getAttribute("html", "lang")) || "en";
  };

  /**
   * Take screenshot with custom name
   */
  const takeScreenshot = async (name: string) => {
    await page.screenshot({
      path: `test-results/screenshots/${name}.png`,
      fullPage: true,
    });
  };

  /**
   * Check if element is visible in viewport
   */
  const isElementInViewport = async (selector: string): Promise<boolean> => {
    return await page.evaluate((sel) => {
      const element = document.querySelector(sel);
      if (!element) return false;

      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }, selector);
  };

  /**
   * Scroll to element
   */
  const scrollToElement = async (selector: string) => {
    await page.locator(selector).scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
  };

  /**
   * Check responsive breakpoint
   */
  const getViewportSize = async () => {
    return await page.viewportSize();
  };

  /**
   * Set viewport size for responsive testing
   */
  const setViewportSize = async (width: number, height: number) => {
    await page.setViewportSize({ width, height });
    await page.waitForTimeout(300);
  };

  return {
    waitForPageLoad,
    changeLanguage,
    isRTL,
    getCurrentLanguage,
    takeScreenshot,
    isElementInViewport,
    scrollToElement,
    getViewportSize,
    setViewportSize,
  };
};
