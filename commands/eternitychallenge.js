/* eslint-disable max-len */
"use strict";

const order = ["1x1", "2x1", "1x2", "3x1", "4x1", "5x1", "1x3", "3x2", "2x2", "6x1", "1x4", "3x3", "7x1", "4x2", "4x3", "6x2", "1x5", "5x2", "2x3", "3x4", "7x2", "5x3", "8x1", "3x5", "6x3", "2x4", "5x4", "7x3", "2x5", "5x5", "4x4", "6x4", "7x4", "8x2", "6x5", "4x5", "8x3", "9x1", "9x2", "8x4", "9x3", "9x4", "8x5", "9x5", "10x1", "7x5", "10x2", "10x3", "10x4", "10x5", "11x1", "11x2", "11x3", "11x4", "11x5", "12x1", "12x2", "12x3", "12x4", "12x5"];

function otherCompletions(id, completion) {
  if (id < 1 || id > 12) {
    return `Invalid challenge id: ${id}`;
  }
    
  if (completion < 1 || completion > 5) {
    return `Invalid challenge completion: ${completion}`;
  }

  const completionText = `${id}x${completion}`;
  const indexOfCompletion = order.indexOf(completionText);

  if (indexOfCompletion === -1) {
    return `Challenge ${completionText} completion not found.`;
  }

  if (indexOfCompletion === 0) {
    return `No other challenge completions required.`;
  }

  const completions = Array(12);

  for (let i = 0; i < indexOfCompletion; i++) {
    const previous = order[i].split("x").map(Number);
    const previousId = previous[0] - 1;
    const previousCompletion = previous[1];

    completions[previousId] = previousCompletion;
  }

  return completions.filter(Number).map((value, index) => `${index + 1}x${value}`).join(", ");
}

const revampedECs = [
  // EC1
  {
    challenge: 1,
    completion: 1,
    tt: 130,
    ip: "`1e1800`",
    note: null,
    tree: "`11,22,32,42,51,61,72,82,92,102,111,121,131,141,151,161,171|1`"
  },
  {
    challenge: 1,
    completion: 2,
    tt: 140,
    ip: "`1e2000`",
    note: "`Get 60,000 Eternities before trying.`",
    tree: "`11,21,22,32,42,51,61,72,82,92,102,111,121,131,141,151,161,162,171|1`",
  },
  {
    challenge: 1,
    completion: 3,
    tt: 147,
    ip: "`1e2200`",
    note: null,
    tree: "`11,21,22,32,33,42,51,61,62,72,82,92,102,111,121,131,141,151,161,162,171|1`",
  },
  {
    challenge: 1,
    completion: 4,
    tt: 163,
    ip: "`1e2400`",
    note: null,
    tree: "`11,21,22,32,33,41,42,51,61,62,72,82,92,102,111,121,131,141,151,161,162,171|1`"
  },
  {
    challenge: 1,
    completion: 5,
    tt: 176,
    ip: "`1e2600`",
    note: null,
    tree: "`11,21,22,32,33,41,42,51,61,62,72,82,92,102,111,121,131,141,151,161,162,171|1`"
  },
  // EC2
  {
    challenge: 2,
    completion: 1,
    tt: 135,
    ip: "`1e975`",
    note: null,
    tree: "`11,22,32,42,51,61,73,83,93,103,111,121,131,141,151,161,171|2`",
  },
  {
    challenge: 2,
    completion: 2,
    tt: 157,
    ip: "`1e1150`",
    note: null,
    tree: "`11,21,22,31,32,33,41,42,51,61,73,83,93,103,111,121,131,141,151,161,162,171|2`",
  },
  {
    challenge: 2,
    completion: 3,
    tt: 182,
    ip: "`1e1325`",
    note: null,
    tree: "`11,21,22,31,32,33,41,42,51,61,73,83,93,103,111,121,131,141,151,161,162,171|2`",
  },
  {
    challenge: 2,
    completion: 4,
    tt: 208,
    ip: "`1e1500`",
    note: null,
    tree: "`11,21,22,31,32,33,41,42,51,61,73,83,93,103,111,121,131,141,151,161,162,171|2`",
  },
  {
    challenge: 2,
    completion: 5,
    tt: 240,
    ip: "`1e1675`",
    note: null,
    tree: "`11,21,22,31,32,33,41,42,51,61,73,83,93,103,111,121,131,141,151,161,162,171|2`",
  },
  // EC3
  {
    challenge: 3,
    completion: 1,
    tt: 140,
    ip: "`1e600`",
    note: "`To unlock the challenge, use TD, and then switch to the tree.`",
    tree: `11,22,32,42,51,61,71,81,91,101,111,122,132,142,151,161,162,171|3`
  },
  {
    challenge: 3,
    completion: 2,
    tt: 155,
    ip: "`1e600`",
    note: "`To unlock the challenge, use TD, and then switch to the tree.`",
    tree: "`11,21,22,31,32,33,41,42,51,61,71,81,91,101,111,122,132,142,151,161,162,171|3`"
  },
  {
    challenge: 3,
    completion: 3,
    tt: 165,
    ip: "`1e600`",
    note: "`To unlock the challenge, use TD, and then switch to the tree.`",
    tree: "`11,21,22,31,32,33,41,42,51,61,72,82,92,102,111,122,132,142,151,161,162,171|3`"
  },
  {
    challenge: 3,
    completion: 4,
    tt: 182,
    ip: "`1e600`",
    note: "`To unlock the challenge, use TD, and then switch to the tree.`",
    tree: "`11,21,22,31,32,33,41,42,51,61,72,82,92,102,111,122,132,142,151,161,162,171|3`"
  },
  {
    challenge: 3,
    completion: 5,
    tt: 208,
    ip: "`1e600`",
    note: "`To unlock the challenge, use TD, and then switch to the tree.`",
    tree: "`11,21,22,31,32,33,41,42,51,61,72,82,92,102,111,122,132,142,151,161,162,171|3`"
  },
  // EC4
  {
    challenge: 4,
    completion: 1,
    tt: 145,
    ip: "`1e2750`",
    note: "`Fail once for achievement`",
    tree: "`11,21,22,32,33,42,51,61,73,83,93,102,111,123,133,143|4`"
  },
  {
    challenge: 4,
    completion: 2,
    tt: 170,
    ip: "`1e3300`",
    note: null,
    tree: "`11,22,32,42,51,61,73,83,93,193,111,123,133,143,151,162,171|4`"
  },
  {
    challenge: 4,
    completion: 3,
    tt: 176,
    ip: "`1e3850`",
    note: null,
    tree: "`11,21,22,32,42,51,61,62,73,83,93,193,111,123,133,143,151,162,171|4`"
  },
  {
    challenge: 4,
    completion: 4,
    tt: 252,
    ip: "`1e4400`",
    note: null,
    tree: "`11,21,22,31,32,33,41,42,51,61,62,73,83,93,103,111,123,133,143,151,161,162,171|4`"
  },
  {
    challenge: 4,
    completion: 5,
    tt: 370,
    ip: "`1e4950`",
    note: "`TS181 required`",
    tree: "`11,22,32,42,51,61,73,83,93,103,111,123,133,143,151,162,171,181|4`"
  },
  // EC5
  {
    challenge: 5,
    completion: 1,
    tt: 147,
    ip: "`1e750`",
    note: null,
    tree: "`11,21,22,32,42,51|5`"
  },
  {
    challenge: 5,
    completion: 2,
    tt: 182,
    ip: "`1e1150`",
    note: null,
    tree: "`11,22,32,42,51,61,72,82,92,102,111|5`"
  },
  {
    challenge: 5,
    completion: 3,
    tt: 200,
    ip: "`1e1550`",
    note: null,
    tree: "`11,22,32,42,51,61,72,82,91,102,111,121,131,141|5`"
  },
  {
    challenge: 5,
    completion: 4,
    tt: 220,
    ip: "`1e1950`",
    note: null,
    tree: "`11,21,22,31,32,33,42,51,61,622,72,82,92,102,111,121,131,141,151|5`"
  },
  {
    challenge: 5,
    completion: 5,
    tt: 252,
    ip: "`1e2350`",
    note: null,
    tree: "`11,21,22,31,32,33,41,42,51,61,62,72,82,92,102,111,121,131,141,151,161,162,171|5`"
  },
  // EC6
  {
    challenge: 6,
    completion: 1,
    tt: 161,
    ip: "`1e850`",
    note: "`1e15 times last crunch, wait for RGs (+TS33 at 163 TT)`",
    tree: "`11,21,22,32,42,51,61,62,72,82,92,102,111,121,131,141,33|6`"
  },
  {
    challenge: 6,
    completion: 2,
    tt: 176,
    ip: "`1e1100`",
    note: null,
    tree: "`11,21,22,32,42,51,61,62,72,82,92,102,111,121,131,141,151,162|6`"
  },
  {
    challenge: 6,
    completion: 3,
    tt: 208,
    ip: "`1e1350`",
    note: null,
    tree: "`11,21,22,31,32,33,41,42,51,61,62,72,82,92,102,111,121,131,141,151,161,162,171|6`"
  },
  {
    challenge: 6,
    completion: 4,
    tt: 252,
    ip: "`1e1600`",
    note: null,
    tree: "`11,21,22,31,32,33,41,42,51,61,62,72,82,92,102,111,121,131,141,151,161,162,171|6`"
  },
  {
    challenge: 6,
    completion: 5,
    tt: 320,
    ip: "`1e1850`",
    note: "`Get eternity upgrade 5 (1e40 EP)`",
    tree: "`11,21,22,31,32,33,41,42,51,61,62,72,82,92,102,111,121,131,141,151,161,162,171|6`"
  },
  // EC7
  {
    challenge: 7,
    completion: 1,
    tt: 167,
    ip: "`1e2000`",
    note: "`To unlock the challenge, use TD, and then switch to the tree.`",
    tree: "`11,21,22,32,42,51,61,62,71,81,91,101,111|7`"
  },
  {
    challenge: 7,
    completion: 2,
    tt: 193,
    ip: "`1e2530`",
    note: "`To unlock the challenge, use TD, and then switch to the tree.`",
    tree: "`11,21,22,31,32,33,41,42,51,61,62,71,81,91,101,111,121,131,141|7`"
  },
  {
    challenge: 7,
    completion: 3,
    tt: 220,
    ip: "`1e3060`",
    note: "`To unlock the challenge, use TD, and then switch to the tree.`",
    tree: "`11,21,22,31,32,33,41,42,51,61,62,71,81,91,101,111,121,131,141,151,161,162|7`"
  },
  {
    challenge: 7,
    completion: 4,
    tt: 252,
    ip: "`1e3590`",
    note: "`To unlock the challenge, use TD, and then switch to the tree.`",
    tree: "`11,21,22,31,32,33,41,42,51,61,62,71,81,91,101,111,121,131,141,151,161,162,171|7`"
  },
  {
    challenge: 7,
    completion: 5,
    tt: 895,
    ip: "`1e4120`",
    note: "`To unlock the challenge, use TD, and then switch to the tree.`",
    tree: "`11,21,22,31,32,33,41,42,51,61,62,71,81,91,101,111,121,131,141,151,161,162,171,181,193,214|7`"
  },
  // EC8
  {
    challenge: 8,
    completion: 1,
    tt: 208,
    ip: "`1e1300`",
    note: "`Buy the challenge once, then respec your tree and buy everything up until TS123. Start the challenge and wait for replicanti. Then buy the rest of the tree. Spend your upgrades on: 0 RG, 9% chance, remaining on interval - all on ID1.`",
    tree: "`11,22,32,42,51,61,73,83,93,103,111,123,133,143,151,161,162|8`"
  },
  {
    challenge: 8,
    completion: 2,
    tt: 320,
    ip: "`1e2200`",
    note: "`Buy the challenge once, then respec your tree and buy everything up until TS123. Start the challenge and wait for replicanti. Then buy the rest of the tree: 133,143,151,161,162,171. Spend your upgrades on: 0 RG, 9% chance, remaining on interval - all on ID1.`",
    tree: "`11,21,22,31,32,33,41,42,51,61,62,73,83,93,103,111,123,133,143,151,161,162,171|8`"
  },
  {
    challenge: 8,
    completion: 3,
    tt: 450,
    ip: "`1e3100`",
    note: "`Buy the challenge once, then respec your tree and buy everything up until TS123. Start the challenge and wait for replicanti and max RG. Then buy the rest of the tree: 133,143,151,161,162,171,181. Spend your upgrades on: 4 RG, 9% chance, remaining on interval - all on ID1.`",
    tree: "`11,21,22,31,32,33,41,42,51,61,62,73,83,93,103,111,123,133,143,151,161,162,171,181|8`"
  },
  {
    challenge: 8,
    completion: 4,
    tt: 600,
    ip: "`1e4000`",
    note: "`Buy the challenge once, then respec your tree and buy everything up until TS123. Start the challenge and wait for replicanti and max RG. Then buy the rest of the tree: 133,143,151,161,162,171,181. Spend your upgrades on: 5 RG, 9% chance, remaining on interval - all on ID1.`",
    tree: "`11,21,22,31,32,33,41,42,51,61,62,73,83,93,103,111,123,133,143,151,161,162,171,181|8`"
  },
  {
    challenge: 8,
    completion: 5,
    tt: 825,
    ip: "`1e4900`",
    note: "`Spend your upgrades on: 0 RG, 9% chance, remaining on interval - all on ID1.`",
    tree: "`11,21,22,31,32,33,41,42,51,61,62,73,83,93,103,111,123,133,143,151,161,162,171,181|8`"
  },
  // EC9
  {
    challenge: 9,
    completion: 1,
    tt: 522,
    ip: "`1e1750`",
    note: "`Can be done with less TT.`",
    tree: "`11,22,32,42,51,61,73,83,93,103,111,121,131,141,151,161,162,171|9`"
  },
  {
    challenge: 9,
    completion: 2,
    tt: 575,
    ip: "`1e2000`",
    note: "`Can be done with less TT.`",
    tree: "`11,21,22,31,32,33,41,42,51,61,62,73,83,93,103,111,121,131,141,151,161,162,171|9`"
  },
  {
    challenge: 9,
    completion: 3,
    tt: 660,
    ip: "`1e2250`",
    note: "`Can be done with less TT.`",
    tree: "`11,21,22,31,32,33,41,42,51,61,62,73,83,93,103,111,121,131,141,151,161,162,171|9`"
  },
  {
    challenge: 9,
    completion: 4,
    tt: 760,
    ip: "`1e2500`",
    note: "`Can be done with less TT.`",
    tree: "`11,21,22,31,32,33,41,42,51,61,62,73,83,93,103,111,121,131,141,151,161,162,171|9`"
  },
  {
    challenge: 9,
    completion: 5,
    tt: 830,
    ip: "`1e2750`",
    note: null,
    tree: "`11,21,22,31,32,33,41,42,51,61,62,73,83,93,103,111,121,131,141,151,161,162,171,181|9`"
  },
  // EC10
  {
    challenge: 10,
    completion: 1,
    tt: 895,
    ip: "`1e3000`",
    note: "`Farm 150M infinities inside the challenge.`",
    tree: "`11,21,22,31,32,33,41,42,51,61,62,71,81,91,101,111,121,131,141,151,161,162,171,181|10`"
  },
  {
    challenge: 10,
    completion: 2,
    tt: 1900,
    ip: "`1e3300`",
    note: "`10M+ binfs recommended.`",
    tree: "`11,21,22,31,32,33,41,42,51,61,62,71,81,91,101,111,121,131,141,151,161,162,171,181,191,193,211,214|10`"
  },
  {
    challenge: 10,
    completion: 3,
    tt: 2050,
    ip: "`1e3600`",
    note: "`20M+ binfs recommended.`",
    tree: "`11,21,22,31,32,33,41,42,51,61,62,71,81,91,101,111,121,131,141,151,161,162,171,181,192,193,214|10`"
  },
  {
    challenge: 10,
    completion: 4,
    tt: 3650,
    ip: "`1e3900`",
    note: "`30M+ binfs recommended.`",
    tree: "`11,21,22,31,32,33,41,42,51,61,62,71,81,91,101,111,121,131,141,151,161,162,171,181,192,193,213,214|10`"
  },
  {
    challenge: 10,
    completion: 5,
    tt: 5200,
    ip: "`1e4200`",
    note: "`40M+ binfs recommended.`",
    tree: "`11,21,22,31,32,33,41,42,51,61,62,71,81,91,101,111,121,131,141,151,161,162,171,181,191,192,193,211,213,214,225,228,233|10`"
  },
  // EC11
  {
    challenge: 11,
    completion: 1,
    tt: 5600,
    ip: "`1e500`",
    note: "`Get the Popular Music - achievement before EC11s. (Use active path, get 180 max RGs, disable galaxy autobuyer, crunch, hold R to buy RGs.)`",
    tree: "`11,21,22,31,32,33,41,42,51,61,62,71,81,91,101,111,121,131,141,151,161,162,171,181,191,192,193,211,212,213,222,225,231,233|11`"
  },
  {
    challenge: 11,
    completion: 2,
    tt: 5600,
    ip: "`1e700`",
    note: null,
    tree: "`11,21,22,31,32,33,41,42,51,61,62,71,81,91,101,111,121,131,141,151,161,162,171,181,191,192,193,211,212,213,222,225,231,233|11`"
  },
  {
    challenge: 11,
    completion: 3,
    tt: 5950,
    ip: "`1e900`",
    note: null,
    tree: "`11,21,22,31,32,33,41,42,51,61,62,71,81,91,101,111,123,133,143,151,161,162,171,181,191,192,193,211,212,213,222,223,225,231,233|11`"
  },
  {
    challenge: 11,
    completion: 4,
    tt: 5950,
    ip: "`1e1100`",
    note: null,
    tree: "`11,21,22,31,32,33,41,42,51,61,62,71,81,91,101,111,123,133,143,151,161,162,171,181,191,192,193,211,212,213,222,223,225,231,233|11`"
  },
  {
    challenge: 11,
    completion: 5,
    tt: 5950,
    ip: "`1e1300`",
    note: "`This takes around 2h 45m.`",
    tree: "`11,21,22,31,32,33,41,42,51,61,62,71,81,91,101,111,123,133,143,151,161,162,171,181,191,192,193,211,212,213,222,223,225,231,233|11`"
  },
  // EC12
  {
    challenge: 12,
    completion: 1,
    tt: 9800,
    ip: "`1e110,000`",
    note: "`Enable Auto-Eternity.`",
    tree: "`11,21,22,31,32,33,41,42,51,61,62,73,83,93,103,111,122,132,142,151,161,162,171,181,191,193,211,212,213,214,222,224,226,227,232,234|12`"
  },
  {
    challenge: 12,
    completion: 2,
    tt: 9800,
    ip: "`1e122,000`",
    note: "`Enable Auto-Eternity.`",
    tree: "`11,21,22,31,32,33,41,42,51,61,62,73,83,93,103,111,122,132,142,151,161,162,171,181,191,193,211,212,213,214,222,224,226,227,232,234|12`"
  },
  {
    challenge: 12,
    completion: 3,
    tt: 10750,
    ip: "`1e134,000`",
    note: "`Enable Auto-Eternity.`",
    tree: "`11,21,22,31,32,33,41,42,51,61,62,73,83,93,103,111,122,132,142,151,161,162,171,181,191,193,211,212,213,214,222,224,226,227,232,234|12`"
  },
  {
    challenge: 12,
    completion: 4,
    tt: 11200,
    ip: "`1e146,000`",
    note: "`Enable Auto-Eternity.`",
    tree: "`11,21,22,31,32,33,41,42,51,61,62,73,83,93,103,111,122,132,142,151,161,162,171,181,191,193,211,212,213,214,222,224,226,227,232,234|12`"
  },
  {
    challenge: 12,
    completion: 5,
    tt: 12350,
    ip: "`1e158,000`",
    note: "`Enable Auto-Eternity. Can be done without the When Will It Be Enough - achievement. (Can be done earlier with the achievement.)`",
    tree: "`11,21,22,31,32,33,41,42,51,61,62,73,83,93,103,111,122,132,142,151,161,162,171,181,191,193,211,212,213,214,222,224,226,227,232,234|12`"
  },
];

const functions = require("../functions");

module.exports = {
  number: 4,
  name: "eternitychallenge",
  description: "Requires two arguments: `++eternitychallenge [ECNumber] [CompletionNumber]`. You may notice that some trees increase the number of TT you need, even though it's the same tree as the previous. This follows the Eternity Challenge guide followed by Ninjatsu, and TT can be used as something of a progress marker. For that reason, some trees have more TT than others for the same tree. Returns Total TT for a tree and then the tree.",
  execute(message, args, id) {
    if (functions.ecsCheck(id)) {
      let a = [];
      let c = 0;
      let d = 0;
      if (args[0] === undefined) {
        message.channel.send("Hey, you can't do that! That input is undefined. Please try with a different input.");
        return;
      }
      if (args[0].includes("x")) {
        a = args[0].split("x");
        c = Math.abs(Math.floor(a[0]));
        d = Math.abs(Math.floor(a[1]));
      } else {
        c = Math.abs(Math.floor(args[0]));
        d = Math.abs(Math.floor(args[1]));
      }

      if (Number.isNaN(c) || Number.isNaN(d)) message.channel.send("Something went wrong while parsing your input.");

      if (c > 12) {
        message.channel.send(`EC${c} is not an EC, silly!`);
        return;
      }
      if (d > 5) {
        message.channel.send(`You cannot complete an EC ${d} times, silly! If you are looking for a tree to use if you want to test something in an EC, use the x5 tree.`);
        return;
      }
      if (c === 0 || d === 0) {
        message.channel.send(`You cannot do EC${c} ${d} times, silly!`);
        return;
      }
    
      const ec = revampedECs[(c - 1) * 5 + (d - 1)];
    
      if (c <= 12 && d <= 5) {
        message.channel.send(`The tree for EC${c}x${d} is: ${ec.tree}
    TT for Completion: \`${ec.tt}\`
    IP Requirement for Completion: \`${ec.ip}\` ${ec.note === null ? `` : `\n    Note: \`${ec.note}\``}
    Other completions: \`${otherCompletions(c, d)}\`
    Check your DMs for the tree for easy copying!`);
    try {
      message.author.send(`${ec.tree}`);
    } catch {
      message.channel.send("Hey! I can't DM you!");
    }
      }
    } else {
      message.channel.send("This command only works in bot commands, common channels, or EC channels!");
    }
  }
};
