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

    test('displays years in business stat', async ({ page }) => {
      const stats = page.getByTestId('about-stats');
      await expect(stats.getByText('Years in Business')).toBeVisible();
    });

    test('displays counties served stat', async ({ page }) => {
      const stats = page.getByTestId('about-stats');
      await expect(stats.getByText('NJ Counties Served')).toBeVisible();
    });

    test('displays finish coats stat', async ({ page }) => {
      const stats = page.getByTestId('about-stats');
      await expect(stats.getByText('Finish Coats, Standard')).toBeVisible();
    });

    test('displays written estimates stat', async ({ page }) => {
      const stats = page.getByTestId('about-stats');
      await expect(stats.getByText('Written Estimates')).toBeVisible();
    });
  });

  test.describe('Story Section', () => {
    test('story section is visible', async ({ page }) => {
      await expect(page.getByTestId('about-story')).toBeVisible();
    });

    test('displays story heading', async ({ page }) => {
      await expect(page.getByText('Our Story', { exact: true })).toBeVisible();
    });

    test('displays story content', async ({ page }) => {
      await expect(
        page.getByRole('heading', { name: 'More Than a Decade of Painting in Northern New Jersey' }),
      ).toBeVisible();
    });

    test('shows a real project photo', async ({ page }) => {
      await expect(page.getByTestId('about-story-image')).toBeVisible();
    });
  });

  test.describe('Process Section', () => {
    test('process section is visible', async ({ page }) => {
      await expect(page.getByTestId('about-process')).toBeVisible();
    });

    test('lists five process steps', async ({ page }) => {
      await expect(page.getByTestId('about-process-step')).toHaveCount(5);
    });

    test('describes protection and cleanup', async ({ page }) => {
      const process = page.getByTestId('about-process');
      await expect(process.getByText('Protection First')).toBeVisible();
      await expect(process.getByText('Daily Cleanup & Touch-Up Paint')).toBeVisible();
    });
  });

  test.describe('Values Section', () => {
    test('values section is visible', async ({ page }) => {
      await expect(page.getByTestId('about-values')).toBeVisible();
    });

    test('displays values heading', async ({ page }) => {
      await expect(page.getByText('Our Core Values', { exact: true })).toBeVisible();
    });

    test('displays locally owned value', async ({ page }) => {
      await expect(page.getByText('Locally Owned', { exact: true })).toBeVisible();
    });

    test('displays written scopes value', async ({ page }) => {
      await expect(page.getByText('Clear, Written Scopes', { exact: true })).toBeVisible();
    });

    test('displays respect value', async ({ page }) => {
      await expect(page.getByText('Respect for Your Space', { exact: true })).toBeVisible();
    });

    test('displays residential and commercial value', async ({ page }) => {
      await expect(page.getByText('Residential & Commercial', { exact: true })).toBeVisible();
    });
  });

  test.describe('Recent Work Section', () => {
    test('shows three real projects', async ({ page }) => {
      const work = page.getByTestId('about-work');
      await expect(work).toBeVisible();
      await expect(work.locator('img')).toHaveCount(3);
    });

    test('links to the gallery', async ({ page }) => {
      await expect(page.getByTestId('about-gallery-link')).toHaveAttribute('href', '/gallery');
    });
  });

  test.describe('Service Area Section', () => {
    test('lists served counties and towns', async ({ page }) => {
      const area = page.getByTestId('about-service-area');
      await expect(area).toBeVisible();
      await expect(area.getByRole('heading', { name: 'Morris County' })).toBeVisible();
      await expect(area.getByText('Randolph', { exact: true })).toBeVisible();
    });
  });

  test.describe('CTA Section', () => {
    test('CTA section is visible', async ({ page }) => {
      await expect(page.getByTestId('about-cta')).toBeVisible();
    });

    test('CTA has heading', async ({ page }) => {
      await expect(page.getByText('Ready to Work Together?')).toBeVisible();
    });

    test('CTA links to contact form and phone', async ({ page }) => {
      await expect(page.getByTestId('about-cta-quote')).toHaveAttribute('href', '/contact');
      await expect(page.getByTestId('about-cta-phone')).toHaveAttribute('href', 'tel:9734627310');
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
