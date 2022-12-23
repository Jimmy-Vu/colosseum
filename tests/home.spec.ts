import { test, expect } from '@playwright/test';

test.describe('homepage navigation', () => {
  test.beforeEach(async ({ page }) => {
    // Go to starting url before each test.
    await page.goto('http://localhost:3000/');
  });

  test('homepage has title', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Colosseum/);

  });

  test('homepage navigates successfully to listings page', async ({ page }) => {
    // create a locator
    const findYourArena = page.getByRole('link', { name: 'Find Your Arena' });
    // Expect an attribute "to be strictly equal" to the value.
    await expect(findYourArena).toHaveAttribute('href', '#listings');
    // Click the listings link.
    await findYourArena.click();
    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*listings/);
  })

  test('homepage navigates successfully to sign in page', async ({ page }) => {
    // create a locator
    const signIn = page.getByText('Sign In');
    // Click the sign-in link.
    await signIn.click();
    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*auth/);
  });

  test('side menu opens properly', async ({ page }) => {
    await page.getByRole('button', { name: 'open sidebar menu' }).click();
    const menuNav = page.getByRole('navigation', { name: 'menu navigation' });
    expect(menuNav).toBeVisible;
  });
})
