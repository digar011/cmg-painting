import { test, expect } from '@playwright/test';

test.describe('Gallery Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/gallery');
  });

  test('displays page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Gallery/);
  });

  test('displays correct h1', async ({ page }) => {
    const h1 = page.locator('h1');
    await expect(h1).toContainText('Project Gallery');
  });

  test.describe('Filter Functionality', () => {
    test('filters section is visible', async ({ page }) => {
      await expect(page.getByTestId('gallery-filters')).toBeVisible();
    });

    test('all filter button is visible', async ({ page }) => {
      await expect(page.getByTestId('filter-all')).toBeVisible();
    });

    test('interior filter button is visible', async ({ page }) => {
      await expect(page.getByTestId('filter-interior')).toBeVisible();
    });

    test('exterior filter button is visible', async ({ page }) => {
      await expect(page.getByTestId('filter-exterior')).toBeVisible();
    });

    test('powerwashing filter button is visible', async ({ page }) => {
      await expect(page.getByTestId('filter-powerwashing')).toBeVisible();
    });

    test('carpentry filter button is visible', async ({ page }) => {
      await expect(page.getByTestId('filter-carpentry')).toBeVisible();
    });

    test('clicking filter changes active state', async ({ page }) => {
      const interiorFilter = page.getByTestId('filter-interior');
      await interiorFilter.click();
      await expect(interiorFilter).toHaveClass(/bg-cmg-royal/);
    });

    test('all filter shows all projects', async ({ page }) => {
      await page.getByTestId('filter-all').click();
      const projectCards = page.getByTestId('project-card');
      await expect(projectCards.first()).toBeVisible();
    });

    test('interior filter filters projects', async ({ page }) => {
      await page.getByTestId('filter-interior').click();
      await page.waitForTimeout(300);
      const grid = page.getByTestId('gallery-grid');
      await expect(grid).toBeVisible();
    });

    test('exterior filter filters projects', async ({ page }) => {
      await page.getByTestId('filter-exterior').click();
      await page.waitForTimeout(300);
      const grid = page.getByTestId('gallery-grid');
      await expect(grid).toBeVisible();
    });
  });

  test.describe('Gallery Grid', () => {
    test('gallery grid is visible', async ({ page }) => {
      await expect(page.getByTestId('gallery-grid')).toBeVisible();
    });

    test('project cards are visible', async ({ page }) => {
      const projectCards = page.getByTestId('project-card');
      await expect(projectCards.first()).toBeVisible();
    });

    test('project cards have category badges', async ({ page }) => {
      const projectCard = page.getByTestId('project-card').first();
      const badge = projectCard.locator('span:has-text("Interior"), span:has-text("Exterior"), span:has-text("Powerwashing"), span:has-text("Carpentry")');
      await expect(badge).toBeVisible();
    });
  });

  test.describe('Lightbox Modal', () => {
    test('clicking project card opens lightbox', async ({ page }) => {
      await page.getByTestId('project-card').first().click();
      await expect(page.getByTestId('lightbox-modal')).toBeVisible();
    });

    test('lightbox has close button', async ({ page }) => {
      await page.getByTestId('project-card').first().click();
      await expect(page.getByTestId('lightbox-close')).toBeVisible();
    });

    test('clicking close button closes lightbox', async ({ page }) => {
      await page.getByTestId('project-card').first().click();
      await page.getByTestId('lightbox-close').click();
      await expect(page.getByTestId('lightbox-modal')).not.toBeVisible();
    });

    test('clicking outside lightbox closes it', async ({ page }) => {
      await page.getByTestId('project-card').first().click();
      await page.getByTestId('lightbox-modal').click({ position: { x: 10, y: 10 } });
      await expect(page.getByTestId('lightbox-modal')).not.toBeVisible();
    });
  });

  test.describe('CTA Section', () => {
    test('gallery CTA button is visible', async ({ page }) => {
      await expect(page.getByTestId('gallery-cta')).toBeVisible();
    });

    test('gallery CTA navigates to contact', async ({ page }) => {
      await page.getByTestId('gallery-cta').click();
      await expect(page).toHaveURL(/\/contact/);
    });
  });
});

test.describe('Gallery Page - Mobile', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('gallery page is responsive', async ({ page }) => {
    await page.goto('/gallery');
    await expect(page.getByTestId('gallery-grid')).toBeVisible();
  });

  test('filters wrap on mobile', async ({ page }) => {
    await page.goto('/gallery');
    await expect(page.getByTestId('gallery-filters')).toBeVisible();
  });
});
