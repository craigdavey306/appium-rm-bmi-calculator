export type MobilePlatform = 'ios' | 'Android';

/**
 * Class representing a base screen implementation.
 */
export default class BaseScreen {
  protected platform: MobilePlatform;

  constructor() {
    this.platform = process.env.PLATFORM as MobilePlatform;
  }

  /**
   * Transforms a string identifier into a testID.
   * @param id string representing the test identifier
   * @returns a string representing the test identifier
   */
  protected static getTestId(id: string): string {
    return `${id}:testid`;
  }

  /**
   * Schedules a command to clear the content of a screen element.
   *
   * @param element screen element (e.g. TextInput) where the input value is cleared.
   *
   * @return a Promise that is resolved when the command completes.
   */
  async clearValue(element: WebdriverIO.Element) {
    if (!element.elementId) {
      throw Error(
        element.error?.message || `click: Unable to find ${element.elementId}`
      );
    }

    await element.clearValue();
  }

  /**
   * Schedules a command to click on a screen element.
   *
   * @param element screen element to be clicked
   *
   * @return a Promise that is resolved when the command completes.
   */
  async click(element: WebdriverIO.Element) {
    if (!element.elementId) {
      throw Error(
        element.error?.message || `click: Unable to find ${element.elementId}`
      );
    }

    await element.click();
  }

  /**
   * Schedules a command to input text for a particular screen element.
   *
   * @param element screen element (e.g. TextInput) that will have text sent to it.
   * @param inputText string representing the value for the screen element
   *
   * @return a Promise that is resolved when the command completes.
   */
  async typeIntoElement(element: WebdriverIO.Element, inputText: string) {
    await element.waitForDisplayed({ timeout: 1000 });
    if (!element.elementId) {
      throw Error(
        element.error?.message ||
          `typeIntoElement: Unable to find ${element.elementId}`
      );
    }

    await element.setValue(inputText);
  }
}
