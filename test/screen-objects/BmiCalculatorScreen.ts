import BaseScreen from './BaseScreen.js';

export class BmiCalculatorScreen extends BaseScreen {
  constructor() {
    super();
  }

  // ---------------------- Getters --------------------------

  get calculateBmiButtonElement() {
    return $('~Calculate BMI');
  }

  get feetInputElement() {
    return $('~Feet:input');
  }

  get inchesInputElement() {
    return $('~Inches:input');
  }

  get poundsInputElement() {
    return $('~Pounds:input');
  }

  get resetButtonElement() {
    return $('~Reset');
  }

  static get calculatedBmiText() {
    return 'The calculated BMI is';
  }

  static get screenTitleElement() {
    return $('~BMI Calculator');
  }

  // ---------------------- Functions --------------------------

  async calculatedBmi(expectedBmi: string) {
    const calculatedBmiElement = await $(
      `~${BmiCalculatorScreen.calculatedBmiText} ${expectedBmi}`
    );

    return calculatedBmiElement.getText();
  }

  async enterBmiValues(
    heightFeet: string,
    heightInches: string,
    weightPounds: string
  ) {
    await Promise.all([
      this.enterHeightInFeet(heightFeet),
      this.enterHeightInInches(heightInches),
      this.enterWeightInPounds(weightPounds),
    ]);

    await this.pressCalculatBmiButton();
  }

  async enterHeightInFeet(feet: string) {
    const feetInputElement = await this.feetInputElement;

    await this.clearValue(feetInputElement);
    await this.typeIntoElement(feetInputElement, feet);
  }

  async enterHeightInInches(inches: string) {
    const inchesInputElement = await this.inchesInputElement;

    await this.clearValue(inchesInputElement);
    await this.typeIntoElement(inchesInputElement, inches);
  }

  async enterWeightInPounds(weight: string) {
    const weightInputElement = await this.poundsInputElement;

    await this.clearValue(weightInputElement);
    await this.typeIntoElement(weightInputElement, weight);
  }

  async pressCalculatBmiButton() {
    const calculatBmiBtnElement = await this.calculateBmiButtonElement;

    await this.click(calculatBmiBtnElement);
  }

  async pressResetButton() {
    const resetBtnElement = await this.resetButtonElement;

    await this.click(resetBtnElement);
  }
}
