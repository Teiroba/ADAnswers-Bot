import { EmbedBuilder, EmbedField } from "discord.js";
import { SingularityData, SingularityMilestone, SingularityMilestoneBoosts } from "../types";
import { Colour } from "../colours";
import { EmbedWithFooter } from "../../functions/Misc";
import { format } from "../format";

const AUTOCOMPLETE_MAX_ITEMS = 20;

// Not really sure how the Autocomplete is implemented, but I stole it from mdn.
export function singularityNameAutocomplete(value: string): { name: string, value: string }[] {
  const candidates: SingularityData = [];

  for (const entry of SingularityMilestones) {
    const lowercaseTitle = entry.id.toLowerCase();
    if (lowercaseTitle.includes(value)) {
      candidates.push(entry);
    }
  }

  return candidates
    .sort((a, b) => a.initialCost - b.initialCost)
    .map(x => ({ name: x.name, value: x.id }))
    .slice(0, AUTOCOMPLETE_MAX_ITEMS - 1);
}

const getSingularityMilestone = (value: string) => SingularityMilestones.filter(x => x.id.includes(value));

export function isValidSingularityMilestoneId(value: string): boolean {
  // Console.log(value);
  // console.log(SingularityMilestones[0].id);
  // console.log(getSingularityMilestone(value));
  return getSingularityMilestone(value).length === 1;
}

function getFieldsForMilestone(milestone: SingularityMilestone) {
  const fields: EmbedField[] = [];
  fields.push({ name: " ", value: milestone.effect, inline: false });
  if (milestone.formula) fields.push({ name: "Formula", value: milestone.formula, inline: false });

  let cost = `${format(milestone.initialCost)} singularities`;
  if (milestone.scalingCost) {
    cost += `, increasing by ${format(milestone.scalingCost)}x per completion`;
    if (milestone.cap) {
      cost += ` and capping after ${milestone.cap} completions`;
    } else if (milestone.softcap) {
      cost += `, softcapping after ${milestone.softcap} completions (subsequent completions count as 1/3 completion each)`;
    }
    cost += ".";
  }
  fields.push({ name: "Cost", value: cost, inline: false });

  return fields;
}

export function SingularityMilestoneEmbed(id: string): EmbedBuilder {
  const milestone = getSingularityMilestone(id)[0];
  return EmbedWithFooter()
    .setTitle(milestone.name)
    .setColor(Colour.laitela)
    .addFields(getFieldsForMilestone(milestone));
}

export const SingularityMilestones: SingularityData = [
  {
    id: "continuumMult",
    name: "Continuum Multiplier",
    effect: "Directly multiply the increase to Continuum from DmDs.",
    formula: "x`1 + 0.03 * completions`",
    direction: SingularityMilestoneBoosts.GAME,
    initialCost: 1,
    scalingCost: 125,
    softcap: 20,
  },
  {
    id: "darkMatterMult",
    name: "Dark Matter Production Multiplier",
    effect: "Multiply the Dark Matter production of all DmDs.",
    formula: "x`1.5 ^ completions`",
    direction: SingularityMilestoneBoosts.SELF,
    initialCost: 2,
    scalingCost: 20,
    softcap: 30,
  },
  {
    id: "darkEnergyMult",
    name: "Dark Energy Production Multiplier",
    effect: "Multiply the Dark Energy production of all DmDs.",
    formula: "x`2 ^ completions`",
    direction: SingularityMilestoneBoosts.SELF,
    initialCost: 3,
    scalingCost: 120,
    softcap: 10,
  },
  {
    id: "dmdCostReduction",
    name: "Dark Matter Dimension Cost Reduction",
    effect: "Dark Matter Dimension upgrades are cheaper.",
    formula: "x 1 / `2.5 ^ completions`",
    direction: SingularityMilestoneBoosts.SELF,
    initialCost: 4,
    scalingCost: 40,
    softcap: 25,
  },
  {
    id: "singularityMult",
    name: "Singularity Multiplier",
    effect: "Multiply Singularity gain when condensing.",
    formula: "x`2 ^ completions`",
    direction: SingularityMilestoneBoosts.SELF,
    initialCost: 50,
    scalingCost: 3000,
    softcap: 5,
  },
  {
    id: "dmdIntervalDecrease",
    name: "Dark Matter Dimension Interval Decrease",
    effect: "Reduce the interval of all Dark Matter Dimensions.",
    formula: "x`0.6 ^ completions`",
    direction: SingularityMilestoneBoosts.SELF,
    initialCost: 10,
    scalingCost: 100,
    softcap: 20,
  },
  {
    id: "improvedAscensionDM",
    name: "Dark Matter Dimension Ascension production improvement",
    effect: "Ascension multiplies Dark Matter Dimensions' Dark Matter production more.",
    formula: "x`500` --> x`500 + 100 * completions`",
    direction: SingularityMilestoneBoosts.SELF,
    initialCost: 2e5,
    scalingCost: 4000,
    softcap: 15,
  },

  {
    id: "ascensionIntervalScaling",
    name: "Dark Matter Dimension Ascension Interval Scaling",
    effect: "Reduce the effect of ascension on Dark Matter Dimensions' interval.",
    formula: "x`1200` --> x`1200 - 50 * completions`",
    direction: SingularityMilestoneBoosts.SELF,
    initialCost: 1.2e5,
    scalingCost: 4000,
    cap: 8,
  },
  {
    id: "autoCondense",
    name: "Automatically Condense Singularities",
    effect: `
Automatically Condense Dark Energy for Singularities when Dark Energy reaches a threshold value that is some multiplier of the amount required to condense manually.
- Level 1: 1.30x cap
- Level 2: 1.22x cap
- Level 3: 1.15x cap
- Level 4: 1.10x cap
- Level 5: 1.06x cap
- Level 6: 1.03x cap
- Level 7: 1.01x cap
- Level 8: Immediately after reaching cap`,
    direction: SingularityMilestoneBoosts.SELF,
    initialCost: 8,
    scalingCost: 80,
    cap: 8,
  },
  {
    id: "dmdAutobuyers",
    name: "Dark Matter Dimension Autobuyers",
    // eslint-disable-next-line max-len
    effect: "Automatically upgrade the Interval, Dark Matter production, and Dark Energy production of all dimensions up to DmD `completion`. Does not automatically ascend. Interval is determined by the Dark Matter Dimension Autobuyer Speed milestone.",
    direction: SingularityMilestoneBoosts.SELF,
    initialCost: 30,
    scalingCost: 170,
    cap: 4,
  },
  {
    id: "ascensionAutobuyers",
    name: "Dark Matter Dimension Ascension Autobuyers",
    effect: "Automatically Ascend Dark Matter Dimensions up to DmD `completion` when the interval reaches 50ms. Interval is determined by the Dark Matter Dimension autobuyer Speed milestone.",
    direction: SingularityMilestoneBoosts.SELF,
    initialCost: 1e8,
    scalingCost: 140,
    cap: 4,
  },
  {
    id: "dmdAutobuyerSpeed",
    name: "Dark Matter Dimension Autobuyer Speed",
    effect: `
Reduce the interval of Dark Matter Dimension automation.
- Level 0: Every 30 seconds.
- Level 1: Every 20 seconds.
- Level 2: Every 15 seconds.
- Level 3: Every 10 seconds.
- Level 4: Every 5 seconds.
- Level 5: Every 3 seconds.
- Level 6: Every 2 seconds.
- Level 7: Every 1 seconds.
- Level 8: Instantly / Without delay.`,
    direction: SingularityMilestoneBoosts.SELF,
    initialCost: 45,
    scalingCost: 650,
    cap: 8,
  },
  {
    id: "realityEnergyMultiplier",
    name: "Lai'tela's Reality Dark Energy Multiplier",
    effect: `Multiply Dark Energy production based on the number of disabled Dimensions in Lai'tela's Reality.`,
    formula: "x`(1 + 0.05 * completions) ^ (disabled Dimensions)`",
    direction: SingularityMilestoneBoosts.SELF,
    initialCost: 1500,
    scalingCost: 1e4,
    cap: 6,
  },
  {
    id: "improvedSingularityCap",
    name: "Improved Singularity Cap scaling",
    effect: "Increase the multiplier to Singularity gain per increase in Dark Energy requirement to condense.",
    formula: "x`11` --> x`11 + completions`",
    direction: SingularityMilestoneBoosts.SELF,
    initialCost: 150,
    scalingCost: 1e4,
    cap: 4,
  },
  {
    id: "intervalCostScalingReduction",
    name: "Interval Cost Scaling Reduction",
    effect: "Reduce the cost scaling of Dark Matter Dimensions' interval upgrades, by raising the cost scaling factor to a power.",
    formula: "^`(1 - 0.03 * completions)`",
    direction: SingularityMilestoneBoosts.SELF,
    initialCost: 1.3e5,
    scalingCost: 5e4,
    cap: 5,
  },

  {
    id: "multiplierFromTesseracts",
    name: "Dark Matter Dimension multiplier from Tesseracts",
    effect: "Multiply Dark Matter and Dark Energy production based on Tesseracts.",
    formula: "x`1.1 ^ tesseracts`",
    direction: SingularityMilestoneBoosts.LAITELA,
    initialCost: 80,
  },
  {
    id: "multiplierFromInfinities",
    name: "Dark Matter Dimension multiplier from Infinites",
    effect: "Multiply Dark Matter and Dark Energy production based on current Infinities count",
    formula: "x`log(infinities) / 1000`, minimum 1",
    direction: SingularityMilestoneBoosts.LAITELA,
    initialCost: 3000
  },
  {
    id: "multiplierToDilatedTime",
    name: "Dilated Time multiplier from Singularities",
    effect: "Singularities improve the repeatable Dilated Time multiplier upgrade.",
    formula: "x`2` --> x`2 * (1 + log(singularities) / 100)`, capped at x`2.35`",
    direction: SingularityMilestoneBoosts.GAME,
    initialCost: 8e4,
  },
  {
    id: "multiplierFromGlyphLevel",
    name: "Dark Matter Dimension multiplier from Glyph Level",
    effect: "Multiply Dark Matter and Dark Energy production based on the highest-ever Glyph Level.",
    formula: "x`sqrt((best level - 15000) / 2000)`, minimum 1",
    direction: SingularityMilestoneBoosts.LAITELA,
    initialCost: 3e6,
  },
  {
    id: "multiplierToGameSpeed",
    name: "Game Speed multiplier from Singularities",
    effect: "Multiply Game Speed based on Singularity count.",
    formula: "x`log(singularities) ^ 3`, minimum 1",
    direction: SingularityMilestoneBoosts.GAME,
    initialCost: 8e7,
  },
  {
    id: "multiplierFromTheorems",
    name: "Dark Matter Dimension multiplier from Theorems",
    effect: "Multiply Dark Matter and Dark Energy production based on current Time Theorem count",
    formula: "x`sqrt((log(TT) - 1000) / 50)`",
    direction: SingularityMilestoneBoosts.LAITELA,
    initialCost: 3e9,
  },
  {
    id: "dimensionsFromAnnhiliation",
    name: "Dimensions Generation from Annhiliation multiplier",
    effect: "While it is possible to Annhiliate Dark Matter Dimensions, generate 4th Dark Matter Dimensions per second based on current Annhiliation multiplier.",
    formula: "+`multiplier` per second",
    direction: SingularityMilestoneBoosts.SELF,
    initialCost: 5e11,
  },
  {
    id: "multiplierFromDimension4",
    name: "Dark Matter Dimension multiplier from 4th DmDs",
    effect: "Multiply Dark Matter and Dark Energy production based on current 4th DmD amount.",
    formula: "x`(4th DmDs) ^ 0.03`, minimum 1",
    direction: SingularityMilestoneBoosts.SELF,
    initialCost: 5e12,
  },
  {
    id: "annhiliationAutobuyer",
    name: "Annhiliation Autobuyer",
    effect: "Unlock an autobuyer for Annhiliation. This autobuyer will trigger whenever the annhiliation multiplier gain exceeds some preset value.",
    direction: SingularityMilestoneBoosts.SELF,
    initialCost: 4e18,
  },
  {
    id: "powerToTheorems",
    name: "Time Theorem Power Effect from Singularities",
    effect: "Raise Time Theorem generation to a power based on singularity count.",
    formula: "^`1 + log(singularities) / 70`",
    direction: SingularityMilestoneBoosts.GAME,
    initialCost: 3e21,
  },
  {
    id: "multiplierFromGameSpeed",
    name: "Dark Matter Dimension Multiplier from Game Speed",
    effect: "Multiply Dark Matter and Dark Energy production based on current Game Speed.",
    formula: "x`log(game speed multiplier) / 40 - 3`, minimum 1",
    direction: SingularityMilestoneBoosts.LAITELA,
    initialCost: 8e22,
  },
  {
    id: "multiplierToGlyphLevel",
    name: "Glyph Level multiplier from Singularities",
    effect: "Multiply Glyph Level based on Singularity count. Multiplier applies after Glyph level factors *and* boost from Relic Shard gain, but before Glyph Instability.",
    formula: "x`(log(singularities) - 20) / 30`, minimum 1",
    direction: SingularityMilestoneBoosts.GAME,
    initialCost: 3e24,
  },
  {
    id: "multiplierFromDilatedTime",
    name: "Dark Matter Dimension multiplier from Dilated Time",
    effect: "Multiply Dark Matter and Dark Energy production based on current Dilated Time amount.",
    formula: "x`1.6 ^ (log(DT) / 1000)`",
    direction: SingularityMilestoneBoosts.LAITELA,
    initialCost: 3e38,
  },
  {
    id: "multiplierToTesseractCount",
    name: "Multiplier to Effective Tesseract Count",
    // eslint-disable-next-line max-len
    effect: `Increase the number of "effective" Tesseracts you have, based on Singularities. This, loosely speaking, gives you several free Tesseracts, immensely boosting the number of Infinity Dimension purchases you can make.\nThis also gives you achievement 177 ("This Mile took a Celestial), as this is the most expensive and therefore last Singularity Milestone that you will complete.`,
    formula: "x`1 + log(singularities) / 80`",
    direction: SingularityMilestoneBoosts.GAME,
    initialCost: 2.5e45,
  }
];