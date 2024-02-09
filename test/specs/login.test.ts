import { BmiCalculatorScreen } from '../screen-objects/BmiCalculatorScreen.js';
import { LoginScreen } from '../screen-objects/LoginScreen.js';

const userEmail = process.env.USER_EMAIL || '';
const userPassword = process.env.USER_PASSWORD || '';

/**
 * Login workflow tests for the application are below.
 */

console.log(`platform: ${process.env.PLATFORM}`);

describe('Login Workflows', () => {
  it('finds the email input field', async () => {
    const loginScreen = new LoginScreen();

    const emailElement = await loginScreen.emailInputElement;

    await expect(emailElement).toExist();
  });

  it('Logs a user into the application', async () => {
    const loginScreen = new LoginScreen();

    const emailElement = await loginScreen.emailInputElement;
    const passwordElement = await loginScreen.passwordInputElement;
    const loginBtnElement = await loginScreen.loginButtonElement;

    await loginScreen.loginAsUser(userEmail, userPassword);

    // Confirm that the login elements no longer appear on the screen.
    await expect(emailElement).not.toBeDisplayed();
    await expect(passwordElement).not.toBeDisplayed();
    await expect(loginBtnElement).not.toBeDisplayed();

    // Confirm that the user is on the BMI Calculator screen.
    const bmiScreenTitle = await BmiCalculatorScreen.screenTitleElement;
    await expect(bmiScreenTitle).toBeDisplayed();
  });
});
