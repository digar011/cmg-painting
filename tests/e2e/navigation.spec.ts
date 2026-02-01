import { test, expect } from '@playwright/test';

test.describe('Navigation Tests', () => {
  test.describe('Desktop Navigation', () => {
    test('header displays all navigation links', async ({ page }) => {
      await page.goto('/');
      await expect(page.getByTestId('nav-link-services')).toBeVisible();
      await expect(page.getByTestId('nav-link-gallery')).toBeVisible();
      await expect(page.getByTestId('nav-link-about')).toBeVisible();
      await expect(page.getByTestId('nav-link-contact')).toBeVisible();
    });

    test('services nav link navigates correctly', async ({ page }) => {
      await page.goto('/');
      await page.getByTestId('nav-link-services').click();
      await expect(page).toHaveURL(/\/services/);
    });

    test('gallery nav link navigates correctly', async ({ page }) => {
      await page.goto('/');
      await page.getByTestId('nav-link-gallery').click();
      await expect(page).toHaveURL(/\/gallery/);
    });

    test('about nav link navigates correctly', async ({ page }) => {
      await page.goto('/');
      await page.getByTestId('nav-link-about').click();
      await expect(page).toHaveURL(/\/about/);
    });

    test('contact nav link navigates correctly', async ({ page }) => {
      await page.goto('/');
      await page.getByTestId('nav-link-contact').click();
      await expect(page).toHaveURL(/\/contact/);
    });

    test('header CTA button navigates to contact', async ({ page }) => {
      await page.goto('/');
      await page.getByTestId('header-cta').click();
      await expect(page).toHaveURL(/\/contact/);
    });

    test('logo navigates to home', async ({ page }) => {
      await page.goto('/services');
      await page.getByTestId('site-logo').click();
      await expect(page).toHaveURL('/');
    });
  });

  test.describe('Mobile Navigation', () => {
    test.use({ viewport: { width: 375, height: 667 } });

    test('mobile menu toggle is visible on mobile', async ({ page }) => {
      await page.goto('/');
      await expect(page.getByTestId('mobile-menu-toggle')).toBeVisible();
    });

    test('mobile menu opens on toggle click', async ({ page }) => {
      await page.goto('/');
      await page.getByTestId('mobile-menu-toggle').click();
      await expect(page.getByTestId('mobile-menu')).toBeVisible();
    });

    test('mobile menu closes after navigation', async ({ page }) => {
      await page.goto('/');
      await page.getByTestId('mobile-menu-toggle').click();
      await page.getByTestId('mobile-nav-link-services').click();
      await expect(page).toHaveURL(/\/services/);
    });

    test('mobile services link navigates correctly', async ({ page }) => {
      await page.goto('/');
      await page.getByTestId('mobile-menu-toggle').click();
      await page.getByTestId('mobile-nav-link-services').click();
      await expect(page).toHaveURL(/\/services/);
    });

    test('mobile gallery link navigates correctly', async ({ page }) => {
      await page.goto('/');
      await page.getByTestId('mobile-menu-toggle').click();
      await page.getByTestId('mobile-nav-link-gallery').click();
      await expect(page).toHaveURL(/\/gallery/);
    });

    test('mobile about link navigates correctly', async ({ page }) => {
      await page.goto('/');
      await page.getByTestId('mobile-menu-toggle').click();
      await page.getByTestId('mobile-nav-link-about').click();
      await expect(page).toHaveURL(/\/about/);
    });

    test('mobile contact link navigates correctly', async ({ page }) => {
      await page.goto('/');
      await page.getByTestId('mobile-menu-toggle').click();
      await page.getByTestId('mobile-nav-link-contact').click();
      await expect(page).toHaveURL(/\/contact/);
    });
  });
});
