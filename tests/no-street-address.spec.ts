import { test, expect } from '@playwright/test';

// Owner rule: the site shows city and state only — never a street address or ZIP.
for (const path of ['/', '/about', '/contact', '/privacy']) {
  test(`no street address or ZIP on ${path}`, async ({ page }) => {
    await page.goto(path);
    const html = await page.content();
    expect(html).not.toMatch(/Gristmill|07869|streetAddress|postalCode/);
    await expect(page.getByTestId('site-footer')).toContainText('Randolph, NJ');
  });
}
