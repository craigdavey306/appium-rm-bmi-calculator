This is an [**Appium**](https://appium.io/docs/en/2.4/) project for testing the test [**BMI Calculator application**](https://github.com/craigdavey306/rn-bmi-calculator). The project uses [**WebdriverIO**](https://webdriver.io/docs/appium/) as the [**Appium Client**](https://appium.io/docs/en/2.4/ecosystem/clients/).

The application presents a user with a mock login screen where the user ID and password are displayed on the screen (since there's only one user and it's a fake application). After authenticating, the user is brought to the BMI Calculator screen where height and weight can be entered using imperial values (height is in feet and inches, weight is in pounds).

# Getting Started

> **Note**: Make sure you have [**Node JS**](https://nodejs.org/en) installed on your client before beginning.

## Step 1: Download the repository

First you will need to download the repository from GitHub.

## Step 2: Install packages

To install the packages, run the following command from the _root_ of the project:

```bash
# using npm
npm install
```

## Step 3: Update the capabilites available on your client

There are three configuration files in the _config_ directory:

- one configuration file is shared across the different platforms
- one configuration file is specific to Android
- one configuration file is specific to iOS

## Step 4: Create a '.env' file

Copy the content of the .env.example file into the .env file.

## Step 5: Run the tests

Run one of the following commands from the _root_ of the project to test the application.

```bash
# run tests on iOS simulator
npm run wdio:ios

# run tests on Android Emulator
npm run wdio:android
```
