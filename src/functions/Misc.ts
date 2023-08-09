import { CommandInteraction } from "discord.js";
import { Random } from "./Random";
import { ids } from "../config.json";

export const Caesar = {
  mod: (n: number, p: number) => {
    let n2 = n;
    if (n < 0)
      n2 = p - Math.abs(n) % p;

    return n2 % p;
  },
  encrypt: (msg: string, key: number) => {
    let encMsg = "";

    const upper = msg.toUpperCase();

    for (let i = 0; i < upper.length; i++) {
      let code = upper.charCodeAt(i);

      // Encrypt only letters in 'A' ... 'Z' interval
      if (code >= 65 && code <= 65 + 26 - 1) {
        code -= 65;
        code = Caesar.mod(code + key, 26);
        code += 65;
      }

      encMsg += String.fromCharCode(code);
    }

    return encMsg;
  },
  randomKey: () => Random.randint(26),
  randomEncrypt: (msg: string) => Caesar.encrypt(msg, Caesar.randomKey())
};

export function getBaseLog(x: number, y: number): number {
  return Math.log(y) / Math.log(x);
}

export function isEligibleForHelper(interaction: CommandInteraction): boolean {
  const roles = interaction.guild?.members.resolve(interaction.user)?.roles.cache;
  const eligibleRoles = ids.rolesGreaterThanOrEqualToInfinityDimension;
  const eligible = roles?.some(role => eligibleRoles.includes(role.id));
  return eligible as boolean;
}

export function isHelper(interaction: CommandInteraction): boolean | undefined {
  if (!interaction.inGuild()) return true;
  // Now that's an expression!
  return interaction.guild?.members.resolve(interaction.user)?.roles.cache.has(ids.AD.requestableRoles.helperRole);
}


export function range(start: number, stop?: number, step?: number) {
  let realStart = start;
  const realStop = stop ?? start;
  const realStep = step ?? 1;
  if (realStop === realStart) {
    realStart = 0;
  }

  if ((realStep > 0 && realStart >= realStop) || (realStep < 0 && realStart <= realStop)) {
    return [];
  }

  const result = [];
  for (let i = realStart; realStep > 0 ? i < realStop : i > realStop; i += realStep) {
    result.push(i);
  }

  return result;
}