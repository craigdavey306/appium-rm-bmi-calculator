import BaseScreen from './BaseScreen.js';

export class LoginScreen extends BaseScreen {
  constructor() {
    super();
  }

  // ---------------------- Getters --------------------------

  get emailInputElement() {
    return this.platform == 'ios'
      ? $(`~${BaseScreen.getTestId('email-address')}`)
      : $('~Email Address');
  }

  get passwordInputElement() {
    return this.platform === 'ios'
      ? $(`~${BaseScreen.getTestId('password')}`)
      : $(`~Password`);
  }

  get loginButtonElement() {
    return this.platform === 'ios'
      ? $(`~${BaseScreen.getTestId('log-in-btn')}`)
      : $('~Log In');
  }

  // ---------------------- Functions --------------------------

  /**
   * Schedules a command to enter a user's email in the email field on the Login screen.
   *
   * @param email a string representing a user's email address.
   *
   * @returns a Promise that is resolved when the command completes.
   */
  public async enterEmail(email: string) {
    const emailElement = await this.emailInputElement;

    await this.typeIntoElement(emailElement, email);
  }

  /**
   * Schedules a command to enter a uers's password in the password field on the Login screen.
   *
   * @param password a string representing a user's password.
   *
   * @returns a Promise that is resolved when the command completes
   */
  public async enterPassword(password: string) {
    const passwordElement = await this.passwordInputElement;

    await this.typeIntoElement(passwordElement, password);
  }

  /**
   * Schedules a command to log the user in with a password and email. The command also
   * presses the 'login' button. User is brought to the BMI Calculator screen upon
   * successful login.
   *
   * @param email a string representing a user's email address.
   * @param password a string representing a user's password.
   *
   * @returns a Promise that is resolved when the command completes.
   *
   */
  public async loginAsUser(email: string, password: string) {
    await Promise.all([this.enterEmail(email), this.enterPassword(password)]);

    await this.pressLoginButton();
  }

  /**
   * Schedules a command to press the 'login' button.
   *
   * @returns a Promise that is resolved when the command completes
   */
  public async pressLoginButton() {
    const loginBtnElement = await this.loginButtonElement;

    await this.click(loginBtnElement);
  }
}
