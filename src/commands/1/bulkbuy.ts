import { BaseCommandInteraction } from "discord.js";
import { Command } from "../../command";
import { isHelper } from "../../functions/Misc";

export const bulkbuy: Command = {
  name: "bulkbuy",
  description: "describes bulk buy",
  type: "CHAT_INPUT",
  run: async(interaction: BaseCommandInteraction) => {
    if (!interaction) return;

    // eslint-disable-next-line max-len
    const content: string = `This allows you to buy more than one set (ONLY on buy 10s) in one interval. This helps speed up runs overall when using autobuyers. At 512 bulk for all autobuyers on mobile and in the upcoming Reality update, bulk buy is maximised.
    Another explanation, courtesy of the mobile how to play: Once the interval of a Dimension Autobuyer is maxed, all future upgrades will double the amount the autobuyer purchases per tick. This can be disabled.`;

    await interaction.reply({ content, ephemeral: !isHelper(interaction) });
  }
};