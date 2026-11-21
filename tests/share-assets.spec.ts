import { test, expect } from '@playwright/test';

/**
 * Guards the link-preview image and favicons referenced in app/layout.tsx.
 * They 404'd in production before launch, so Facebook shares showed no picture.
 */
test.describe('Share image and favicons', () => {
  const assets: [string, string][] = [
    ['/og-image.jpg', 'image/jpeg'],
    ['/favicon.ico', 'image/'],
    ['/apple-touch-icon.png', 'image/png'],
    ['/icon.png', 'image/png'],
    ['/images/brand/cmg-logo.png', 'image/png'],
  ];

  for (const [path, type] of assets) {
    test(`${path} is served as an image`, async ({ request }) => {
      const res = await request.get(path);
      expect(res.status()).toBe(200);
      expect(res.headers()['content-type']).toContain(type);
    });
  }

  test('home page head points at the share image and icons', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /\/og-image\.jpg$/);
    await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute('content', /\/og-image\.jpg$/);
    await expect(page.locator('link[rel="icon"][href="/favicon.ico"]')).toHaveCount(1);
    await expect(page.locator('link[rel="apple-touch-icon"]')).toHaveAttribute('href', '/apple-touch-icon.png');
  });
});

test.describe('Footer social links', () => {
  test('Facebook link opens the CMG page in a new tab', async ({ page }) => {
    await page.goto('/');
    const fb = page.getByTestId('footer-social-facebook');
    await expect(fb).toHaveAttribute('href', 'https://www.facebook.com/CMGPaintinganddesign/');
    await expect(fb).toHaveAttribute('target', '_blank');
    await expect(fb).toHaveAttribute('rel', /noopener/);
  });

  test('every social link has an accessible name and a real URL', async ({ page }) => {
    await page.goto('/');
    const links = page.getByTestId('footer-social').locator('a');
    const count = await links.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      await expect(links.nth(i)).toHaveAttribute('aria-label', /CMG Painting and Design on /);
      await expect(links.nth(i)).toHaveAttribute('href', /^https:\/\//);
    }
  });
});

test.describe('Logo', () => {
  test('header and footer show the CMG logo image', async ({ page }) => {
    await page.goto('/');
    const header = page.getByTestId('site-logo').getByRole('img', { name: 'CMG Painting and Design' });
    await expect(header).toBeVisible();
    await expect(header).toHaveJSProperty('complete', true);
    expect(await header.evaluate((i: HTMLImageElement) => i.naturalWidth)).toBeGreaterThan(0);
    await expect(page.getByTestId('footer-logo').getByRole('img', { name: 'CMG Painting and Design' })).toBeAttached();
  });
});
