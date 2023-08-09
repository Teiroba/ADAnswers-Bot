import { ApplicationCommandType, CommandInteraction } from "discord.js";
import { Command } from "../../command";
import { Random } from "../../functions/Random";
import { bushisms } from "../../utils/databases/bushisms";
import { isHelper } from "../../functions/Misc";

export const bushism: Command = {
  name: "bushism",
  description: "returns a bushism",
  type: ApplicationCommandType.ChatInput,
  run: async(interaction: CommandInteraction) => {
    if (!interaction) return;

    const content = Random.choice(bushisms)!;

    await interaction.reply({ content, ephemeral: !isHelper(interaction) });
  }
};