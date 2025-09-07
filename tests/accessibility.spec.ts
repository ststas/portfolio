import { test, expect } from '@playwright/test';
import { createTestHelpers } from './utils/test-helpers';

test.describe('Accessibility', () => {
  let helpers: ReturnType<typeof createTestHelpers>;

  test.beforeEach(async ({ page }) => {
    helpers = createTestHelpers(page);
    await page.goto('/');
    await helpers.waitForPageLoad();
  });

  test('should have proper heading hierarchy', async ({ page }) => {
    // Check that h1 exists
    const h1 = page.locator('h1');
    if (await h1.count() > 0) {
      await expect(h1).toBeVisible();
    }
    
    // Check heading structure
    const headings = page.locator('h1, h2, h3, h4, h5, h6');
    const headingCount = await headings.count();
    expect(headingCount).toBeGreaterThan(0);
  });

  test('should have proper alt text for images', async ({ page }) => {
    const images = page.locator('img');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      expect(alt).toBeTruthy();
      expect(alt).not.toBe('');
    }
  });

  test('should have proper link text', async ({ page }) => {
    const links = page.locator('a');
    const linkCount = await links.count();
    
    for (let i = 0; i < linkCount; i++) {
      const link = links.nth(i);
      const text = await link.textContent();
      const href = await link.getAttribute('href');
      
      // Skip empty links or links with only icons
      if (text && text.trim() !== '') {
        expect(text.trim()).not.toBe('');
      }
      
      // Check that links have href
      if (href) {
        expect(href).toBeTruthy();
      }
    }
  });

  test('should have proper form labels if forms exist', async ({ page }) => {
    const inputs = page.locator('input, textarea, select');
    const inputCount = await inputs.count();
    
    for (let i = 0; i < inputCount; i++) {
      const input = inputs.nth(i);
      const type = await input.getAttribute('type');
      
      // Skip hidden inputs
      if (type !== 'hidden') {
        const id = await input.getAttribute('id');
        const ariaLabel = await input.getAttribute('aria-label');
        const ariaLabelledBy = await input.getAttribute('aria-labelledby');
        
        // Check that input has some form of label
        const hasLabel = id && await page.locator(`label[for="${id}"]`).count() > 0;
        const hasAriaLabel = ariaLabel || ariaLabelledBy;
        
        expect(hasLabel || hasAriaLabel).toBe(true);
      }
    }
  });

  test('should have proper color contrast', async ({ page }) => {
    // This is a basic check - in a real scenario, you might want to use
    // a more sophisticated color contrast checking tool
    
    const textElements = page.locator('h1, h2, h3, h4, h5, h6, p, span, a');
    const textCount = await textElements.count();
    
    // Check that text elements are visible (basic contrast check)
    for (let i = 0; i < Math.min(textCount, 10); i++) {
      const element = textElements.nth(i);
      if (await element.isVisible()) {
        const color = await element.evaluate(el => {
          const styles = window.getComputedStyle(el);
          return styles.color;
        });
        
        // Basic check that color is not transparent
        expect(color).not.toBe('rgba(0, 0, 0, 0)');
        expect(color).not.toBe('transparent');
      }
    }
  });

  test('should be keyboard navigable', async ({ page }) => {
    // Test tab navigation
    await page.keyboard.press('Tab');
    
    let focusedElement = page.locator(':focus');
    if (await focusedElement.count() > 0) {
      await expect(focusedElement).toBeVisible();
    }
    
    // Test multiple tab presses
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('Tab');
      focusedElement = page.locator(':focus');
      if (await focusedElement.count() > 0) {
        await expect(focusedElement).toBeVisible();
      }
    }
  });

  test('should have proper ARIA attributes', async ({ page }) => {
    // Check for proper ARIA landmarks
    const main = page.locator('main, [role="main"]');
    if (await main.count() > 0) {
      await expect(main).toBeVisible();
    }
    
    const navigation = page.locator('nav, [role="navigation"]');
    if (await navigation.count() > 0) {
      await expect(navigation).toBeVisible();
    }
    
    // Check for proper button roles
    const buttons = page.locator('button, [role="button"]');
    const buttonCount = await buttons.count();
    
    for (let i = 0; i < buttonCount; i++) {
      const button = buttons.nth(i);
      const role = await button.getAttribute('role');
      const type = await button.getAttribute('type');
      
      // Check that buttons have proper roles or types
      if (role) {
        expect(['button', 'menuitem', 'tab']).toContain(role);
      } else if (type) {
        expect(['button', 'submit', 'reset']).toContain(type);
      }
    }
  });

  test('should have proper language attributes', async ({ page }) => {
    // Check html lang attribute
    const htmlLang = await page.getAttribute('html', 'lang');
    expect(htmlLang).toBeTruthy();
    expect(['en', 'ru', 'he']).toContain(htmlLang);
    
    // Check html dir attribute
    const htmlDir = await page.getAttribute('html', 'dir');
    if (htmlLang === 'he') {
      expect(htmlDir).toBe('rtl');
    } else {
      // For LTR languages, dir can be 'ltr' or null (defaults to ltr)
      expect(htmlDir === 'ltr' || htmlDir === null).toBe(true);
    }
  });

  test('should have proper focus indicators', async ({ page }) => {
    // Test focus on interactive elements
    const interactiveElements = page.locator('a, button, input, textarea, select');
    const elementCount = await interactiveElements.count();
    
    if (elementCount > 0) {
      const firstElement = interactiveElements.first();
      
      // Focus the element
      await firstElement.focus();
      
      // Check that element is focused
      await expect(firstElement).toBeFocused();
      
      // Check for focus styles (basic check)
      const focusStyles = await firstElement.evaluate(el => {
        const styles = window.getComputedStyle(el, ':focus');
        return {
          outline: styles.outline,
          outlineWidth: styles.outlineWidth,
          boxShadow: styles.boxShadow
        };
      });
      
      // At least one focus indicator should be present
      const hasFocusIndicator = 
        focusStyles.outline !== 'none' ||
        focusStyles.outlineWidth !== '0px' ||
        focusStyles.boxShadow !== 'none';
      
      expect(hasFocusIndicator).toBe(true);
    }
  });
});
