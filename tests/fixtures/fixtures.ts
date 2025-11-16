import { test as base } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { CategoriesPage } from '../pages/CategoriesPage';

type MyFixtures = {
  mainPage: MainPage;
  categoriesPage: CategoriesPage;
};

export const test = base.extend<MyFixtures>({
  mainPage: async ({ page }, use) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await mainPage.closeCookiesAlert();
    await mainPage.closeMainAlert();

    await use(mainPage);
  },

  categoriesPage: async ({ page }, use) => {
    const categoriesPage = new CategoriesPage(page);
    await categoriesPage.open();
    await categoriesPage.closeCookiesAlert();
    await categoriesPage.closeMainAlert();
    await categoriesPage.hideHeader();

    await use(categoriesPage);
  },
});
export { expect } from '@playwright/test';
