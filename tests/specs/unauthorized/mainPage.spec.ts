import { test, expect } from '../../fixtures/fixtures';
import { MainPage } from '../../pages/MainPage';

test('Проверка доступности элементов хедера неавторзиованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.headerHasCorrectAriaSnapshot();
});

test('Проверка доступности табов категорий неавторзиованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.categoriesTabsHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов бокового меню неавторзиованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.menuHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов списка добавления контента неавторзиованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openAddPopUpList();
  await mainPage.addPopUpListHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов поп-апа уведомлений неавторзиованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openNotificationsPopUp();
  await mainPage.notificationsPopUpHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов модального окна авторизации неавторзиованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openAuthorizationModal();
  await mainPage.authorizationModalHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов раскрытого меню неавторзиованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openFullMenu();
  await mainPage.fullMenuHasCorrectAriaSnapshot();
});

test('Проверка переключения темы неавторзиованного пользователя', async ({ mainPage }) => {
  await mainPage.checkThemeAttributeValue('dark2021');
  await mainPage.changeTheme();
  await mainPage.checkThemeAttributeValue('white2022');
});
