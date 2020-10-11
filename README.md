# Intoduction

For any website, security is a fundamental concern for all. Web security is important in keeping hackers and cyber-thieves away from accessing sensitive information. Also, without a proactive security strategy, businesses risk the spread and escalation of malware, attacks on other websites, networks, and other IT infrastructures.

In terms of technical conversance, there are many algorithms used as a security strategy, for I also carried out similar activities related to those algorithms by using 'aes-256-gcm' algorithms and developed my own NPM package. This package could be used by anyone who would want to install predefined packages developed by me to prevent their passwords or any imperative information by encryption and decryption.

# react-crypt-gsm ([NPM Package](https://www.npmjs.com/package/react-crypt-gsm "NPM Package"))
A simple wrapper to handle encryption of strings and decryption of string which can be used in react application. react-crypt-gsm is a simple aes-256-gcm encrypt and decrypt module for node.js

  - `aes-256-gcm` encryption algorithm

## Getting Started
Install the module with: `npm install --save react-crypt-gsm` or `yarn add react-crypt-gsm`

## Usage with Node Application
Using the module is pretty simple.  Create an instance of the react-crypt-gsm. You can use both **encrypt** and **decrypt** keyword or instance which can perform encryption and decryption.

```
const reactCryptGsm = require("./../lib/index.js")   //For Node application

// String on which you want to perform encryption functionality
const sampleString = 'sample text';

// Encrypt it
const encryptedText = reactCryptGsm.encrypt("sample text");

// Decrypt it
const decryptedText = reactCryptGsm.decrypt(encryptedText);
```

## Usage with React Application
Using the module is pretty simple.  Create an instance of the react-crypt-gsm. You can use both **encrypt** and **decrypt** keyword or instance which can perform encryption and decryption.

```
import React, { Component } from 'react';
import  { encrypt , decrypt } from 'react-crypt-gsm';

// String on which you want to perform encryption functionality
cimport React, { Component } from 'react';
import  { encrypt , decrypt } from 'react-crypt-gsm';
const sampleString = 'sample text';

class App extends Component {
  constructor(props)
  {
      super(props);
      this.state = {
        encryptedString : ""
      }
  }

  componentDidMount() {
    const encryptedStr = encrypt(sampleString);
    this.setState({
      encryptedString : encryptedStr
    });
  }

  render() {
    return (
      <div className="App">
          <p>Encrypted String : {this.state.encryptedString} </p>
          <p>Decrypted String : {decrypt(this.state.encryptedString)} </p>
      </div>
    );
  }
}

export default App;
```

## License
Copyright (c) 2019 Ankit Kanojia
Licensed under the MIT license.
