const reactCryptGsm = require("./../lib/index.js")   //For live : require("react-crypt-gsm")
const encryptedText = reactCryptGsm.encrypt("sample text");
const decryptedText = reactCryptGsm.decrypt(encryptedText);
console.log(encryptedText);
console.log(decryptedText);