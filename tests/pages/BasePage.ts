import { Locator, Page, expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async closeCookiesAlert() {
    await this.page.getByRole('button', { name: 'Ок' }).click();
  }

  async closeMainAlert() {
    await this.page.getByRole('button', { name: 'Закрыть' }).click();
  }

  protected async checkAriaSnapshot(locator: Locator, ariaName: string) {
    await expect(locator).toMatchAriaSnapshot({
      name: ariaName,
    });
  }
}
