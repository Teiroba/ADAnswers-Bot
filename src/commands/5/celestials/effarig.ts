import { AttachmentBuilder, ChatInputCommandInteraction, User } from "discord.js";
import { EffarigBasicInfoEmbed, EffarigRealityEmbed, EffarigUnlockEmbed } from "../../../utils/databases/celestials/effarig";
import { authorTitle } from "../../../functions/formatting";
import { isHelper } from "../../../functions/Misc";

export async function effarigCelestialSubcommand(interaction: ChatInputCommandInteraction): Promise<void> {
  const infoRequested = interaction.options.getSubcommand();
  const user: User = interaction.member === null ? interaction.user : interaction.member.user as User;
  const image = new AttachmentBuilder("src/images/celestials/effarig.png");

  switch (infoRequested) {
    case "basic": {
      const embed = EffarigBasicInfoEmbed().setAuthor({ name: authorTitle(interaction), iconURL: user.displayAvatarURL() }).setThumbnail("attachment://effarig.png");
      await interaction.reply({ embeds: [embed], files: [image], ephemeral: !isHelper(interaction) });
      break;
    }
    case "reality": {
      const embed = EffarigRealityEmbed().setAuthor({ name: authorTitle(interaction), iconURL: user.displayAvatarURL() }).setThumbnail("attachment://effarig.png");
      await interaction.reply({ embeds: [embed], files: [image], ephemeral: !isHelper(interaction) });
      break;
    }
    case "unlocks": {
      const embed = EffarigUnlockEmbed().setAuthor({ name: authorTitle(interaction), iconURL: user.displayAvatarURL() }).setThumbnail("attachment://effarig.png");
      await interaction.reply({ embeds: [embed], files: [image], ephemeral: !isHelper(interaction) });
      break;
    }
  }
}