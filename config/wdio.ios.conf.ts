import path from 'path';

import { config as baseConfig } from './wdio.shared.conf.ts';

type Configuration = typeof baseConfig;

process.env.PLATFORM = 'ios';

// Define overrides for iOS testing.
const iosConfig: Configuration = {
  capabilities: [
    {
      // capabilities for local Appium tests on iOS Simulator
      'appium:platformName': 'ios',
      'appium:deviceName': 'iPhone 15',
      'appium:platformVersion': '17.2',
      'appium:automationName': 'XCUITest',
      'appium:app': path.join(process.cwd(), 'app/ios/BmiCalcApp.ipa'),
      // 'appium:app':
      //   '/Users/owner/Library/Developer/Xcode/DerivedData/BmiCalcApp-fcqhqjejskzskggdrikkjtxddffl/Build/Products/Debug-iphonesimulator/BmiCalcApp.app',
    },
  ],
  port: 4723,
};

export const config: Configuration = Object.assign(baseConfig, iosConfig);
