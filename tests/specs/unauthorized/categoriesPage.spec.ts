import { test, expect } from '../../fixtures/fixtures';

test('Проверка вёрстки раздела категории для неавторизованного пользователя', async ({
  categoriesPage,
}) => {
  await categoriesPage.contentPageHasCorrectLayout();
});
