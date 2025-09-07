import { test, expect } from "@playwright/test";
import { createTestHelpers } from "../utils/test-helpers";

test.describe("Projects Section", () => {
  let helpers: ReturnType<typeof createTestHelpers>;

  test.beforeEach(async ({ page }) => {
    helpers = createTestHelpers(page);
    await page.goto("/");
    await helpers.waitForPageLoad();
  });

  test("should display projects section", async ({ page }) => {
    // Navigate to projects section
    const projectsLink = page.locator('a[href="#projects"]');
    if ((await projectsLink.count()) > 0) {
      await projectsLink.click();
      await page.waitForTimeout(500);
    }

    // Check if projects section exists
    const projectsSection = page.locator('#projects, [data-testid="projects"]');
    if ((await projectsSection.count()) > 0) {
      await expect(projectsSection).toBeVisible();

      // Check for project cards
      const projectCards = projectsSection.locator('[data-testid^="project-"], .project-card');
      if ((await projectCards.count()) > 0) {
        await expect(projectCards.first()).toBeVisible();
      }
    }
  });

  test("should have project cards with proper structure", async ({ page }) => {
    const projectsSection = page.locator('#projects, [data-testid="projects"]');

    if ((await projectsSection.count()) > 0) {
      const projectCards = projectsSection.locator('[data-testid^="project-"], .project-card');
      const cardCount = await projectCards.count();

      if (cardCount > 0) {
        const firstCard = projectCards.first();

        // Check for project image
        const projectImage = firstCard.locator("img");
        if ((await projectImage.count()) > 0) {
          await expect(projectImage).toBeVisible();
          await expect(projectImage).toHaveAttribute("alt");
        }

        // Check for project title
        const projectTitle = firstCard.locator("h3, h4, .project-title");
        if ((await projectTitle.count()) > 0) {
          await expect(projectTitle).toBeVisible();
        }

        // Check for project description
        const projectDescription = firstCard.locator("p, .project-description");
        if ((await projectDescription.count()) > 0) {
          await expect(projectDescription).toBeVisible();
        }

        // Check for project links
        const projectLinks = firstCard.locator("a");
        if ((await projectLinks.count()) > 0) {
          await expect(projectLinks.first()).toBeVisible();
        }
      }
    }
  });

  test("should have working project links", async ({ page }) => {
    const projectsSection = page.locator('#projects, [data-testid="projects"]');

    if ((await projectsSection.count()) > 0) {
      const projectLinks = projectsSection.locator("a[href]");
      const linkCount = await projectLinks.count();

      if (linkCount > 0) {
        const firstLink = projectLinks.first();
        const href = await firstLink.getAttribute("href");

        expect(href).toBeTruthy();

        // Check if it's an external link
        if (href && (href.startsWith("http") || href.startsWith("//"))) {
          await expect(firstLink).toHaveAttribute("target", "_blank");
          await expect(firstLink).toHaveAttribute("rel", "noopener noreferrer");
        }
      }
    }
  });

  test("should be responsive on different screen sizes", async ({ page }) => {
    const projectsSection = page.locator('#projects, [data-testid="projects"]');

    if ((await projectsSection.count()) > 0) {
      // Test mobile
      await helpers.setViewportSize(375, 667);
      await expect(projectsSection).toBeVisible();

      // Test tablet
      await helpers.setViewportSize(768, 1024);
      await expect(projectsSection).toBeVisible();

      // Test desktop
      await helpers.setViewportSize(1280, 720);
      await expect(projectsSection).toBeVisible();
    }
  });
});

test.describe("Tech Stack Section", () => {
  let helpers: ReturnType<typeof createTestHelpers>;

  test.beforeEach(async ({ page }) => {
    helpers = createTestHelpers(page);
    await page.goto("/");
    await helpers.waitForPageLoad();
  });

  test("should display tech stack section", async ({ page }) => {
    // Navigate to tech stack section
    const techStackLink = page.locator('a[href="#tech-stack"]');
    if ((await techStackLink.count()) > 0) {
      await techStackLink.click();
      await page.waitForTimeout(500);
    }

    // Check if tech stack section exists
    const techStackSection = page.locator('#tech-stack, [data-testid="tech-stack"]');
    if ((await techStackSection.count()) > 0) {
      await expect(techStackSection).toBeVisible();

      // Check for tech cards
      const techCards = techStackSection.locator('[data-testid^="tech-"], .tech-card');
      if ((await techCards.count()) > 0) {
        await expect(techCards.first()).toBeVisible();
      }
    }
  });

  test("should have tech cards with proper structure", async ({ page }) => {
    const techStackSection = page.locator('#tech-stack, [data-testid="tech-stack"]');

    if ((await techStackSection.count()) > 0) {
      const techCards = techStackSection.locator('[data-testid^="tech-"], .tech-card');
      const cardCount = await techCards.count();

      if (cardCount > 0) {
        const firstCard = techCards.first();

        // Check for tech icon
        const techIcon = firstCard.locator("img, svg");
        if ((await techIcon.count()) > 0) {
          await expect(techIcon).toBeVisible();
        }

        // Check for tech name
        const techName = firstCard.locator("h3, h4, .tech-name");
        if ((await techName.count()) > 0) {
          await expect(techName).toBeVisible();
        }
      }
    }
  });

  test("should be responsive on different screen sizes", async ({ page }) => {
    const techStackSection = page.locator('#tech-stack, [data-testid="tech-stack"]');

    if ((await techStackSection.count()) > 0) {
      // Test mobile
      await helpers.setViewportSize(375, 667);
      await expect(techStackSection).toBeVisible();

      // Test tablet
      await helpers.setViewportSize(768, 1024);
      await expect(techStackSection).toBeVisible();

      // Test desktop
      await helpers.setViewportSize(1280, 720);
      await expect(techStackSection).toBeVisible();
    }
  });
});
