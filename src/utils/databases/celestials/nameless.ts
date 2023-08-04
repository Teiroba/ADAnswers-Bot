import { Colour } from "../../colours";
import { EmbedBuilder } from "discord.js";
import { NamelessInfo } from "../../types";
import { footerText } from "../../../functions/Misc";
import { format } from "../../format";

export const NamelessBasicInfoEmbed = () => new EmbedBuilder()
  .setTitle("The Nameless Ones, Celestial of Time")
  .setColor(Colour.nameless)
  .addFields(
    { name: " ", value: Nameless.info },
    { name: Nameless.mainMechanic.name, value: Nameless.mainMechanic.explanation },
  )
  .setTimestamp()
  .setFooter({ text: footerText(), iconURL: `https://cdn.discordapp.com/attachments/351479640755404820/980696250389254195/antimatter.png` });

export const NamelessRealityEmbed = () => new EmbedBuilder()
  .setTitle("The Nameless Ones' Reality")
  .setColor(Colour.nameless)
  .addFields(
    { name: "Challenge", value: Nameless.reality.challenge },
    { name: "Reward", value: `${Nameless.reality.reward}\nFormula: ${Nameless.reality.formula}` },
  )
  .setTimestamp()
  .setFooter({ text: footerText(), iconURL: `https://cdn.discordapp.com/attachments/351479640755404820/980696250389254195/antimatter.png` });

export const NamelessUnlockEmbed = () => new EmbedBuilder()
  .setTitle("The Nameless Ones' Unlocks")
  .setColor(Colour.nameless)
  .addFields(Nameless.unlocks.map(unlock => ({ name: `${format(unlock.requirement)} Years of stored Game time`, value: unlock.effect })))
  .setTimestamp()
  .setFooter({ text: footerText(), iconURL: `https://cdn.discordapp.com/attachments/351479640755404820/980696250389254195/antimatter.png` });


export const Nameless: NamelessInfo = {
  name: "The Nameless Ones",
  celestialOf: "Time",
  // eslint-disable-next-line max-len
  info: `The Nameless Ones, the third Celestial, are unlocked by completing Effarig's Eternity. They are a group of individuals collectively weilding power over time.\nNotably, completing the Nameless Ones' Reality will not directly unlock the next Celestial.`,
  reality: {
    // eslint-disable-next-line max-len
    challenge: `The Nameless Ones' Reality is extremely limiting. It includes the following nerfs:\n- Infinity and Time Dimensions can each only be purchased once.\n- You can only have 1 8th Antimatter Dimension. (You really don't need it, anyways.)\n- AD Multipliers are Dilated.\n- Study 192 cannot be purchased; you also cannot unlock study 201.\n- The Physics of the Reality does not allow your Black Holes to exist.\n- Tachyon Particle and Dilated Time gain are raised to the power of ^0.3.\n- Time Theorem Generaton from Dilation Glyphs is disabled. You'll need to find Theorems elsewhere.\n- Certain challenge goals are increased. Don't tell your EC Autocompletor.\n- Stored Game Time can be discharged, but the amount of time you get is reduced to ^0.55.\nHowever, there are several "cracks" that you can take advantage of to progress. In addition, the Nameless Ones will boost your Glyphs to be at least level 5000 in this Reality. They'll try to help you find cracks if you get stuck, but the help takes a while.`,
    // eslint-disable-next-line max-len
    reward: `By destroying the Nameless Ones' Reality, you will unlock Tesseracts. These are purchased using immense amounts of Infinity Points, and increase the number of Infinity Dimensions you can purchase. Although the cost of each Tesseract increases superexponentially, each Tesseract past the first is twice as effective.`,
    formula: "+`500000 * 2 ^ (tesseracts - 1)` ID purchases"
  },
  mainMechanic: {
    name: `Storing Time`,
    // eslint-disable-next-line max-len
    explanation: `Progression with the Nameless Ones involves storing time. This occurs in 2 forms: Game time storage and Real time storage.\nWith **Game time Storage**, you can divert all game speed multiplication from Time Glyphs and the Black Hole into charging a timer. This game time charge is stored until you discharge it, at which point all of the stored time passes at once. This also serves as the currency for the Nameless Ones' unlocks.\nWith **Real time Storage**, you can pause the game for some amount of time to store real time. This stored time can be used to "Amplify" a reality. An amplified reality is repeated multiple times based on the amount of real time stored and the amount of time spent in the reality, effectively multiplying the rewards and giving multiple glyphs.This stored real time is stored at a 70% efficiency, meaning each second that passed while storing becomes 0.7 seconds stored, and is capped at 8 hours (increased to 33 with the relevant Ra unlocks). You can configure this to store offline time.`,
  },
  unlocks: [
    {
      requirement: 1e35,
      // eslint-disable-next-line max-len
      effect: "Increase the starting point of the softcap for free Tickspeed upgrades from Time Dimensions from 300,000 to 400,000."
    },
    {
      requirement: 1e40,
      // eslint-disable-next-line max-len
      effect: "Unlock the Nameless Ones' Reality."
    }
  ]
};