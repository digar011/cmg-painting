import { test, expect } from '@playwright/test';

test.describe('Services Hub Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/services');
  });

  test('displays page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Services/);
  });

  test('displays correct h1', async ({ page }) => {
    const h1 = page.locator('h1');
    await expect(h1).toContainText('Our Services');
  });

  test('services list section is visible', async ({ page }) => {
    await expect(page.getByTestId('services-list')).toBeVisible();
  });

  test('all four services are listed', async ({ page }) => {
    await expect(page.getByTestId('service-interior-painting')).toBeVisible();
    await expect(page.getByTestId('service-exterior-painting')).toBeVisible();
    await expect(page.getByTestId('service-powerwashing')).toBeVisible();
    await expect(page.getByTestId('service-light-carpentry')).toBeVisible();
  });

  test('services CTA button is visible', async ({ page }) => {
    await expect(page.getByTestId('services-cta')).toBeVisible();
  });

  test('services CTA navigates to contact', async ({ page }) => {
    await page.getByTestId('services-cta').click();
    await expect(page).toHaveURL(/\/contact/);
  });
});

test.describe('Interior Painting Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/services/interior-painting');
  });

  test('displays page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Interior Painting/);
  });

  test('displays correct h1', async ({ page }) => {
    const h1 = page.locator('h1');
    await expect(h1).toContainText('Interior Painting');
  });

  test('features section is visible', async ({ page }) => {
    await expect(page.getByTestId('service-features')).toBeVisible();
  });

  test('back to services link works', async ({ page }) => {
    await page.getByText('Back to Services').click();
    await expect(page).toHaveURL(/\/services$/);
  });
});

test.describe('Exterior Painting Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/services/exterior-painting');
  });

  test('displays page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Exterior Painting/);
  });

  test('displays correct h1', async ({ page }) => {
    const h1 = page.locator('h1');
    await expect(h1).toContainText('Exterior Painting');
  });

  test('features section is visible', async ({ page }) => {
    await expect(page.getByTestId('service-features')).toBeVisible();
  });

  test('back to services link works', async ({ page }) => {
    await page.getByText('Back to Services').click();
    await expect(page).toHaveURL(/\/services$/);
  });
});

test.describe('Powerwashing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/services/powerwashing');
  });

  test('displays page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Powerwashing/);
  });

  test('displays correct h1', async ({ page }) => {
    const h1 = page.locator('h1');
    await expect(h1).toContainText('Powerwashing');
  });

  test('features section is visible', async ({ page }) => {
    await expect(page.getByTestId('service-features')).toBeVisible();
  });

  test('back to services link works', async ({ page }) => {
    await page.getByText('Back to Services').click();
    await expect(page).toHaveURL(/\/services$/);
  });
});

test.describe('Light Carpentry Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/services/light-carpentry');
  });

  test('displays page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Light Carpentry/);
  });

  test('displays correct h1', async ({ page }) => {
    const h1 = page.locator('h1');
    await expect(h1).toContainText('Light Carpentry');
  });

  test('features section is visible', async ({ page }) => {
    await expect(page.getByTestId('service-features')).toBeVisible();
  });

  test('back to services link works', async ({ page }) => {
    await page.getByText('Back to Services').click();
    await expect(page).toHaveURL(/\/services$/);
  });
});

test.describe('Services Pages - Mobile', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('services hub is responsive', async ({ page }) => {
    await page.goto('/services');
    await expect(page.getByTestId('services-list')).toBeVisible();
  });

  test('service subpage is responsive', async ({ page }) => {
    await page.goto('/services/interior-painting');
    await expect(page.getByTestId('service-features')).toBeVisible();
  });
});
