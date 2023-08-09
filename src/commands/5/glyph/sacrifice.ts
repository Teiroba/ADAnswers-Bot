import { AttachmentBuilder, ChatInputCommandInteraction, EmbedBuilder, User } from "discord.js";
import { GlyphEmbedGetter, basicGlyphs, specialGlyphs } from "../../../utils/databases/glyphs";
import { authorTitle } from "../../../functions/formatting";
import { ids } from "../../../config.json";
import { isHelper } from "../../../functions/Misc";

export async function sacrificeGlyphSubcommand(interaction: ChatInputCommandInteraction): Promise<void> {
  const user: User = interaction.member === null ? interaction.user : interaction.member.user as User;
  const isADServer: boolean = (interaction.guildId === ids.AD.serverID);

  const glyphName: string = interaction.options.getString("glyph") as string;
  const hasSacrificeImage: boolean = ["dilation", "effarig", "infinity", "power", "reality", "replication", "time"].includes(glyphName);

  let picture: AttachmentBuilder = new AttachmentBuilder(`src/images/glyphs/sacrificed/${glyphName}.png`);
  if (!hasSacrificeImage) picture = new AttachmentBuilder(`src/images/glyphs/${glyphName}.png`);
  const imageLink: string = `attachment://${glyphName}.png`;
  const glyphRequested = basicGlyphs[glyphName] ?? specialGlyphs[glyphName];

  const embed: EmbedBuilder = GlyphEmbedGetter(glyphRequested, isADServer, false, true);
  embed.setAuthor({ name: authorTitle(interaction), iconURL: user.displayAvatarURL() })
    .setThumbnail(imageLink);

  await interaction.reply({ embeds: [embed], files: [picture], ephemeral: !isHelper(interaction) });
}