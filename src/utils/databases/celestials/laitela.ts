import { Colour } from "../../colours";
import { EmbedWithFooter } from "../../../functions/formatting";
import { LaitelaInfo } from "../../types";
import { format } from "../../format";

export const LaitelaBasicInfoEmbed = () => EmbedWithFooter()
  .setTitle("Laitela, the Celestial of Dimensions")
  .setColor(Colour.laitela)
  .addFields(
    { name: " ", value: Laitela.info },
    { name: Laitela.mainMechanic.name, value: Laitela.mainMechanic.explanation },
  );

export const LaitelaRealityEmbed = () => EmbedWithFooter()
  .setTitle("Laitela's Reality")
  .setColor(Colour.laitela)
  .addFields(
    { name: "Challenge", value: Laitela.reality.challenge },
    { name: "Reward", value: `${Laitela.reality.reward}\nFormula: ${Laitela.reality.formula}` },
  );

export const LaitelaUnlockEmbed = () => EmbedWithFooter()
  .setTitle("Laitela's Unlocks")
  .setColor(Colour.laitela)
  // TODO: Too many milestones. What, if anything, should we put here? Maybe a cross-reference to the Singularity command.
  .addFields(Laitela.unlocks.map(unlock => ({ name: `${format(unlock.requirement)} singularities`, value: unlock.effect })));


export const Laitela: LaitelaInfo = {
  name: "Lai'tela",
  celestialOf: "Dimensions",
  // eslint-disable-next-line max-len
  info: `Lai'tela, the sixth Celestial, is unlocked from the Imaginary Upgrade "Fabrication of Ideals", by getting e1.5e12 Antimatter without any First Infinity Dimensions, and 1e9 Imaginary Machines. In addition, your dimensions are replaced by a concept called "Continuum". Instead of requiring autobuyers to purchase Antimatter Dimensions, you instead instantly get as many dimensions as you can purchase with your current antimatter. This includes "fractional" purchases, which can increase your dimension count even if you can't buy until 10. Mechanics unlocked by Lai'tela can directly multiply the number of purchases you gain from Continuum.`,
  reality: {
    // eslint-disable-next-line max-len
    challenge: `Infinity Point and Eternity Point gain are Dilated. Game speed is reduced to 1, but increases back to normal over 10 minutes. The Black Hole and the Nameless Ones' mechanics are disabled.\nLike V and Ra, your goal is not to reach e4000 EP and make a new Reality. Instead, you must *destabilize* Lai'tela's Reality as quickly as possible. Antimatter generates Entropy in this Reality. When entropy reaches 100%, the reality is destabilized and you get a reward. If you manage to destabilize the Reality in under 30 seconds, then the highest "active", or producing, dimension is disabled when you attempt the reality again. This causes that dimension number to no longer produce the dimension below it. This applies to the three main dimension types (Antimatter, Infinity, Time). The Reality becomes fully destabilized when you disable all 8 dimensions.`,
    // eslint-disable-next-line max-len
    reward: `You will gain a multiplier to Dark Matter Dimensions based on how quickly you destabilized Lai'tela's Realty, and how many dimensions were disabled when you did so. If you destabilize it to the point where all dimensions are disabled, then you will also get an 8x multiplier to Dark Energy gain.`,
    formula: "+`360 / (Time in reality, in seconds) * 100 ^ (Dimensions disabled)`"
  },
  mainMechanic: {
    name: `Dark Matter Dimensions, Dark Matter, and Dark Energy`,
    // eslint-disable-next-line max-len
    explanation: `Progression with Lai'tela involves producing two resources: Dark Matter, and Dark Energy. These resources are produced by Dark Matter Dimensions (DmD), shown in Lai'tela's tab. As expected, Each DmD produces the tier below it, with the first DmD producing Dark Matter. Unlike other Dimensions, DmDs are not continuous, and their production is dictated by a timer, only producing when their timer runs out. Additionally, each DmD produces Dark Energy every time it ticks, as an amount independent of the amount of that tier of DmD has.\n**Dark Matter** directly affects Continuum, by increasing the amount of purchases by a percent. This includes 8th Dimensions, and can allow you to get significantly more Antimatter Galaxies.\n**Dark Energy** is a seperate resource, used to produce Singularities. Singularities don't do anything on their own, but they unlock milestones as you collect more of them.`,
  },
  unlocks: [
  ]
};