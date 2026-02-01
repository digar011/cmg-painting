import { test, expect } from '@playwright/test';

test.describe('About Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about');
  });

  test('displays page title', async ({ page }) => {
    await expect(page).toHaveTitle(/About/);
  });

  test('displays correct h1', async ({ page }) => {
    const h1 = page.locator('h1');
    await expect(h1).toContainText('About CMG Painting');
  });

  test.describe('Stats Section', () => {
    test('stats section is visible', async ({ page }) => {
      await expect(page.getByTestId('about-stats')).toBeVisible();
    });

    test('displays quality stat', async ({ page }) => {
      const stats = page.getByTestId('about-stats');
      await expect(stats.getByText('Quality')).toBeVisible();
    });

    test('displays local stat', async ({ page }) => {
      const stats = page.getByTestId('about-stats');
      await expect(stats.getByText('Local')).toBeVisible();
    });

    test('displays fully insured stat', async ({ page }) => {
      const stats = page.getByTestId('about-stats');
      await expect(stats.getByText('Fully Insured')).toBeVisible();
    });

    test('displays customer service stat', async ({ page }) => {
      const stats = page.getByTestId('about-stats');
      await expect(stats.getByText('Customer Service')).toBeVisible();
    });
  });

  test.describe('Story Section', () => {
    test('story section is visible', async ({ page }) => {
      await expect(page.getByTestId('about-story')).toBeVisible();
    });

    test('displays story heading', async ({ page }) => {
      await expect(page.getByText('Our Story')).toBeVisible();
    });

    test('displays story content', async ({ page }) => {
      await expect(page.getByText('Committed to Excellence')).toBeVisible();
    });
  });

  test.describe('Values Section', () => {
    test('values section is visible', async ({ page }) => {
      await expect(page.getByTestId('about-values')).toBeVisible();
    });

    test('displays values heading', async ({ page }) => {
      await expect(page.getByText('Our Core Values')).toBeVisible();
    });

    test('displays quality craftsmanship value', async ({ page }) => {
      await expect(page.getByText('Quality Craftsmanship')).toBeVisible();
    });

    test('displays transparent communication value', async ({ page }) => {
      await expect(page.getByText('Transparent Communication')).toBeVisible();
    });

    test('displays customer first value', async ({ page }) => {
      await expect(page.getByText('Customer First')).toBeVisible();
    });

    test('displays local commitment value', async ({ page }) => {
      await expect(page.getByText('Local Commitment')).toBeVisible();
    });
  });

  test.describe('CTA Section', () => {
    test('CTA section is visible', async ({ page }) => {
      await expect(page.getByTestId('about-cta')).toBeVisible();
    });

    test('CTA has heading', async ({ page }) => {
      await expect(page.getByText('Ready to Work Together?')).toBeVisible();
    });
  });
});

test.describe('About Page - Mobile', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('about page is responsive', async ({ page }) => {
    await page.goto('/about');
    await expect(page.getByTestId('about-story')).toBeVisible();
  });

  test('stats section is responsive', async ({ page }) => {
    await page.goto('/about');
    await expect(page.getByTestId('about-stats')).toBeVisible();
  });

  test('values section is responsive', async ({ page }) => {
    await page.goto('/about');
    await expect(page.getByTestId('about-values')).toBeVisible();
  });
});
