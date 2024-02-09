import BaseScreen from './BaseScreen.js';

export class BmiCalculatorScreen extends BaseScreen {
  constructor() {
    super();
  }

  // ---------------------- Getters --------------------------

  static get screenTitleElement() {
    return process.env.PLATFORM === 'ios'
      ? $(`~${BaseScreen.getTestId('bmi-calculator-label')}`)
      : $('~BMI Calculator');
  }

  static get calculatedBmiText() {
    return 'The calculated BMI is';
  }

  get calculateBmiButtonElement() {
    return this.platform === 'ios'
      ? $(`~${BaseScreen.getTestId('calculate-bmi-btn')}`)
      : $(`~Calculate BMI`);
  }

  get heightFeetInputElement() {
    return this.platform === 'ios'
      ? $(`~${BaseScreen.getTestId('feet')}`)
      : $('~Feet');
  }

  get heightInchesInputElement() {
    return this.platform === 'ios'
      ? $(`~${BaseScreen.getTestId('inches')}`)
      : $('~Inches');
  }

  get weightPoundsInputElement() {
    return this.platform === 'ios'
      ? $(`~${BaseScreen.getTestId('pounds')}`)
      : $('~Pounds');
  }

  get resetButtonElement() {
    return this.platform === 'ios'
      ? $(`~${BaseScreen.getTestId('reset-btn')}`)
      : $('~Reset');
  }

  get englishUnitSwitch() {
    return this.platform === 'ios'
      ? $(`~${BaseScreen.getTestId('english-unit-switch')}`)
      : $('~English Unit Switch');
  }

  // get bmiResult() {
  //   return this.platform === 'ios' ? $(`~bmi-result`) : $('~BMI Result');
  // }

  // ---------------------- Functions --------------------------

  // async calculatedBmi() {
  //   const calculatedBmiElement = await this.bmiResult;

  //   return calculatedBmiElement.getText();
  // }

  async calculatedBmi(expectedBmi: string) {
    const calculatedBmiElement =
      this.platform === 'ios'
        ? await $(`~${BmiCalculatorScreen.calculatedBmiText} ${expectedBmi}`)
        : await $('~BMI Result');

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
    const heightFeetInputElement = await this.heightFeetInputElement;

    // await this.clearValue(heightFeetInputElement);
    await this.typeIntoElement(heightFeetInputElement, feet);
  }

  async enterHeightInInches(inches: string) {
    const heightInchesInputElement = await this.heightInchesInputElement;

    // await this.clearValue(heightInchesInputElement);
    await this.typeIntoElement(heightInchesInputElement, inches);
  }

  async enterWeightInPounds(weight: string) {
    const weightInputElement = await this.weightPoundsInputElement;

    // await this.clearValue(weightInputElement);
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
