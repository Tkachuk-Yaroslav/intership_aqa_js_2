import { expect } from "@playwright/test";

class SignUpPage {
  constructor(page) {
    this.page = page;
  }

  get loginInput() {
    return this.page.locator("#user_login");
  }

  get passwordInput() {
    return this.page.locator("#user_password");
  }

  get passwordConfirmationInput() {
    return this.page.locator("#user_password_confirmation");
  }

  get firstNameInput() {
    return this.page.locator("#user_firstname");
  }

  get lastNameInput() {
    return this.page.locator("#user_lastname");
  }

  get emailInput() {
    return this.page.locator("#user_mail");
  }

  get submitButton() {
    return this.page.locator('form>input[type="submit"]');
  }

  get errorMsg() {
    return this.page.locator("#errorExplanation>ul>li");
  }

  async fillForm({ login, password, firstName, lastName, email }) {
    await this.loginInput.fill(login);
    await this.passwordInput.fill(password);
    await this.passwordConfirmationInput.fill(password);
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
  }

  async submit() {
    await this.submitButton.click();
  }

  async checkTextInErrorMsg(expectedText) {
    await expect(this.errorMsg).toHaveText(expectedText);
  }
}

export default SignUpPage;
