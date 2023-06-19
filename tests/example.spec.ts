import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://selectorshub.com/xpath-practice-page/');
  await page.type("email","s@r.com")

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/practice/i);
});
