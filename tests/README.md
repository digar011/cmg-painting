# Playwright Testing Documentation

## Overview

This project uses Playwright for comprehensive E2E testing. The test suite covers all pages, components, navigation, forms, and responsive behavior.

## Test Suite Summary

| File | Test Count | Coverage |
|------|------------|----------|
| `e2e/smoke.spec.ts` | 10 | All pages load, no console errors |
| `e2e/navigation.spec.ts` | 15 | Desktop nav, mobile menu, all routes |
| `e2e/pages.spec.ts` | 20 | Page headings, sections render |
| `e2e/cta.spec.ts` | 12 | All CTA buttons navigate correctly |
| `home.spec.ts` | 17 | Hero, services, WhyCMG, CTA |
| `services.spec.ts` | 22 | Hub + 4 subpages |
| `gallery.spec.ts` | 18 | Filters, grid, lightbox modal |
| `contact.spec.ts` | 22 | Form fields, validation, submission |
| `about.spec.ts` | 15 | Stats, story, values, CTA |
| `components.spec.ts` | 15 | Header, Footer, BackToTop |

**Total: ~166 tests**

## Running Tests

### Run All Tests
```bash
npm test
```

### Run Specific Test File
```bash
npx playwright test tests/home.spec.ts
```

### Run Tests in Headed Mode (Browser Visible)
```bash
npm run test:headed
```

### Run Tests with Playwright UI
```bash
npm run test:ui
```

### Run Tests for Single Browser
```bash
npx playwright test --project=chromium
```

### Debug Failing Tests
```bash
npx playwright test --debug
```

## Test Organization

### E2E Tests (`tests/e2e/`)

High-level integration tests:
- **smoke.spec.ts** - Verifies all pages load without errors
- **navigation.spec.ts** - Tests all navigation links and mobile menu
- **pages.spec.ts** - Verifies page content and sections
- **cta.spec.ts** - Tests all call-to-action buttons

### Feature Tests (`tests/`)

Detailed feature tests:
- **home.spec.ts** - Home page sections and interactions
- **services.spec.ts** - Services hub and subpages
- **gallery.spec.ts** - Gallery filtering and lightbox
- **contact.spec.ts** - Contact form validation
- **about.spec.ts** - About page sections
- **components.spec.ts** - Reusable component behavior

## Test Selectors

All tests use `data-testid` attributes for reliable selection:

### Layout
- `site-header` - Main header
- `site-footer` - Main footer
- `primary-nav` - Navigation container
- `mobile-menu-toggle` - Mobile menu button
- `mobile-menu` - Mobile menu panel

### Navigation Links
- `nav-link-services` - Services nav link
- `nav-link-gallery` - Gallery nav link
- `nav-link-about` - About nav link
- `nav-link-contact` - Contact nav link
- `mobile-nav-link-*` - Mobile nav links

### Page Sections
- `home-hero` - Home hero section
- `hero-heading` - Hero h1 element
- `services-overview` - Services grid section
- `why-cmg` - Why CMG section
- `cta-section` - CTA section
- `gallery-filters` - Gallery filter buttons
- `gallery-grid` - Gallery project grid
- `contact-info` - Contact information
- `contact-form-section` - Form section
- `service-areas` - Service areas section

### Form Elements
- `contact-form` - Form element
- `input-name` - Name input
- `input-email` - Email input
- `input-phone` - Phone input
- `input-service` - Service select
- `input-message` - Message textarea
- `submit-button` - Submit button
- `form-success` - Success message
- `error-name`, `error-email`, `error-phone` - Error messages

### CTA Buttons
- `hero-cta-primary` - Hero get quote button
- `hero-cta-secondary` - Hero view work button
- `cta-primary` - Main CTA button
- `header-cta` - Header CTA button
- `services-cta` - Services page CTA
- `gallery-cta` - Gallery page CTA

## Viewport Configuration

Tests run on two viewport sizes:

| Project | Viewport | Device |
|---------|----------|--------|
| chromium | 1280x720 | Desktop Chrome |
| mobile | 375x667 | iPhone 13 |

## CI/CD Integration

The Playwright config is CI-ready:

```typescript
// playwright.config.ts
export default defineConfig({
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  forbidOnly: !!process.env.CI,
});
```

### GitHub Actions Example

```yaml
- name: Install dependencies
  run: npm ci

- name: Install Playwright browsers
  run: npx playwright install --with-deps

- name: Run tests
  run: npm test
```

## Adding New Tests

1. Identify the feature to test
2. Add `data-testid` attributes to components
3. Create test file in appropriate location
4. Follow existing patterns for consistency
5. Run tests to verify passing

### Example Test

```typescript
import { test, expect } from '@playwright/test';

test.describe('Feature Name', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/page-path');
  });

  test('descriptive test name', async ({ page }) => {
    await expect(page.getByTestId('element-id')).toBeVisible();
  });
});
```

## Troubleshooting

### Tests Timeout
- Increase timeout in playwright.config.ts
- Check if dev server is running
- Verify network conditions

### Element Not Found
- Verify `data-testid` attribute exists
- Check for typos in selector
- Use `await page.pause()` to debug

### Flaky Tests
- Add explicit waits with `waitForTimeout`
- Use `waitForLoadState('networkidle')`
- Check for race conditions

### Mobile Tests Fail
- Ensure viewport is set correctly
- Check responsive breakpoints
- Verify mobile-specific elements exist

## Reports

After running tests, view the HTML report:
```bash
npx playwright show-report
```

Screenshots and videos of failures are saved in the `test-results/` directory.
