/* eslint-disable max-len */
"use strict";

const { AchievementsCommand } = require("../classes/AchievementsCommand");

/* eslint-disable no-negated-condition */

// These are genius shortened versions of the achievement names, what do you mean?

const achievementsMessageObject = {
  "r23": `Get it after your first galaxy and the 90 8th dim costing dimboost by toggling Until 10 next to tickspeed.`,
  get "9d"() { return this.r23; },

  "r28": `After you have e150 1st dims, toggle Until 10 next to tickspeed and buy a 1st dim.`,
  get "tnp"() { return this.r28; },

  "r36": `Do ***not*** do this on your first Infinity. When you Infinity, Galaxies are reset back to 0, so you can attempt it later when it's easier.`,
  get "claus"() { return this.r36; },

  "r41": `Get it after infinity. Change notation to Cancer in options and buy 10 galaxies. You can just switch to Cancer Notation before buying a Galaxy.`,
  get "sc"() { return this.r41; },

  "r71": `Do it after the e39 ID2. Disable boost, galaxy and all dim autobuyers, go into C2 and buy 10 1st dims.`,
  get "909"() { return this.r71; },

  // Remove r43 after Reality
  "r43": `Trivial after you get ID1. Do it in C3. It doesn't need to be attempted early; if it is, it takes about 16+ hours before ID1.`,
  get "r77"() { return this.r43; },
  get "zd"() { return this.r43; },

  "r81": `Trivial after Eternity. You can do it before then, but it's more tedious.`,
  get "hdnw"() { return this.r81; },

  "r87": `Buy TS 32, disable galaxy autobuyer, set boost autobuyer to 0s, and crunch autobuyer to 0.1-1s depending on how long it takes to buy dimboosts for 32.`,
  get "2mi"() { return this.r87; },

  "r91": `Trivial after Eternity. Takes up too much time pre-Eternity, and Eternity just simplifies it a whole lot.`,
  get "r92"() { return this.r91; },
  get "r97"() { return this.r91; },
  get "ls"() { return this.r91; },
  get "ibfn"() { return this.r91; },
  get "ytih"() { return this.r91; },

  "r107": `Respec out of TS 32 and infinity in under 5s to avoid multiplying your infinity gain. Effortless with TS181.`,
  get "dyrnagft"() { return this.r107; },
  get "r116"() { return this.r107; },
  get "dirnti"() { return this.r107; },

  "r108": `Get it once you can eternity easily without buying replicanti. Then do an eternity and buy 2-3% replicanti chance and a few interval upgrades.`,
  get "wca9"() { return this.r108; },

  "r111": `Get it once you can quickly reach e4000 IP. Set autocrunch to 2e308 x last, eternity, and wait.`,
  get "yd"() { return this.r111; },

  "r114": `Can only be done in EC4 and EC12, as those are the only Eternity Challenges that can be failed.`,
  get "yam"() { return this.r114; },

  "r125": `Only possible after you buy TS 181. Using idle, disable AD/ID autobuyers, enter normal challenge 12, and buy a 4th dim. Depending on how many EP you have, it can be achieved instantly or it takes up to 60 minutes.`,
  get "lfoab"() { return this.r125; },

  "r126": `Reach at least 180 max RGs (can buy antimatter galaxies). Use active path because of 50% more RGs. Disable galaxy autobuyer, crunch, then buy 180 RGs.`,
  get "pm"() { return this.r126; },

  "r131": `See \`++infinitygrinding\`. Done in conjunction with r134 (When Will It Be Enough).`,
  get "nec"() { return this.r131; },

  "r133": `Disable your ID autobuyer and the autobuyer for the 2xIP multiplier on the Infinity Upgrades (not Break Infinity Upgrades!) tab.

  Due to eternity milestone 7 you beat ICs as soon as you unlock them. But you don't have the rewards in the first few ticks on a new eternity, because you still need to reach the amount of AM to unlock those ICs.
  This achievements grants you those rewards even if you haven't unlocked ICs yet.
  However, this achievement reward is pretty much negligible as not having the IC rewards in the first ~100ms won't hinder you that much.`,
  get "inltisa"() { return this.r133; },

  "r134": `Disable RG autobuyer while grinding banked infinities and wait. Done in conjunction with r131 (No Ethical Consumption). Takes 9 hours on mobile, 30 on web.`,
  get "wwibe"() { return this.r134; }
};


module.exports = {
  command: new AchievementsCommand({
    number: 2,
    name: "achievements",
    description: "sends link to achievements guide",
    check: true,
    sent: [`Check out this cool guide by Hellbach! https://docs.google.com/document/d/1C8W_lt9EPxpu9wIloWZo5CPDdZ4ItP1-IU1Vs3x7lEg`],
    acceptableArgs: Object.keys(achievementsMessageObject),
    getArgMessage(arg) {
      return achievementsMessageObject[arg];
    }
  })
};
