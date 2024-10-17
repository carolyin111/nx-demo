import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  const baseUrl = process.env['BASE_URL'] || 'http://localhost:4200';

  await page.goto(baseUrl);

  // Expect h1 to contain a substring.
  expect(await page.locator('h2').innerText()).toContain('Hey');
});
