import { test, expect } from '@playwright/test';

test.describe('Privacy Policy page', () => {
  test('renders with contact details and lead-form disclosure', async ({ page }) => {
    await page.goto('/privacy');
    await expect(page.getByRole('heading', { level: 1, name: 'Privacy Policy' })).toBeVisible();
    await expect(page.getByText(/Lead forms on Facebook and Instagram/)).toBeVisible();
    await expect(page.getByText(/do not sell or rent your personal information/)).toBeVisible();
    await expect(page.getByTestId('privacy-page').getByRole('link', { name: /462-7310/ })).toBeVisible();
  });

  test('is linked from the footer', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('site-footer').getByRole('link', { name: 'Privacy Policy' }).click();
    await expect(page).toHaveURL(/\/privacy$/);
  });
});
