import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('Hero Section', () => {
    test('hero section is visible', async ({ page }) => {
      await expect(page.getByTestId('home-hero')).toBeVisible();
    });

    test('hero heading is visible', async ({ page }) => {
      await expect(page.getByTestId('hero-heading')).toBeVisible();
    });

    test('hero primary CTA is visible and clickable', async ({ page }) => {
      const cta = page.getByTestId('hero-cta-primary');
      await expect(cta).toBeVisible();
      await expect(cta).toContainText('Get Free Quote');
    });

    test('hero secondary CTA is visible and clickable', async ({ page }) => {
      const cta = page.getByTestId('hero-cta-secondary');
      await expect(cta).toBeVisible();
      await expect(cta).toContainText('View Our Work');
    });

    test('hero displays location text', async ({ page }) => {
      const hero = page.getByTestId('home-hero');
      await expect(hero).toContainText('Morris');
      await expect(hero).toContainText('Essex');
      await expect(hero).toContainText('Union');
      await expect(hero).toContainText('Sussex');
    });
  });

  test.describe('Services Overview Section', () => {
    test('services overview section is visible', async ({ page }) => {
      await expect(page.getByTestId('services-overview')).toBeVisible();
    });

    test('interior painting card is visible', async ({ page }) => {
      await expect(page.getByTestId('service-card-interior-painting')).toBeVisible();
    });

    test('exterior painting card is visible', async ({ page }) => {
      await expect(page.getByTestId('service-card-exterior-painting')).toBeVisible();
    });

    test('powerwashing card is visible', async ({ page }) => {
      await expect(page.getByTestId('service-card-powerwashing')).toBeVisible();
    });

    test('light carpentry card is visible', async ({ page }) => {
      await expect(page.getByTestId('service-card-light-carpentry')).toBeVisible();
    });

    test('service cards are clickable', async ({ page }) => {
      await page.getByTestId('service-card-interior-painting').click();
      await expect(page).toHaveURL(/\/services\/interior-painting/);
    });
  });

  test.describe('Why CMG Section', () => {
    test('why CMG section is visible', async ({ page }) => {
      await expect(page.getByTestId('why-cmg')).toBeVisible();
    });

    test('feature card 1 is visible', async ({ page }) => {
      await expect(page.getByTestId('why-cmg-card-1')).toBeVisible();
    });

    test('feature card 2 is visible', async ({ page }) => {
      await expect(page.getByTestId('why-cmg-card-2')).toBeVisible();
    });

    test('feature card 3 is visible', async ({ page }) => {
      await expect(page.getByTestId('why-cmg-card-3')).toBeVisible();
    });

    test('feature card 4 is visible', async ({ page }) => {
      await expect(page.getByTestId('why-cmg-card-4')).toBeVisible();
    });
  });

  test.describe('CTA Section', () => {
    test('CTA section is visible', async ({ page }) => {
      await expect(page.getByTestId('cta-section')).toBeVisible();
    });

    test('CTA primary button is visible', async ({ page }) => {
      await expect(page.getByTestId('cta-primary')).toBeVisible();
    });

    test('CTA secondary button is visible', async ({ page }) => {
      await expect(page.getByTestId('cta-secondary')).toBeVisible();
    });
  });
});

test.describe('Home Page - Mobile', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('hero section is responsive', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('home-hero')).toBeVisible();
    await expect(page.getByTestId('hero-cta-primary')).toBeVisible();
  });

  test('services overview displays in grid', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('services-overview')).toBeVisible();
  });
});
