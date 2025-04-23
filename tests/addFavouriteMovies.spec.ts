import { test, expect } from '@playwright/test';
import { FAVORITE_MOVIE_BUTTON } from './testIds';

test('test', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await expect(page.getByRole('link', { name: 'Movie App' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Search for movies...' }).click();
    await page.getByRole('textbox', { name: 'Search for movies...' }).fill('apocalypto');
    await page.getByRole('button', { name: 'Search' }).click();
    await expect(page.getByRole('img', { name: 'Apocalypto', exact: true })).toBeVisible();
    await page.locator('div').filter({ hasText: /^♥Apocalypto2006$/ }).locator('[data-test-id="favorite-movie-button"]').click();
    await page.getByRole('link', { name: 'Favorites' }).click();
    await expect(page.getByRole('img', { name: 'Apocalypto' })).toBeVisible();

});
  