import { BmiCalculatorScreen } from '../screen-objects/BmiCalculatorScreen.js';

type BmiValues = {
  heightFeet: string;
  heightInches: string;
  weightPounds: string;
  expectedBmi: string;
};

/**
 * BMI Calculator test for the application are below.
 */

describe('BMI Calculator', async () => {
  it('Calculates BMI for valid inputs', async () => {
    const bmiValues: BmiValues[] = [
      {
        heightFeet: '6',
        heightInches: '1',
        weightPounds: '221',
        expectedBmi: '29.2',
      },
    ];

    const calcScreen = new BmiCalculatorScreen();

    for (const bmi of bmiValues) {
      await calcScreen.enterBmiValues(
        bmi.heightFeet,
        bmi.heightInches,
        bmi.weightPounds
      );

      const calculatedBmi = await calcScreen.calculatedBmi(bmi.expectedBmi);

      await expect(calculatedBmi).toEqual(
        `${BmiCalculatorScreen.calculatedBmiText} ${bmi.expectedBmi}`
      );
    }
  });
});
