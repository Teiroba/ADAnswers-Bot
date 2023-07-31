import { AttachmentBuilder, ChatInputCommandInteraction, User } from "discord.js";
import { NamelessBasicInfoEmbed, NamelessRealityEmbed, NamelessUnlockEmbed } from "../../../utils/databases/celestials/nameless";
import { authorTitle, isHelper } from "../../../functions/Misc";

export async function namelessCelestialSubcommand(interaction: ChatInputCommandInteraction): Promise<void> {
  const infoRequested = interaction.options.getSubcommand();
  const user: User = interaction.member === null ? interaction.user : interaction.member.user as User;
  const image = new AttachmentBuilder("src/images/celestials/nameless.png");

  switch (infoRequested) {
    case "basic": {
      const embed = NamelessBasicInfoEmbed().setAuthor({ name: authorTitle(interaction), iconURL: user.displayAvatarURL() }).setThumbnail("attachment://nameless.png");
      await interaction.reply({ embeds: [embed], files: [image], ephemeral: !isHelper(interaction) });
      break;
    }
    case "reality": {
      const embed = NamelessRealityEmbed().setAuthor({ name: authorTitle(interaction), iconURL: user.displayAvatarURL() }).setThumbnail("attachment://nameless.png");
      await interaction.reply({ embeds: [embed], files: [image], ephemeral: !isHelper(interaction) });
      break;
    }
    case "unlocks": {
      const embed = NamelessUnlockEmbed().setAuthor({ name: authorTitle(interaction), iconURL: user.displayAvatarURL() }).setThumbnail("attachment://nameless.png");
      await interaction.reply({ embeds: [embed], files: [image], ephemeral: !isHelper(interaction) });
      break;
    }
  }
}