import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rutube.ru/');
  await page.getByRole('button', { name: 'Вход и регистрация' }).click();
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('textbox', { name: 'Введите телефон' })
    .click();
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('textbox', { name: 'Введите телефон' })
    .fill(process.env.PHONENUMBER!);
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('button', { name: 'Продолжить' })
    .click();
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('textbox', { name: 'символ 1' })
    .click();
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('textbox', { name: 'символ 2' })
    .fill('1');
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('textbox', { name: 'символ 3' })
    .fill('2');
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('textbox', { name: 'символ 4' })
    .fill('3');
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('textbox', { name: 'символ 4' })
    .fill('4');
  await page.getByRole('img', { name: 'Иконка канала CHANNEL1234' }).click();
  await page.getByRole('link', { name: 'Профиль' }).click();
});
