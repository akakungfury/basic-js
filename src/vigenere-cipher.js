const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.dblAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  createArrFromMsgInSettedDirection(message) {
    if (this.isDirect) {
      return Array.from(message.toUpperCase());
    }
    return Array.from(message.toUpperCase()).reverse();
  }

  createArrFromKeyWithLengthEqMsgLength(message, key) {
    const repeaterCfc = Math.ceil(message.length / key.length);
    const keyStr = key.toUpperCase().repeat(repeaterCfc);

    return Array.from(keyStr)
  }

  encrypt(stirng, key) {
    if (arguments.length < 2) {
      throw new Error('Both params (message, key) should be mandatory');
    }
    let encryptedMsg = '';
    const arrOfMsgChars = this.createArrFromMsgInSettedDirection(stirng);
    const arrOfRepatedKeyChars = this.createArrFromKeyWithLengthEqMsgLength(stirng, key);

    arrOfMsgChars.forEach((char, i) => {
      const keywordCharIndex = this.dblAlphabet.indexOf(arrOfRepatedKeyChars[i]);
      const msgCharIndex = this.dblAlphabet.indexOf(char);

      if (msgCharIndex !== -1) {
        encryptedMsg = encryptedMsg.concat(this.dblAlphabet[keywordCharIndex + msgCharIndex]);
      } else {
        encryptedMsg = encryptedMsg.concat(char);
        arrOfRepatedKeyChars.unshift(arrOfRepatedKeyChars[i]);
      }
    })
    return encryptedMsg;
  }

  decrypt(stirng, key) {
    if (arguments.length < 2) {
      throw new Error('Both params (message, key) should be mandatory');
    }
    let decryptedMsg = '';
    const arrOfMsgChars = this.createArrFromMsgInSettedDirection(stirng);
    const arrOfRepatedKeyChars = this.createArrFromKeyWithLengthEqMsgLength(stirng, key);

    arrOfMsgChars.forEach((char, i) => {
      const keywordCharIndex = this.dblAlphabet.indexOf(arrOfRepatedKeyChars[i]);
      const msgCharIndex = this.dblAlphabet.indexOf(char);

      if (msgCharIndex !== -1) {
        decryptedMsg = decryptedMsg.concat(this.dblAlphabet[msgCharIndex + 26 - keywordCharIndex]);
      } else {
        decryptedMsg = decryptedMsg.concat(char);
        arrOfRepatedKeyChars.unshift(arrOfRepatedKeyChars[i]);
      }
    })
    return decryptedMsg;
  }
}

module.exports = VigenereCipheringMachine;
