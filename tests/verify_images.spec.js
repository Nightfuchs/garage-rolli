import { test, expect } from '@playwright/test';

test('verify redesign with new images', async ({ page }) => {
  await page.goto('http://localhost:4173');
  await page.waitForLoadState('networkidle');

  // Hero screenshot
  await page.screenshot({ path: 'screenshots/hero_updated.png' });

  // Services screenshot
  await page.goto('http://localhost:4173#services');
  await page.waitForTimeout(1000); // Wait for scroll and animation
  await page.screenshot({ path: 'screenshots/services_updated.png' });
});
