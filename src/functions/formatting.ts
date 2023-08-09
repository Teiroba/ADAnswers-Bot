import { CommandInteraction, EmbedBuilder, User, hideLinkEmbed, hyperlink } from "discord.js";
import { Random } from "./Random";

export const EmbedWithFooter = (
  customFooter: string | undefined = undefined
) => new EmbedBuilder()
  .setTimestamp()
  .setFooter({ text: customFooter === undefined ? footerText() : customFooter, iconURL: `https://cdn.discordapp.com/attachments/351479640755404820/980696250389254195/antimatter.png` });

const footerText = () => (Random.coinflip() ? `Be sure to read the pins in your progression channel!` : `Art by @mrkrutaman`);

export function authorTitle(interaction: CommandInteraction): string {
  const user: User = interaction.member === null ? interaction.user : interaction.member.user as User;

  return authorTitleFromUser(user);
}

export function authorTitleFromUser(user: User): string {
  const hasDiscriminator: boolean = user.discriminator !== "0";

  if (hasDiscriminator) return `${user.username}#${user.discriminator}`;
  return `${user.username}`;
}

export function formatDate(month: number, day: number, year: number) {
  return `${String(month).length === 1 ? `0${month}` : `${month}`}/${String(day).length === 1 ? `0${day}` : `${day}`}/${year}`;
}

export function link(content: string, url: string) {
  return hyperlink(content, hideLinkEmbed(url));
}

// eslint-disable-next-line max-params
export function makeEnumeration<itemType>(
  items: Array<itemType>,
  separator: string = ", ",
  name: string = "",
  finalSeperator: string = "or"
) {
  if (items.length === 0) return "";
  if (items.length === 1) return `${name}${items[0]}`;
  if (items.length === 2) return `${name}${items[0]} ${finalSeperator} ${name}${items[1]}`;
  const commaSeparated = items.slice(0, items.length - 1).join(separator);
  const last = items[items.length - 1];
  return `${name}${commaSeparated}, ${finalSeperator} ${name}${last}`;
}

export function pluralise(word: string, count: number) {
  if (count === 1) {
    return word;
  }
  return `${word}s`;
}

export function quantify(word: string, count: number): string {
  return `${count} ${pluralise(word, count)}`;
}

export function toNumber(string: string) {
  const match = string.match(/^\d+/u);
  if (!match) return 0;
  return parseInt(match[0], 10);
}