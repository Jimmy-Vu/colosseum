import { test, expect } from '@playwright/test';

test.describe('homepage navigation', () => {
  test.beforeEach(async ({ page }) => {
    // Go to starting url before each test.
    await page.goto('http://localhost:3000/');
  });

  test('homepage has title', async ({ page }) => {
    await expect(page).toHaveTitle(/Colosseum/);

  });

  test('homepage navigates successfully to listings page', async ({ page }) => {
    const findYourArena = page.getByRole('link', { name: 'Find Your Arena' });
    await expect(findYourArena).toHaveAttribute('href', '#listings');
    await findYourArena.click();
    await expect(page).toHaveURL(/.*listings/);
  })

  test('homepage navigates successfully to sign in page', async ({ page }) => {
    const signIn = page.getByRole('link', { name: 'Sign In' });
    await signIn.click();
    await expect(page).toHaveURL(/#auth/);
  });

  test('side menu opens and displays properly', async ({ page }) => {
    await page.getByRole('button', { name: 'open sidebar menu' }).click();
    const menuNav = page.getByRole('navigation', { name: 'menu navigation' });
    expect(menuNav).toBeVisible;
  });
})
