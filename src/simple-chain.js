const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainValues: [],
  chain: '',

  getLength() {
    return this.chainValues.length;
  },

  addLink(value) {
    arguments.length ? this.chainValues.push(value) : this.chainValues.push('');
    return this;
  },

  removeLink(position) {
    if(Number.isInteger(position) && this.chainValues[position] !== undefined) {
      this.chainValues.splice(position - 1, 1);
      return this;
    }
    this.chainValues = [];
    throw new Error;
  },

  reverseChain() {
    this.chainValues.reverse();
    return this;
  },

  finishChain() {
    this.chain = this.chainValues.map(el => `( ${el} )`).join('~~');
    this.chainValues = [];
    return this.chain;
  }
};

module.exports = chainMaker;
