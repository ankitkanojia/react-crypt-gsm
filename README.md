# react-crypt-gsm
A simple wrapper to handle encryption of strings and decryption of string which can be used in react application. react-crypt-gsm is a simple aes-256-gcm encrypt and decrypt module for node.js

  - `aes-256-gcm` encryption algorithm

## Getting Started
Install the module with: `npm install --save react-crypt-gsm` or `yarn add react-crypt-gsm`

## Usage - Example
Using the module is pretty simple.  Create an instance of the react-crypt-gsm. You can use both **encrypt** and **decrypt** keyword or instance which can perform encryption and decryption.

```
const reactCryptGsm = require("./../lib/index.js")   //For live : require("react-crypt-gsm")

// String on which you want to perform encryption functionality
const sampleString = 'sample text';

// Encrypt it
const encryptedText = reactCryptGsm.encrypt("sample text");

// Decrypt it
const decryptedText = reactCryptGsm.decrypt(encryptedText);
```

## License
Copyright (c) 2019 Ankit Kanojia
Licensed under the MIT license.
****
