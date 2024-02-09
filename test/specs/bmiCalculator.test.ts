import { BmiCalculatorScreen } from '../screen-objects/BmiCalculatorScreen.js';
import { ENGLISH_BMI_VALUES } from '../../data/bmi-data.js';

/**
 * BMI Calculator test for the application are below.
 */

describe('BMI Calculator English Units', async () => {
  it('Calculates correct BMI for english inputs', async () => {
    const calcScreen = new BmiCalculatorScreen();

    for (const bmi of ENGLISH_BMI_VALUES) {
      await calcScreen.enterBmiValues(
        bmi.heightFeet,
        bmi.heightInches,
        bmi.weightPounds
      );

      const calculatedBmi = await calcScreen.calculatedBmi(bmi.expectedBmi);

      await expect(calculatedBmi).toEqual(
        `${BmiCalculatorScreen.calculatedBmiText} ${bmi.expectedBmi}`
      );

      calcScreen.pressResetButton();
    }
  });
});
