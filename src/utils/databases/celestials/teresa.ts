import { EmbedWithFooter, quantify } from "../../../functions/Misc";
import { PerkShopUpgrade, TeresaInfo } from "../../types";
import { Colour } from "../../colours";
import { format } from "../../format";

export const TeresaBasicInfoEmbed = () => EmbedWithFooter()
  .setTitle("Teresa, the Celestial of Reality")
  .setColor(Colour.teresa)
  .addFields(
    { name: " ", value: Teresa.info },
    { name: Teresa.mainMechanic.name, value: Teresa.mainMechanic.explanation },
    { name: "Formula", value: Teresa.mainMechanic.formula! }
  );

export const TeresaRealityEmbed = () => EmbedWithFooter()
  .setTitle("Teresa's Reality")
  .setColor(Colour.teresa)
  .addFields(
    { name: "Challenge", value: Teresa.reality.challenge },
    { name: "Reward", value: `${Teresa.reality.reward}\nFormula: ${Teresa.reality.formula}` },
  );

export const TeresaPerkShopEmbed = () => EmbedWithFooter()
  .setTitle("Teresa's Perk Shop")
  .setColor(Colour.teresa)
  .addFields(Teresa.perkShop.map(buyable => (
    { name: `${buyable.name}`, value: perkShopUpgradeDescription(buyable) }
  )));

function perkShopUpgradeDescription(buyable: PerkShopUpgrade): string {
  let costInfo: string = `${quantify("Perk Point", buyable.initialCost)}`;
  if (buyable.increment !== 1) {
    costInfo += ` (Increasing by x${buyable.increment} per purchase)`;
  }
  return `${buyable.description}\n**Cost:** ${costInfo}\n**Cap:** ${buyable.cap}`;
}

export const TeresaUnlockEmbed = () => EmbedWithFooter()
  .setTitle("Teresa's Unlocks")
  .setColor(Colour.teresa)
  .addFields(Teresa.unlocks.map(unlock => ({ name: `${format(unlock.requirement)} Reality Machines`, value: unlock.effect })));


export const Teresa: TeresaInfo = {
  name: "Teresa",
  celestialOf: "Reality",
  info: `Teresa, the first Celestial, is unlocked by obtaining all Reality Upgrades (Achievement 147).`,
  reality: {
    // eslint-disable-next-line max-len
    challenge: `Time Theorem Generation from Dilation Glyphs is disabled. Infinity and Eternity Point gain is raised to the power of ^0.55. To complete Teresa's Reality, you have to reach e4000 EP and unlock Reality via the Time Study tree. Teresa's Reality may be repeated for a stronger (not stacking) reward, similar to Dilation.`,
    reward: `Multiply the gain of glyph sacrifice power, based on how much antimatter you produced while in Teresa's Reality.`,
    formula: "x`max((log10(antimatter) / 1.5e8)^12, 1)`"
  },
  mainMechanic: {
    name: `Teresa's Container and Pouring RM`,
    // eslint-disable-next-line max-len
    explanation: `Progression with Teresa involves sacrificing, or "pouring", Reality Machines into a container in exchange for various unlocks and a RM multiplier. Progress towards unlocks is shown by the fill amount of Teresa's container; note that the percent filled is logarithmic, and each additional amount filled requires an exponentially increasing amount of RM. The contained becomes completely filled at e24 RM, and no further machines can be poured in.`,
    formula: "x`max(250 * (poured / 1e24)^0.1, 1)`"
  },
  unlocks: [
    {
      requirement: 1e6,
      effect: "Start Reality with all Eternity Upgrades unlocked. Supercedes EU1 and EU2. Does not keep your EP multipier across Realities."
    },
    {
      requirement: 1e10,
      effect: "Unlock the ability to \"Undo\" equipping a Glyph. This allows you to rewind time to when you equipped a glyph in a reality, which can streamline testing of glyph sets."
    },
    {
      requirement: 1e14,
      effect: "Unlock Teresa's Reality"
    },
    {
      requirement: 1e18,
      effect: "Unlock passive Eternity Point generation. You will gain 1% of your EP gain on Eternity per minute, affected by game speed boosts."
    },
    {
      requirement: 1e21,
      effect: "Unlock the Second Celestial: ||Effarig, Celestial of Ancient Relics||."
    },
    {
      requirement: 1e24,
      effect: "Unlock Teresa's Perk Point Shop."
    }
  ],
  perkShop: [
    {
      name: "Glyph Level Increase",
      initialCost: 1,
      increment: 2,
      description: "Increase pre-Instability Glyph levels by 5%",
      cap: "11 purchases (20 with relevant Ra unlock)"
    },
    {
      name: "Reality Machine Increase",
      initialCost: 1,
      increment: 2,
      description: "Double Reality Machine gain",
      cap: "11 purchases (20 with relevant Ra unlock)"
    },
    {
      name: "Dilation Autobuyer Bulk",
      initialCost: 100,
      increment: 2,
      description: "Buy twice as many Dilation upgrades at once",
      cap: "4 purchases (14 with relevant Ra unlock)"
    },
    {
      name: "Autobuyer Speedup",
      initialCost: 1000,
      increment: 2,
      description: "Infinity Dimension, Time Dimension, Dilation, and Replicanti autobuyers are 2x faster",
      cap: "2 purchases (6 with relevant Ra unlock)"
    },
    {
      name: "Single Music Glyph",
      initialCost: 1,
      increment: 1,
      // eslint-disable-next-line max-len
      description: `Generate a Music Glyph of a random type that is 80% of your highest level. This glyph is similar to a normal glyph, but it has a custom "Music" theme, and plays sound when clicked in the inventory. These glyphs can be sacrificed or ||refined|| (with relevant Ra unlock) like normal Glyphs.`,
      cap: "None"
    },
    {
      name: "Multiple Music Glyph",
      initialCost: 1,
      increment: 1,
      description: "Fill all empty slots in your inventory with Music Glyphs.",
      cap: "None"
    }
  ]
};