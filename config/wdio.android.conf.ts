import path from 'path';

import { config as baseConfig } from './wdio.shared.conf.js';

type Configuration = typeof baseConfig;

process.env.PLATFORM = 'Android';

// Define overrides for Android testing.
const iosConfig: Configuration = {
  capabilities: [
    {
      // capabilities for local Appium tests on Android Emulator
      'appium:platformName': process.env.PLATFORM,
      'appium:deviceName': 'skd-gphone64_arm64',
      'appium:platformVersion': '14.0',
      'appium:automationName': 'UiAutomator2',
      'appium:app': path.join(process.cwd(), 'app/android/app-debug.apk'),
    },
  ],
  port: 4723,
};

export const config: Configuration = Object.assign(baseConfig, iosConfig);
