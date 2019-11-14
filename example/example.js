const reactCryptGsm = require("./../lib/index.js")
const encryptedText = reactCryptGsm.encrypt("sample text");
const decryptedText = reactCryptGsm.decrypt(encryptedText);
console.log(encryptedText);
console.log(decryptedText);