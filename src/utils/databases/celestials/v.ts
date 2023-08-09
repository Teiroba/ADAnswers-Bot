/* eslint-disable max-len */

import { EmbedWithFooter, quantify } from "../../../functions/formatting";
import { VAchievement, VInfo } from "../../types";
import { Colour } from "../../colours";
import { EmbedBuilder } from "discord.js";
import { format } from "../../format";

export const VBasicInfoEmbed = () => EmbedWithFooter()
  .setTitle("V, the Celestial of Achievements")
  .setColor(Colour.v)
  .addFields(
    { name: " ", value: V.info },
    { name: V.mainMechanic.name, value: V.mainMechanic.explanation }
  );

export const VRealityEmbed = () => EmbedWithFooter()
  .setTitle("V's Reality")
  .setColor(Colour.v)
  .addFields(
    { name: "Challenge", value: V.reality.challenge },
    { name: "Reward", value: `${V.reality.reward}` }
  );

export const VUnlocksEmbed = () => EmbedWithFooter()
  .setTitle("V Unlocks")
  .setColor(Colour.v)
  .addFields(V.unlocks.map(unlock => ({ name: `At ${unlock.requirement} Space Theorems`, value: `${unlock.effect}\n${unlock.formula ? `Formula: ${unlock.formula}` : ""}`, inline: false })));

export function VAllBasicAchievementsEmbed(): EmbedBuilder {
  const nonHardAchievements = Object.keys(V.achievements).filter(x => !V.achievements[x].isHard);
  return EmbedWithFooter()
    .setTitle("V's Achievements")
    .setColor(Colour.v)
    .addFields(
      // Weird. TS refuses to allow the existence of optional parameters. I'd sooner expect ESLint to yell at me.
      nonHardAchievements.map(x => ({ name: V.achievements[x].name, value: formatVAchievement(x, null), inline: false }))
    );
}

export function VAchievementEmbed(achievementId: string, tier: number | null): EmbedBuilder {
  const achievement: VAchievement = V.achievements[achievementId];
  const reward = achievement.isHard ? 2 : 1;
  let title = `${achievement.isHard ? "Hard-" : ""}V Achievement: ${achievement.name}`;
  if (isValidAchievementTier(achievementId, tier)) {
    title += ` Tier ${tier}`;
  }

  return EmbedWithFooter()
    .setTitle(title)
    .setColor(Colour.v)
    .addFields(
      { name: "Requirement", value: formatVAchievement(achievementId, tier), inline: false },
      { name: "Reward", value: quantify("Space Theorem", reward) }
    );
}

function isValidAchievementTier(achievementId: string, tier: number | null): boolean {
  if (tier === null) return false;
  if (tier % 1 !== 0) return false;
  if (tier < 1) return false;

  const maxTier: number = V.achievements[achievementId].isHard ? 5 : 6;
  if (tier > maxTier) return false;
  return true;
}

function formatVAchievement(achievementId: string, tier: number | null): string {
  const achievement: VAchievement = V.achievements[achievementId];
  // Super cheaty formatting, gooooooooo
  let requirement: string;
  if (isValidAchievementTier(achievementId, tier)) {
    requirement = `**${format(achievement.values[tier! - 1])}**`;
  } else {
    const maxTier = achievement.isHard ? 4 : 5;
    requirement = `**(${format(achievement.values[0])} - ${format(achievement.values[maxTier])})**`;
  }
  return achievement.description.replace("{0}", requirement);
}

export const V: VInfo = {
  name: "V",
  celestialOf: "Achievements",
  info: `V is the fourth Celestial, whose tab can be viewed by completing Achievement 151 (You really didn't need it anyways), requiring you to purchase 800 Antimatter Galaxies without any 8th Dimensions in an Infinity. V's mechanics and Reality, however, have additional unlock requirements. The following requirements must be met at the same time:\n- Complete 10,000 Realities\n- Have 1e60 Reality Machines\n- Have 1e70 Eternities\n- Have 1e160 Infinities\n- Have 1e320 Dilated Time\n- Have 1e320,000 Replicanti\nNote that the progress bars are neither logarithmic nor linear.`,
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
      description: "Get {0} Antimatter in Eternity Challenge 12 without unlocking Time Dilation.",
      values: [400e6, 450e6, 500e6, 600e6, 700e6, 800e6]
    },
    "eternalsunshine": {
      name: "Eternal Sunshine",
      isHard: false,
      description: "Get {0} Eternity Points.",
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
      description: "Get 400,000 Time Theorems with a 1/{0} Black Hole or slower, without discharging or entering EC12.",
      values: ["1e100", "1e150", "1e200", "1e250", "1e300"]
    },
    "shutterglyph": {
      name: "Shutter Glyph",
      isHard: true,
      description: "Reach a Glyph of level {0}.",
      values: [6500, 7000, 8000, 9000, 10000]
    }
  }
};