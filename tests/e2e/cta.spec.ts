import { test, expect } from '@playwright/test';

test.describe('CTA Button Tests', () => {
  test.describe('Home Page CTAs', () => {
    test('hero primary CTA navigates to contact', async ({ page }) => {
      await page.goto('/');
      await page.getByTestId('hero-cta-primary').click();
      await expect(page).toHaveURL(/\/contact/);
    });

    test('hero secondary CTA navigates to gallery', async ({ page }) => {
      await page.goto('/');
      await page.getByTestId('hero-cta-secondary').click();
      await expect(page).toHaveURL(/\/gallery/);
    });

    test('CTA section primary button navigates to contact', async ({ page }) => {
      await page.goto('/');
      await page.getByTestId('cta-primary').click();
      await expect(page).toHaveURL(/\/contact/);
    });

    test('service cards navigate to service pages', async ({ page }) => {
      await page.goto('/');
      await page.getByTestId('service-card-interior-painting').click();
      await expect(page).toHaveURL(/\/services\/interior-painting/);
    });
  });

  test.describe('Services Page CTAs', () => {
    test('services page CTA navigates to contact', async ({ page }) => {
      await page.goto('/services');
      await page.getByTestId('services-cta').click();
      await expect(page).toHaveURL(/\/contact/);
    });
  });

  test.describe('Gallery Page CTAs', () => {
    test('gallery page CTA navigates to contact', async ({ page }) => {
      await page.goto('/gallery');
      await page.getByTestId('gallery-cta').click();
      await expect(page).toHaveURL(/\/contact/);
    });
  });

  test.describe('Header CTA', () => {
    test('header CTA navigates to contact from all pages', async ({ page }) => {
      const pages = ['/', '/services', '/gallery', '/about'];
      for (const path of pages) {
        await page.goto(path);
        await page.getByTestId('header-cta').click();
        await expect(page).toHaveURL(/\/contact/);
      }
    });
  });

  test.describe('Footer Links', () => {
    test('footer services links are present', async ({ page }) => {
      await page.goto('/');
      await expect(page.getByTestId('footer-services')).toBeVisible();
    });

    test('footer company links are present', async ({ page }) => {
      await page.goto('/');
      await expect(page.getByTestId('footer-company')).toBeVisible();
    });

    test('footer areas links are present', async ({ page }) => {
      await page.goto('/');
      await expect(page.getByTestId('footer-areas')).toBeVisible();
    });

    test('footer social links are present', async ({ page }) => {
      await page.goto('/');
      await expect(page.getByTestId('footer-social')).toBeVisible();
    });
  });
});
