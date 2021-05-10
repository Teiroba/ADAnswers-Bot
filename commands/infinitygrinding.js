/* eslint-disable max-len */
"use strict";

const functions = require("../functions");

module.exports = {
  name: "infinitygrinding",
  number: 7,
  description: "sends how to farm infinities for banking",
  execute(message) {
    if (functions.special.bankedInfsCheck(message.channel.id, message)) message.channel.send(`INFINITY FARMING: (Do this on long AFKs) ---- EC10 diminishing returns, reach at least 5 billion eventually (achievement)

    Method:
    -Normal IDLE build (Autobuy RG off -- good for EP later, use 225 with full tree ++ achievement at e20,000 replicanti)
                 ----OR----
    -PASSIVE (Autobuy RG on -- 11% faster infinities, no EP later, use 226 with full tree -- not recommended before very high EP -- 33ms required)
    
    -Crunch 5s
    -AutoGalaxy .4s (or .05s with a maximum galaxy count of the highest you reach in under 4.9 seconds)
    -AutoDimboost .1s
    -Get "high" IP before starting`);
  }
};