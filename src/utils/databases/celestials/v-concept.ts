/* eslint-disable max-len */

import { VAchievement, VInfo } from "../../types";
import { footerText, pluralise } from "../../../functions/Misc";
import { Colour } from "../../colours";
import { EmbedBuilder } from "discord.js";
import { format } from "../../format";

export const VUnlocksEmbed = () => new EmbedBuilder()
  .setTitle("V Unlocks")
  .setColor(Colour.v)
  .addFields(V.unlocks.map(unlock => ({ name: `${unlock.requirement} ST Unlock`, value: `${unlock.effect}\n${unlock.formula ? `Formula: ${unlock.formula}` : ""}`, inline: false })))
  .setTimestamp()
  .setFooter({ text: footerText(), iconURL: `https://cdn.discordapp.com/attachments/351479640755404820/980696250389254195/antimatter.png` });

export function isValidAchievementTier(achievementId: string, tier: number|undefined): boolean {
  if (!(achievementId in V.achievements)) {
    return false;
  }
  // Case of the user not providing a value.
  if (typeof tier === "undefined") return true;
  if (tier % 1 !== 0) return false;
  if (tier < 1) return false;

  // I could remove "isHard" and just use the length of the array, but then ST rewarding becomes harder.
  const maxTier: number = V.achievements[achievementId].isHard ? 5 : 6;
  if (tier > maxTier) return false;
  return true;
}

function formatVAchievement(achievementId: string, tier: number|undefined): string {
  const achievement: VAchievement = V.achievements[achievementId];
  // Super cheaty formatting, gooooooooo
  let requirement: string;
  if (typeof tier === "undefined") {
    const maxTier = achievement.isHard ? 4 : 5;
    requirement = `(${format(achievement.values[0])}-${format(achievement.values[maxTier])}`;
  } else {
    requirement = format(achievement.values[tier - 1]);
  }
  return achievement.description.replace("{0}", requirement);
}

// Might just throw in the towel and make this a function.
export const VAchievementEmbed = (achievementId: string, tier: number|undefined) => new EmbedBuilder()
  .setTitle(V.achievements[achievementId].name)
  .setColor(Colour.v)
  .addFields(
    { name: "Requirement", value: formatVAchievement(achievementId, tier), inline: false },
    { name: "Reward", value: `${V.achievements[achievementId].isHard ? 2 : 1} ${pluralise("Space Theorem", V.achievements[achievementId].isHard ? 2 : 1)}` }
  )
  .setTimestamp()
  .setFooter({ text: footerText(), iconURL: `https://cdn.discordapp.com/attachments/351479640755404820/980696250389254195/antimatter.png` });

export const V: VInfo = {
  name: "V",
  celestialOf: "Achievements",
  info: `V is the fourth Celestial, whose tab can be viewed by completing Achievement 151 (You really didn't need it anyways), requiring you to purchase 800 Antimatter Galaxies without any 8th Dimensions in an Infinity. V's mechanics and Reality, however, has additional unlock requirements. The following requirements must be met at the same time:\n- Complete 10,000 Realities\n- Have 1e60 Reality Machines\n- Have 1e70 Eternities\n- Have 1e160 Infinities\n- Have 1e320 Dilated Time\n- Have 1e320,000 Replicanti\nAll of these requirements must be met at the same time. Note that the progress bars are neither logarithmic nor linear.`,
  reality: {
    challenge: `Dimension Multipliers, EP gain, IP gain, and Dilated Time gain are all square-rooted. The replicanti interval in seconds is squared. Notably, since Time Theorem generation is still enabled, this reality is relatively easier than Teresa's.\nCreating a new Reality while in V's Reality does not unlock the next Celestial, instead only giving you 1 Space Theorem for the first level of GLyph Knight. To Unlock the next Celestial, you must complete all tiers of all 6 of V's Achievements.`,
    reward: `N/A. See V's Achievements for more details.`
  },
  mainMechanic: {
    name: `V-Achievements and Space Theorems`,
    explanation: `Progression with V involves completing the 6 "V-Achievements" in their Reality, each with unique restrictions and resource requirements. Each Achievement can be completed 6 times, and gives 1 Space Theorem as a reward. Space Theorems are the primary currency of V, and allow you to purchase "Forbidden" Time Studies, such as adjacent Light/Dark Studies, or multiple paths on the Pace Split. Studies still need to be bought in order from top to bottom in the pace split. In addition, completing certain numbers of V-Achievements gives additional milestones.`
  },
  unlocks: [
    {
      effect: "Unlock the ability to spend Perk Points to reduce the goal requirement V-Achievements (except Glyph Knight). This reduction divides or subtracts from the requirements of the achievements, and applies to all future tiers of that achievement.",
      requirement: 2
    },
    {
      effect: "Raise Antimatter Dimensions to a power based on total Space Theorems.",
      formula: "`1 + (sqrt(ST) / 100)`",
      requirement: 5
    },
    {
      effect: "Reduce the Auto-EC completion time based on the Achievement Multiplier.",
      formula: "`60 * 20 / achievement multiplier` minutes for full completion",
      requirement: 10
    },
    {
      effect: "Unlock the ability to Automatically Purge Glyphs on Reality",
      requirement: 16
    },
    {
      effect: "Multiply the Black Holes' power by the Achievement Multiplier. This applies to each Black Hole independently.",
      requirement: 30
    },
    {
      effect: "Reduce the Space Theorem cost of all Time Studies by 2. This allows you to purchase all Time Studies with 10 Space Theorms remaining. Unlock the 5th Celestial, ||Ra, Celestial of the Forgotten||",
      requirement: 36
    }
  ],
  achievements: {
    "glyphknight": {
      name: "Glyph Knight",
      isHard: false,
      description: "Unlock Reality with at most {0} Glyphs equipped.",
      values: [5, 4, 3, 2, 1, 0]
    },
    "antistellar": {
      name: "AntiStellar",
      isHard: false,
      description: "Have {0} total galaxies from all types.",
      values: [4000, 4300, 4600, 4900, 5200, 5500]
    },
    "se7en": {
      name: "Se7en deadly matters",
      isHard: false,
      description: "Get {0} Infinity Points in Eternity Challenge 7.",
      values: ["1e600000", "1e720000", "1e840000", "1e960000", "1e1080000", "1e1200000"]
    },
    "youngboy": {
      name: "Young Boy",
      isHard: false,
      description: "Get {0} Antimatter in Eternity Challenge 12 without unlocking Time Dilation",
      values: [400e6, 450e6, 500e6, 600e6, 700e6, 800e6]
    },
    "eternalsunshine": {
      name: "Eternal Sunshine",
      isHard: false,
      description: "Get {0} Eternity Points",
      values: ["1e7000", "1e7600", "1e8200", "1e8800", "1e9400", "1e10000"]
    },
    "matterception": {
      name: "Matterception",
      isHard: false,
      description: "Get {0} Dimension Boosts while Dilated and inside Eternity Challenge 5.",
      values: [51, 52, 53, 54, 55, 56]
    },
    "requiem": {
      name: "Requiem for a Glyph",
      isHard: true,
      description: "Unlock Reality with at most {0} Glyphs equipped for the entire Reality.",
      values: [-1, -4, -7, -10, -13]
    },
    "postdestination": {
      name: "Post-destination",
      isHard: true,
      description: "Get 400,000 Time Theorems with a /{0} Black Hole or slower, without discharging or entering EC12",
      values: ["1e100", "1e150", "1e200", "1e250", "1e300"]
    },
    "shutterglyph": {
      name: "Shutter Glyph",
      isHard: true,
      description: "Reach a Glyph of level {0}",
      values: [6500, 7000, 8000, 9000, 10000]
    }
  }
};
//
// export const V: VObject = {
// // eslint-disable-next-line max-len
// info: `V is a unique Celestial unlocked by completing Achievement ID 151, requiring 800 Antimatter Galaxies without buying the 8th Antimatter Dimension in your current Infinity. Once unlocked, V has additional requirements for full access. You must complete 10,000 Realities, have 1e60 unspent RM, and reach specific milestones in Eternities, Infinities, Dilated Time, and Replicanti, all within the same Reality. Upon meeting these requirements, you can enter V's Reality. However, the completion of the Reality is just the beginning. V has six requirements, each linked to progress within V's Reality, rewarding V-Achievements. V-Achievements persist after leaving V's Reality and can be completed multiple times. Completed V-Achievements unlock upgrades on the V tab and grant Space Theorems. Space Theorems allow the purchase of normally forbidden Time Studies, including multiple paths in the Pace Split and both Time Studies within a dark/light pair. They are replenished upon respeccing studies. Reducing goals with 2 V-Achievements makes certain V-Achievement requirements easier by spending Perk Points. The cost remains constant and applies to future tiers as well. Having 36 V-Achievements unlocks the next Celestial.`,
// // eslint-disable-next-line max-len
// reality: `All Dimension multipliers, Eternity Point gain, Infinity Point gain, and Dilated Time gain per second are square-rooted. The Replicanti interval is squared. The Exponential Glyph Alchemy effect is disabled. V does not have a direct reward from its Reality.`,
// embeds: {
// unlocks: VUnlocksEmbed,
// achievements: VAchievementEmbed
// },
// unlocks: [
// {
//       reward: "You can spend Perk Points to reduce the goal requirement of all tiers of each V-Achievement.",
//       requirement: 2
// },
// {
//       reward: "Antimatter Dimension power based on total Space Theorems",
//       formula: "`1 + sqrt(ST) / 100`",
//       requirement: 5
// },
// {
//       reward: "Achievement multiplier reduces Auto-EC completion time",
//       formula: "`60 * 20 / achievement multiplier` minutes for full completion",
//       requirement: 10
// },
// {
//       reward: "Unlock the ability to Automatically Purge Glyphs on Reality",
//       requirement: 16
// },
// {
//       reward: "Achievement multiplier affects Black Hole power",
//       requirement: 30
// },
// {
//       reward: "Reduce the Space Theorem cost of Time Studies by 2. Unlock Ra, Celestial of the Forgotten",
//       requirement: 36
// }
// ],
// achievements: {
// "glyphknight": {
//       name: "Glyph Knight",
//       description: "Unlock Reality with at most x Glyphs equipped.",
//       values: [5, 4, 3, 2, 1, 0],
//       currency: "Glyphs equipped"
// },
// "antistellar": {
//       name: "AntiStellar",
//       description: "Have x total galaxies from all types.",
//       values: [4000, 4300, 4600, 4900, 5200, 5500],
//       currency: "total Galaxies"
// },
// "se7en": {
//       name: "Se7en deadly matters",
//       description: "Get x Infinity Points in Eternity Challenge 7.",
//       values: ["1e600000", "1e720000", "1e840000", "1e960000", "1e1080000", "1e1200000"],
//       currency: "Infinity Points in EC7"
// },
// "youngboy": {
//       name: "Young Boy",
//       description: "Get x Antimatter in Eternity Challenge 12 without unlocking Time Dilation",
//       values: [400e6, 450e6, 500e6, 600e6, 700e6, 800e6],
//       currency: "Antimatter in EC12"
// },
// "eternalsunshine": {
//       name: "Eternal Sunshine",
//       description: "Get x Eternity Points",
//       values: ["1e7000", "1e7600", "1e8200", "1e8800", "1e9400", "1e10000"],
//       currency: "Eternity Points"
// },
// "matterception": {
//       name: "Matterception",
//       description: "Get x Dimension Boosts while Dilated and inside Eternity Challenge 5.",
//       values: [51, 52, 53, 54, 55, 56],
//       currency: "Dimension Boosts while Dilated inside EC5"
// },
// "requiem": {
//       name: "Requiem for a Glyph",
//       description: "Unlock Reality with at most x Glyphs equipped for the entire Reality.",
//       values: [-1, -4, -7, -10, -13],
//       currency: "Glyphs equipped"
// },
// "postdestination": {
//       name: "Post-destination",
//       description: "Get 400,000 Time Theorems with a /x Black Hole or slower, without discharging or entering EC12",
//       values: ["1e100", "1e150", "1e200", "1e250", "1e300"],
//       currency: "Inverted Black Hole speed"
// },
// "shutterglyph": {
//       name: "Shutter Glyph",
//       description: "Reach a Glyph of level x",
//       values: [6500, 7000, 8000, 9000, 10000],
//       currency: "Glyph level"
// }
// }
// };