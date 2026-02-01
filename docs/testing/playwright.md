# Playwright Testing Patterns Guide

## Purpose

This document describes the testing patterns and best practices used in the CMG Painting and Design website.

## Test Architecture

```
tests/
├── e2e/                     # End-to-end integration tests
│   ├── smoke.spec.ts       # Basic page load tests
│   ├── navigation.spec.ts  # Navigation flow tests
│   ├── pages.spec.ts       # Page content tests
│   └── cta.spec.ts         # Call-to-action tests
├── home.spec.ts            # Home page feature tests
├── services.spec.ts        # Services pages tests
├── gallery.spec.ts         # Gallery feature tests
├── contact.spec.ts         # Contact form tests
├── about.spec.ts           # About page tests
├── components.spec.ts      # Component behavior tests
└── README.md               # Testing documentation
```

## Test Structure

### Basic Test Pattern

```typescript
import { test, expect } from '@playwright/test';

test.describe('Feature or Page Name', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/page-path');
  });

  test('should do something specific', async ({ page }) => {
    // Arrange - setup is in beforeEach

    // Act - perform action
    await page.getByTestId('element-id').click();

    // Assert - verify result
    await expect(page.getByTestId('result')).toBeVisible();
  });
});
```

### Mobile Test Pattern

```typescript
test.describe('Feature - Mobile', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('should be responsive', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('mobile-element')).toBeVisible();
  });
});
```

## Selector Strategy

### Priority Order

1. **data-testid** (preferred)
```typescript
page.getByTestId('submit-button')
```

2. **Role with name**
```typescript
page.getByRole('button', { name: 'Submit' })
```

3. **Text content**
```typescript
page.getByText('Welcome')
```

4. **CSS selector** (last resort)
```typescript
page.locator('.custom-class')
```

### Test ID Conventions

- Use kebab-case: `data-testid="form-submit"`
- Be descriptive: `data-testid="hero-cta-primary"`
- Include context: `data-testid="nav-link-services"`
- Mobile variants: `data-testid="mobile-nav-link-services"`

## Test Categories

### Smoke Tests

Quick tests to verify basic functionality:

```typescript
test('page loads without errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  await page.goto('/');
  expect(errors.filter(e => !e.includes('favicon'))).toHaveLength(0);
});
```

### Navigation Tests

Test route transitions:

```typescript
test('navigates to correct page', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('nav-link-services').click();
  await expect(page).toHaveURL(/\/services/);
});
```

### Form Tests

Test form validation and submission:

```typescript
test('shows validation error for empty name', async ({ page }) => {
  await page.goto('/contact');
  await page.getByTestId('input-email').fill('test@example.com');
  await page.getByTestId('input-phone').fill('1234567890');
  await page.getByTestId('submit-button').click();
  await expect(page.getByTestId('error-name')).toBeVisible();
});

test('submits successfully with valid data', async ({ page }) => {
  await page.goto('/contact');
  await page.getByTestId('input-name').fill('John Doe');
  await page.getByTestId('input-email').fill('test@example.com');
  await page.getByTestId('input-phone').fill('1234567890');
  await page.getByTestId('submit-button').click();
  await expect(page.getByTestId('form-success')).toBeVisible();
});
```

### Component Tests

Test component behavior:

```typescript
test('header becomes sticky on scroll', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => window.scrollTo(0, 100));
  await page.waitForTimeout(500);
  const header = page.getByTestId('site-header');
  await expect(header).toHaveClass(/backdrop-blur/);
});
```

### Modal Tests

Test modal open/close:

```typescript
test('lightbox opens on project click', async ({ page }) => {
  await page.goto('/gallery');
  await page.getByTestId('project-card').first().click();
  await expect(page.getByTestId('lightbox-modal')).toBeVisible();
});

test('lightbox closes on X button', async ({ page }) => {
  await page.goto('/gallery');
  await page.getByTestId('project-card').first().click();
  await page.getByTestId('lightbox-close').click();
  await expect(page.getByTestId('lightbox-modal')).not.toBeVisible();
});
```

## Wait Strategies

### Implicit Waits

Playwright auto-waits for elements:

```typescript
// Automatically waits for element
await expect(page.getByTestId('element')).toBeVisible();
```

### Explicit Waits

When needed for animations:

```typescript
await page.waitForTimeout(500); // Wait for animation
await page.waitForLoadState('networkidle'); // Wait for network
```

### Scroll and Wait

```typescript
await page.evaluate(() => window.scrollTo(0, 500));
await page.waitForTimeout(500); // Wait for scroll effects
```

## Assertions

### Visibility

```typescript
await expect(element).toBeVisible();
await expect(element).not.toBeVisible();
await expect(element).toBeHidden();
```

### Text Content

```typescript
await expect(element).toContainText('partial text');
await expect(element).toHaveText('exact text');
```

### URL

```typescript
await expect(page).toHaveURL('/expected-path');
await expect(page).toHaveURL(/\/pattern/);
```

### Title

```typescript
await expect(page).toHaveTitle(/Page Title/);
```

### CSS Classes

```typescript
await expect(element).toHaveClass(/expected-class/);
```

## CI/CD Configuration

### GitHub Actions

```yaml
name: E2E Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright Browsers
        run: npx playwright install --with-deps

      - name: Run tests
        run: npm test

      - uses: actions/upload-artifact@v4
        if: failure()
        with:
          name: playwright-report
          path: playwright-report/
```

### Playwright Config for CI

```typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
```

## Debugging

### Pause Test Execution

```typescript
await page.pause(); // Opens Playwright Inspector
```

### Take Screenshot

```typescript
await page.screenshot({ path: 'debug.png' });
```

### Log Page Content

```typescript
console.log(await page.content());
```

### Trace Viewer

```bash
npx playwright show-trace trace.zip
```

## Best Practices

1. **One assertion per test** when possible
2. **Descriptive test names** that explain expected behavior
3. **Independent tests** that don't rely on other tests
4. **Clean up state** in beforeEach/afterEach
5. **Avoid hard-coded waits** - use Playwright's auto-waiting
6. **Use data-testid** for reliable selection
7. **Test edge cases** (empty state, errors, loading)
8. **Test responsive behavior** in mobile viewports
