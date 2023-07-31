import { Colour } from "../../colours";
import { EffarigInfo } from "../../types";
import { EmbedBuilder } from "discord.js";
import { footerText } from "../../../functions/Misc";
import { format } from "../../format";

export const EffarigBasicInfoEmbed = () => new EmbedBuilder()
  .setTitle("Effarig, the Celestial of Ancient Relics")
  .setColor(Colour.teresa)
  .addFields(
    { name: " ", value: Effarig.info },
    { name: Effarig.mainMechanic.name, value: Effarig.mainMechanic.explanation },
    { name: "Formula", value: Effarig.mainMechanic.formula! }
  )
  .setTimestamp()
  .setFooter({ text: footerText(), iconURL: `https://cdn.discordapp.com/attachments/351479640755404820/980696250389254195/antimatter.png` });

export const EffarigRealityEmbed = () => new EmbedBuilder()
  .setTitle("Teresa's Reality")
  .setColor(Colour.teresa)
  .addFields(
    { name: "Challenge", value: Effarig.reality.challenge },
    { name: "Reward", value: `${Effarig.reality.reward}\nFormula: ${Effarig.reality.formula}` },
  )
  .setTimestamp()
  .setFooter({ text: footerText(), iconURL: `https://cdn.discordapp.com/attachments/351479640755404820/980696250389254195/antimatter.png` });

export const EffarigUnlockEmbed = () => new EmbedBuilder()
  .setTitle("Teresa's Unlocks")
  .setColor(Colour.effarig)
  .addFields(Effarig.unlocks.map(unlock => ({ name: `${format(unlock.requirement)} Reality Machines`, value: unlock.effect })))
  .setTimestamp()
  .setFooter({ text: footerText(), iconURL: `https://cdn.discordapp.com/attachments/351479640755404820/980696250389254195/antimatter.png` });


export const Effarig: EffarigInfo = {
  name: "Effarig",
  celestialOf: "Ancient Relics",
  info: `Effarig, the second Celestial, is unlocked by obtaining by filling Teresa's container with at least 1e21 Reality Machines.`,
  reality: {
    // eslint-disable-next-line max-len
    challenge: `Effarig's Reality has 3 "phases", representing each prestige layer. However, all layers share some nerfs:\n- All Dimension multipliers and game speed are Dilated, even more harshly than actual Dilation. This nerf is reduced based on Infinity Power.\n- Tickspeed is also Dilated. However, this nerf is reduced by Time Shards.\n- Glyph levels are capped at certain values based on how far you have progressed in Effarig's Reality. Their rarity is unaffected.\n\nIn **Effarig's Infinity**, Glyphs are limited to level 100.\nIn **Effarig's Eternity**, Infinity Point multipliers from any single source is capped at 1e50x, and Infinity Point gain based on Antimatter is capped at 1e200. Glyphs are limited to level 1500.\nIn **Effarig's Reality**, the nerfs from Effarig's Eternity are repealed, but Glyphs are limited to level 2000.`,
    // eslint-disable-next-line max-len
    reward: `Each layer of Effarig's Reality provides different rewards.\n**Effarig's Infinity** raises the Replicanti cap and maximum Replicanti Galaxy amount based on Infinities.\n**Effarig's Eternity** allows you to generate Infinities based on Eternities, and unlocks the Third Celestial, ||The Nameless Ones||.\n**Effarig's Reality** unlocks a new glyph type, called ||Effarig Glyphs||, that can be found on Reality.`,
    // TODO: determine effects of nerfs in Effarig's Reality.
    formula: "Replicanti cap increase: x`...`\nReplicanti Galaxy limit increase: x`...`"
  },
  mainMechanic: {
    name: `Relic Shards and Effarig's Shop`,
    // eslint-disable-next-line max-len
    explanation: `Progression with Effarig involves gaining "Relic Shards", a new currency gained on Reality. The immediate effect of these Relic Shards is a boost to Glyph Rarity -- Glyphs will be increased by a random amount based on your current Relic Shards.\nRelic Shards also serve as a currency for Effarig's Shop. Spending Relic Shards unlocks various Quality-of-Life improvements related to Glyphs, and is how you unlock Effarig's Reality.`,
    formula: "Relic Shard gain: x`...`\nMaximum Glyph Rarity boost: x`...`"
  },
  unlocks: [
    {
      requirement: 1e7,
      // eslint-disable-next-line max-len
      effect: "Unlock the ability to Adjust the \"weight\", or significance, of each factor in Glyph generation. This allows you to make certain factors like Replicanti and Dilated Time impact the final level of Glyphs more, which can improve their level."
    },
    {
      requirement: 2e8,
      // eslint-disable-next-line max-len
      effect: "Unlock the ability to filter glyphs. This gives you more control over which glyphs are picked when the Automator or Reality Autobuyer creates new Realities, by assigning Glyphs a \"score\" based on effects and rarity.You also unlock some new Automator variables based on this Glyph Score."
    },
    {
      requirement: 3e9,
      effect: "Unlock Glyph Presets. These are similar to the Time Study presets, allowing you to save up to 7 sets of Glyphs that you can instantly equip or give a custom name."
    },
    {
      requirement: 5e11,
      effect: "Unlock Effarig's Reality."
    }
  ]
};