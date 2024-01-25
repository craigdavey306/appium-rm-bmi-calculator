import path from 'path';

import { config as baseConfig } from './wdio.shared.conf';

type Configuration = typeof baseConfig;

const iosConfig: Configuration = {
  capabilities: [
    {
      // capabilities for local Appium tests on Android Emulator
      'appium:platformName': 'Android',
      'appium:deviceName': 'skd-gphone64_arm64',
      'appium:platformVersion': '14.0',
      'appium:automationName': 'UiAutomator2',
      'appium:app': path.join(process.cwd(), 'app/android/ApiDemos-debug.apk'),
    },
  ],
  port: 4723,
};

export const config: Configuration = Object.assign(baseConfig, iosConfig);
