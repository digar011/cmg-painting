import { test, expect } from '@playwright/test';

test.describe('Header Component', () => {
  test('header is visible on all pages', async ({ page }) => {
    const pages = ['/', '/services', '/gallery', '/about', '/contact'];
    for (const path of pages) {
      await page.goto(path);
      await expect(page.getByTestId('site-header')).toBeVisible();
    }
  });

  test('header is sticky', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => window.scrollTo(0, 500));
    await expect(page.getByTestId('site-header')).toBeVisible();
  });

  test('header has logo', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('site-logo')).toBeVisible();
  });

  test('header has navigation', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('primary-nav')).toBeVisible();
  });

  test('header has CTA button', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('header-cta')).toBeVisible();
  });

  test('header changes style on scroll', async ({ page }) => {
    await page.goto('/');
    const header = page.getByTestId('site-header');
    await page.evaluate(() => window.scrollTo(0, 100));
    await page.waitForTimeout(500);
    await expect(header).toHaveClass(/backdrop-blur/);
  });
});

test.describe('Footer Component', () => {
  test('footer is visible on all pages', async ({ page }) => {
    const pages = ['/', '/services', '/gallery', '/about', '/contact'];
    for (const path of pages) {
      await page.goto(path);
      await expect(page.getByTestId('site-footer')).toBeVisible();
    }
  });

  test('footer has logo', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('footer-logo')).toBeVisible();
  });

  test('footer has services section', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('footer-services')).toBeVisible();
  });

  test('footer has company section', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('footer-company')).toBeVisible();
  });

  test('footer has areas section', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('footer-areas')).toBeVisible();
  });

  test('footer has social links', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('footer-social')).toBeVisible();
  });

  test('footer has copyright text', async ({ page }) => {
    await page.goto('/');
    const currentYear = new Date().getFullYear().toString();
    await expect(page.getByTestId('site-footer')).toContainText(currentYear);
  });
});

test.describe('BackToTop Component', () => {
  test('back to top is hidden initially', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('back-to-top')).not.toBeVisible();
  });

  test('back to top appears after scrolling', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(500);
    await expect(page.getByTestId('back-to-top')).toBeVisible();
  });

  test('back to top scrolls to top when clicked', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(500);
    await page.getByTestId('back-to-top').click();
    await page.waitForTimeout(500);
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeLessThan(50);
  });
});

test.describe('Header Component - Mobile', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('mobile menu toggle is visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('mobile-menu-toggle')).toBeVisible();
  });

  test('desktop nav is hidden on mobile', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('nav-link-services')).not.toBeVisible();
  });

  test('mobile menu opens and closes', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('mobile-menu-toggle').click();
    await expect(page.getByTestId('mobile-menu')).toBeVisible();
    await page.getByTestId('mobile-menu-toggle').click();
    await expect(page.getByTestId('mobile-menu')).not.toBeVisible();
  });
});
