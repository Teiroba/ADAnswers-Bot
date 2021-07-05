/* eslint-disable max-len */
"use strict";

const { EternityPointCommand } = require("../classes/EternityPointCommand");
const functions = require("../functions");

module.exports = {
  command: new EternityPointCommand({
    number: 3,
    name: "ep",
    description: "calculates the amount of IP required to get the number of EP specified. Works up to 1000. Excludes any possible multipliers.",
    check: "earlyEternity",
    acceptableArgs: ["any number within 2-1000"],
    sent: undefined,
    getArgMessage(arg) {
      const a = Math.floor(Math.abs(arg));
      if (a > 1000) return `In command \`++ep\`, you cannot use a number higher than 1000.`;
      if (a <= 1) return `In command \`++ep\`, you cannot use a number lesser or equal to 1.`;
      const ip = Math.ceil((308 * functions.misc.getBaseLog(5, Math.floor(Math.abs(a)))) + 215.6);
      return `To get ${a} Eternity Points, you need e${ip} Infinity Points`;
    }
  })
};