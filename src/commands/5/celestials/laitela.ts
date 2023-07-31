import { AttachmentBuilder, ChatInputCommandInteraction, User } from "discord.js";
import { LaitelaBasicInfoEmbed, LaitelaRealityEmbed, LaitelaUnlockEmbed } from "../../../utils/databases/celestials/laitela";
import { authorTitle, isHelper } from "../../../functions/Misc";

export async function laitelaCelestialSubcommand(interaction: ChatInputCommandInteraction): Promise<void> {
  const infoRequested = interaction.options.getSubcommand();
  const user: User = interaction.member === null ? interaction.user : interaction.member.user as User;
  const image = new AttachmentBuilder("src/images/celestials/laitela.png");

  switch (infoRequested) {
    case "basic": {
      const embed = LaitelaBasicInfoEmbed().setAuthor({ name: authorTitle(interaction), iconURL: user.displayAvatarURL() }).setThumbnail("attachment://laitela.png");
      await interaction.reply({ embeds: [embed], files: [image], ephemeral: !isHelper(interaction) });
      break;
    }
    case "reality": {
      const embed = LaitelaRealityEmbed().setAuthor({ name: authorTitle(interaction), iconURL: user.displayAvatarURL() }).setThumbnail("attachment://laitela.png");
      await interaction.reply({ embeds: [embed], files: [image], ephemeral: !isHelper(interaction) });
      break;
    }
    case "unlocks": {
      const embed = LaitelaUnlockEmbed().setAuthor({ name: authorTitle(interaction), iconURL: user.displayAvatarURL() }).setThumbnail("attachment://laitela.png");
      await interaction.reply({ embeds: [embed], files: [image], ephemeral: !isHelper(interaction) });
      break;
    }
  }
}