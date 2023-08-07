import {
  ApplicationCommandOptionType,
  ApplicationCommandType,
  AttachmentBuilder,
  AutocompleteInteraction,
  ChatInputCommandInteraction,
  User,
} from "discord.js";
import { SingularityMilestoneEmbed, isValidSingularityMilestoneId, singularityNameAutocomplete } from "../../utils/databases/singularitymilestones";
import { authorTitle, isHelper } from "../../functions/Misc";
import { AutocompleteCommand } from "../../command";


export const singularityMilestone: AutocompleteCommand = {
  name: "singularitymilestone",
  description: "describe the various singularity milestones",
  type: ApplicationCommandType.ChatInput,
  options: [
    {
      name: "milestone",
      description: "The milestone you want information about",
      required: true,
      type: ApplicationCommandOptionType.String,
      autocomplete: true,
    }
  ],
  autocomplete: async(interaction: AutocompleteInteraction) => {
    const focusedOption = interaction.options.getFocused(true);
    if (focusedOption.name !== "milestone") return;

    const choices = singularityNameAutocomplete(focusedOption.value);

    await interaction.respond(choices);
  },
  run: async(interaction: ChatInputCommandInteraction) => {
    if (!interaction) return;
    const user: User = interaction.member === null ? interaction.user : interaction.member.user as User;
    const image = new AttachmentBuilder("src/images/celestials/laitela.png");
    const chosenMilestone = interaction.options.getString("milestone", true).trim();

    if (!isValidSingularityMilestoneId(chosenMilestone)) {
      await interaction.reply({ content: "Invalid milestone name. Make sure to use an option from the autocomplete.", ephemeral: true });
      return;
    }

    const embed = SingularityMilestoneEmbed(chosenMilestone)
      .setThumbnail("attachment://laitela.png")
      .setAuthor({ name: authorTitle(interaction), iconURL: user.displayAvatarURL() });

    await interaction.reply({ embeds: [embed], files: [image], ephemeral: !isHelper(interaction) });
  }
};