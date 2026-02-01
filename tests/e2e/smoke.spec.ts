import { test, expect } from '@playwright/test';

test.describe('Smoke Tests', () => {
  test.describe('Page Load Tests', () => {
    test('home page loads successfully', async ({ page }) => {
      await page.goto('/');
      await expect(page).toHaveTitle(/CMG Painting/);
      await expect(page.getByTestId('site-header')).toBeVisible();
      await expect(page.getByTestId('site-footer')).toBeVisible();
    });

    test('services page loads successfully', async ({ page }) => {
      await page.goto('/services');
      await expect(page).toHaveTitle(/Services/);
      await expect(page.getByTestId('site-header')).toBeVisible();
      await expect(page.getByTestId('site-footer')).toBeVisible();
    });

    test('interior painting page loads successfully', async ({ page }) => {
      await page.goto('/services/interior-painting');
      await expect(page).toHaveTitle(/Interior Painting/);
      await expect(page.getByTestId('site-header')).toBeVisible();
    });

    test('exterior painting page loads successfully', async ({ page }) => {
      await page.goto('/services/exterior-painting');
      await expect(page).toHaveTitle(/Exterior Painting/);
      await expect(page.getByTestId('site-header')).toBeVisible();
    });

    test('powerwashing page loads successfully', async ({ page }) => {
      await page.goto('/services/powerwashing');
      await expect(page).toHaveTitle(/Powerwashing/);
      await expect(page.getByTestId('site-header')).toBeVisible();
    });

    test('light carpentry page loads successfully', async ({ page }) => {
      await page.goto('/services/light-carpentry');
      await expect(page).toHaveTitle(/Light Carpentry/);
      await expect(page.getByTestId('site-header')).toBeVisible();
    });

    test('gallery page loads successfully', async ({ page }) => {
      await page.goto('/gallery');
      await expect(page).toHaveTitle(/Gallery/);
      await expect(page.getByTestId('site-header')).toBeVisible();
      await expect(page.getByTestId('site-footer')).toBeVisible();
    });

    test('about page loads successfully', async ({ page }) => {
      await page.goto('/about');
      await expect(page).toHaveTitle(/About/);
      await expect(page.getByTestId('site-header')).toBeVisible();
      await expect(page.getByTestId('site-footer')).toBeVisible();
    });

    test('contact page loads successfully', async ({ page }) => {
      await page.goto('/contact');
      await expect(page).toHaveTitle(/Contact/);
      await expect(page.getByTestId('site-header')).toBeVisible();
      await expect(page.getByTestId('site-footer')).toBeVisible();
    });
  });

  test.describe('Console Error Checks', () => {
    test('home page has no console errors', async ({ page }) => {
      const errors: string[] = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          errors.push(msg.text());
        }
      });
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      // Filter out expected errors (e.g., favicon)
      const unexpectedErrors = errors.filter(
        (e) => !e.includes('favicon') && !e.includes('404')
      );
      expect(unexpectedErrors).toHaveLength(0);
    });
  });
});
