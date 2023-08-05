import { AttachmentBuilder, ChatInputCommandInteraction, User } from "discord.js";
import { VAchievementEmbed, VAllBasicAchievementsEmbed, VBasicInfoEmbed, VRealityEmbed, VUnlocksEmbed } from "../../../utils/databases/celestials/v";
import { authorTitle, isHelper } from "../../../functions/Misc";

export async function vCelestialSubcommand(interaction: ChatInputCommandInteraction): Promise<void> {
  const infoRequested = interaction.options.getSubcommand();
  const user: User = interaction.member === null ? interaction.user : interaction.member.user as User;
  const image = new AttachmentBuilder("src/images/celestials/v.png");

  switch (infoRequested) {
    case "basic": {
      const embed = VBasicInfoEmbed().setAuthor({ name: authorTitle(interaction), iconURL: user.displayAvatarURL() }).setThumbnail("attachment://v.png");
      await interaction.reply({ embeds: [embed], files: [image], ephemeral: !isHelper(interaction) });
      break;
    }
    case "reality": {
      const embed = VRealityEmbed().setAuthor({ name: authorTitle(interaction), iconURL: user.displayAvatarURL() }).setThumbnail("attachment://v.png");
      await interaction.reply({ embeds: [embed], files: [image], ephemeral: !isHelper(interaction) });
      break;
    }
    case "achievements": {
      const selectedAchievement = interaction.options.getString("achievement", false);
      const tier = interaction.options.getInteger("tier", false);
      if (selectedAchievement === null) {
        const embed = VAllBasicAchievementsEmbed().setAuthor({ name: authorTitle(interaction), iconURL: user.displayAvatarURL() }).setThumbnail("attachment://v.png");
        await interaction.reply({ embeds: [embed], files: [image], ephemeral: !isHelper(interaction) });
        break;
      }
      const achievementImage = new AttachmentBuilder(`src/images/celestials/v-achievements/ach_${selectedAchievement}.png`);
      const embed = VAchievementEmbed(selectedAchievement!, tier).setAuthor({ name: authorTitle(interaction), iconURL: user.displayAvatarURL() }).setThumbnail(`attachment://ach_${selectedAchievement}.png`);
      await interaction.reply({ embeds: [embed], files: [achievementImage], ephemeral: !isHelper(interaction) });
      break;
    }
    case "unlocks": {
      const embed = VUnlocksEmbed().setAuthor({ name: authorTitle(interaction), iconURL: user.displayAvatarURL() }).setThumbnail("attachment://v.png");
      await interaction.reply({ embeds: [embed], files: [image], ephemeral: !isHelper(interaction) });
      break;
    }
  }
}