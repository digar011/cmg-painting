import { test, expect } from '@playwright/test';

test.describe('Page Content Tests', () => {
  test.describe('Home Page', () => {
    test('displays correct h1 heading', async ({ page }) => {
      await page.goto('/');
      const h1 = page.locator('h1');
      await expect(h1).toContainText('Transform Your Space');
    });

    test('hero section is visible', async ({ page }) => {
      await page.goto('/');
      await expect(page.getByTestId('home-hero')).toBeVisible();
    });

    test('services overview section is visible', async ({ page }) => {
      await page.goto('/');
      await expect(page.getByTestId('services-overview')).toBeVisible();
    });

    test('why CMG section is visible', async ({ page }) => {
      await page.goto('/');
      await expect(page.getByTestId('why-cmg')).toBeVisible();
    });

    test('CTA section is visible', async ({ page }) => {
      await page.goto('/');
      await expect(page.getByTestId('cta-section')).toBeVisible();
    });
  });

  test.describe('Services Page', () => {
    test('displays correct h1 heading', async ({ page }) => {
      await page.goto('/services');
      const h1 = page.locator('h1');
      await expect(h1).toContainText('Our Services');
    });

    test('services list is visible', async ({ page }) => {
      await page.goto('/services');
      await expect(page.getByTestId('services-list')).toBeVisible();
    });

    test('interior painting service is listed', async ({ page }) => {
      await page.goto('/services');
      await expect(page.getByTestId('service-interior-painting')).toBeVisible();
    });

    test('exterior painting service is listed', async ({ page }) => {
      await page.goto('/services');
      await expect(page.getByTestId('service-exterior-painting')).toBeVisible();
    });

    test('powerwashing service is listed', async ({ page }) => {
      await page.goto('/services');
      await expect(page.getByTestId('service-powerwashing')).toBeVisible();
    });

    test('light carpentry service is listed', async ({ page }) => {
      await page.goto('/services');
      await expect(page.getByTestId('service-light-carpentry')).toBeVisible();
    });
  });

  test.describe('Gallery Page', () => {
    test('displays correct h1 heading', async ({ page }) => {
      await page.goto('/gallery');
      const h1 = page.locator('h1');
      await expect(h1).toContainText('Project Gallery');
    });

    test('filter section is visible', async ({ page }) => {
      await page.goto('/gallery');
      await expect(page.getByTestId('gallery-filters')).toBeVisible();
    });

    test('gallery grid is visible', async ({ page }) => {
      await page.goto('/gallery');
      await expect(page.getByTestId('gallery-grid')).toBeVisible();
    });
  });

  test.describe('About Page', () => {
    test('displays correct h1 heading', async ({ page }) => {
      await page.goto('/about');
      const h1 = page.locator('h1');
      await expect(h1).toContainText('About CMG Painting');
    });

    test('stats section is visible', async ({ page }) => {
      await page.goto('/about');
      await expect(page.getByTestId('about-stats')).toBeVisible();
    });

    test('story section is visible', async ({ page }) => {
      await page.goto('/about');
      await expect(page.getByTestId('about-story')).toBeVisible();
    });

    test('values section is visible', async ({ page }) => {
      await page.goto('/about');
      await expect(page.getByTestId('about-values')).toBeVisible();
    });

    test('CTA section is visible', async ({ page }) => {
      await page.goto('/about');
      await expect(page.getByTestId('about-cta')).toBeVisible();
    });
  });

  test.describe('Contact Page', () => {
    test('displays correct h1 heading', async ({ page }) => {
      await page.goto('/contact');
      const h1 = page.locator('h1');
      await expect(h1).toContainText('Contact Us');
    });

    test('contact info section is visible', async ({ page }) => {
      await page.goto('/contact');
      await expect(page.getByTestId('contact-info')).toBeVisible();
    });

    test('contact form section is visible', async ({ page }) => {
      await page.goto('/contact');
      await expect(page.getByTestId('contact-form-section')).toBeVisible();
    });

    test('service areas section is visible', async ({ page }) => {
      await page.goto('/contact');
      await expect(page.getByTestId('service-areas')).toBeVisible();
    });
  });
});
