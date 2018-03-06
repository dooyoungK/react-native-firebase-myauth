### react-native-firebase-myauth

* Features
    - Firebase authentication.
    - Base structure for API integration.


* Installation

# Requirements
    React Native - Node, React Native CLI
    Android - JDK, Android SDK
    iOS - Xcode

If you don't have react-native-cli tool, I recommend to install node first. (https://nodejs.org/en/download/)

    And run this commend line in your terminal.

    npm install react-native-cli

1) Before running the app, open terminal and run these commands for library dependencies.

    react-native install
    react-native link

2) Set up configuration file for firebase.

    Put your Firebase configuration to .env file in root directory of your project.

    e.g

    API_KEY=[YOUR_API_KEY]
    AUTH_DOMAIN=[YOUR_DOMAIN].firebaseapp.com
    DATABASE_URL=https://[YOUR_DOMAIN].firebaseio.com
    PROJECT_ID=[YOUR_PROJECT_ID]
    STORAGE_BUCKET=[YOUR_STORAGEBUCKET]


* Run the app
    For iOS,
        - On simulator
            react-native run-ios
        - On device
            react-native run-ios --device "[YOUR_DEVICE_NAME]"

        or manually open Xcode, and run on designated device.

    For android, (Should connected emulator or device is running)
            react-native run-android


* Reactotron for debugging

For debugging tool, it's set up with Reactotron on development mode. It's easy to look up all the redux and saga effects.

You can download here. (https://github.com/infinitered/reactotron/blob/master/docs/installing.md)

