const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Set viewport to a common desktop size
  await page.setViewportSize({ width: 1280, height: 1080 });

  try {
    // Navigate to the local dev server
    await page.goto('http://localhost:5173');

    // 1. Verify Hero Text
    const heroTitle = await page.locator('h1').innerText();
    console.log('Hero Title:', heroTitle.replace(/\n/g, ' '));
    await page.screenshot({ path: 'screenshots/hero_updated.png' });

    // 2. Verify Team Section
    const teamSection = page.locator('#team');
    await teamSection.scrollIntoViewIfNeeded();

    const teamMembersCount = await page.locator('#team .group').count();
    console.log('Team Members Count:', teamMembersCount);

    await page.screenshot({ path: 'screenshots/team_expanded.png' });

    if (teamMembersCount === 8) {
      console.log('Verification Successful: 8 team members found.');
    } else {
      console.error(`Verification Failed: Expected 8 team members, found ${teamMembersCount}.`);
    }

  } catch (error) {
    console.error('Error during verification:', error);
  } finally {
    await browser.close();
  }
})();
