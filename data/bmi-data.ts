type EnglishBmiValues = {
  heightFeet: string;
  heightInches: string;
  weightPounds: string;
  expectedBmi: string;
};

export const ENGLISH_BMI_VALUES: EnglishBmiValues[] = [
  {
    heightFeet: '6',
    heightInches: '1',
    weightPounds: '221',
    expectedBmi: '29.2',
  },
  {
    heightFeet: '5',
    heightInches: '7',
    weightPounds: '187',
    expectedBmi: '29.3',
  },
  {
    heightFeet: '0',
    heightInches: '0',
    weightPounds: '0',
    expectedBmi: Number.NaN.toString(),
  },
];
