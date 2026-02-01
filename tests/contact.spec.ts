import { test, expect } from '@playwright/test';

test.describe('Contact Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('displays page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Contact/);
  });

  test('displays correct h1', async ({ page }) => {
    const h1 = page.locator('h1');
    await expect(h1).toContainText('Contact Us');
  });

  test.describe('Contact Info Section', () => {
    test('contact info section is visible', async ({ page }) => {
      await expect(page.getByTestId('contact-info')).toBeVisible();
    });

    test('displays phone info', async ({ page }) => {
      await expect(page.getByText('Phone')).toBeVisible();
    });

    test('displays email info', async ({ page }) => {
      await expect(page.getByText('Email')).toBeVisible();
    });

    test('displays location info', async ({ page }) => {
      await expect(page.getByText('Location')).toBeVisible();
    });
  });

  test.describe('Contact Form', () => {
    test('contact form section is visible', async ({ page }) => {
      await expect(page.getByTestId('contact-form-section')).toBeVisible();
    });

    test('contact form is visible', async ({ page }) => {
      await expect(page.getByTestId('contact-form')).toBeVisible();
    });

    test('name input is visible', async ({ page }) => {
      await expect(page.getByTestId('input-name')).toBeVisible();
    });

    test('email input is visible', async ({ page }) => {
      await expect(page.getByTestId('input-email')).toBeVisible();
    });

    test('phone input is visible', async ({ page }) => {
      await expect(page.getByTestId('input-phone')).toBeVisible();
    });

    test('service select is visible', async ({ page }) => {
      await expect(page.getByTestId('input-service')).toBeVisible();
    });

    test('message textarea is visible', async ({ page }) => {
      await expect(page.getByTestId('input-message')).toBeVisible();
    });

    test('submit button is visible', async ({ page }) => {
      await expect(page.getByTestId('submit-button')).toBeVisible();
    });
  });

  test.describe('Form Validation', () => {
    test('shows error for empty name', async ({ page }) => {
      await page.getByTestId('input-email').fill('test@example.com');
      await page.getByTestId('input-phone').fill('1234567890');
      await page.getByTestId('submit-button').click();
      await expect(page.getByTestId('error-name')).toBeVisible();
    });

    test('shows error for invalid email', async ({ page }) => {
      await page.getByTestId('input-name').fill('John Doe');
      await page.getByTestId('input-email').fill('invalid-email');
      await page.getByTestId('input-phone').fill('1234567890');
      await page.getByTestId('submit-button').click();
      await expect(page.getByTestId('error-email')).toBeVisible();
    });

    test('shows error for invalid phone', async ({ page }) => {
      await page.getByTestId('input-name').fill('John Doe');
      await page.getByTestId('input-email').fill('test@example.com');
      await page.getByTestId('input-phone').fill('123');
      await page.getByTestId('submit-button').click();
      await expect(page.getByTestId('error-phone')).toBeVisible();
    });

    test('form submission works with valid data', async ({ page }) => {
      await page.getByTestId('input-name').fill('John Doe');
      await page.getByTestId('input-email').fill('test@example.com');
      await page.getByTestId('input-phone').fill('1234567890');
      await page.getByTestId('input-service').selectOption('Interior Painting');
      await page.getByTestId('input-message').fill('Test message');
      await page.getByTestId('submit-button').click();
      await expect(page.getByTestId('form-success')).toBeVisible();
    });

    test('success message displays after submission', async ({ page }) => {
      await page.getByTestId('input-name').fill('John Doe');
      await page.getByTestId('input-email').fill('test@example.com');
      await page.getByTestId('input-phone').fill('1234567890');
      await page.getByTestId('submit-button').click();
      await expect(page.getByTestId('form-success')).toContainText('Thank You');
    });
  });

  test.describe('Service Areas Section', () => {
    test('service areas section is visible', async ({ page }) => {
      await expect(page.getByTestId('service-areas')).toBeVisible();
    });

    test('Morris County is listed', async ({ page }) => {
      await expect(page.getByText('Morris County')).toBeVisible();
    });

    test('Essex County is listed', async ({ page }) => {
      await expect(page.getByText('Essex County')).toBeVisible();
    });

    test('Union County is listed', async ({ page }) => {
      await expect(page.getByText('Union County')).toBeVisible();
    });

    test('Sussex County is listed', async ({ page }) => {
      await expect(page.getByText('Sussex County')).toBeVisible();
    });
  });
});

test.describe('Contact Page - Mobile', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('contact form is responsive', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.getByTestId('contact-form')).toBeVisible();
  });

  test('service areas are responsive', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.getByTestId('service-areas')).toBeVisible();
  });
});
