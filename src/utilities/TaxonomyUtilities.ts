import EntryData from "../collection/model/EntryData";
import { TaxonomyLevel, TaxonomyLevels } from "../collection/model/Taxonomy";

export const getEntriesSortedByTaxonomy = (
  entries: EntryData[]
): EntryData[] => {
  // Start by getting a list of unique keys for each level ranked by frequency
  const levelRanks = TaxonomyLevels.map((level) => {
    const allKeysForLevel = entries.map((entry) =>
      getLevelKeyFromEntry(entry, level)
    );
    const sortedKeysForLevel = allKeysForLevel
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort((key1, key2) => {
        const key1_freq = allKeysForLevel.filter((k) => k === key1).length;
        const key2_freq = allKeysForLevel.filter((k) => k === key2).length;

        // First try comparing by frequency
        if (key1_freq !== key2_freq) {
          return key1_freq > key2_freq ? 1 : -1;
        } else {
          // If frequency is the same, sort alphabetically
          return key1 > key2 ? 1 : -1;
        }
      });
    return {
      levelName: level,
      rankedValues: sortedKeysForLevel,
    };
  });

  return entries.sort((e1, e2) => {
    TaxonomyLevels.forEach((level, levelIndex) => {
      const e1_key = getLevelKeyFromEntry(e1, level);
      const e2_key = getLevelKeyFromEntry(e2, level);
      if (e1_key !== e2_key) {
        // If keys for this level are different, compare their ranks
        const levelRank = levelRanks.find((l) => l.levelName === level);
        const e1_key_rank = levelRank?.rankedValues.indexOf(e1_key);
        const e2_key_rank = levelRank?.rankedValues.indexOf(e2_key);
        // Ranks should both be defined here. If they are not, there's a problem.
        return e1_key_rank! > e2_key_rank! ? 1 : -1;
      }
    });
    // If we've gotten this far, the full taxonomies are identical. Sort by name instead.
    return e1.name > e2.name ? 1 : -1;
  });
};

/**
 * Get the taxonomic "key" for an entry at the specified target level, represented by an
 * underscore-concatenated list of the entries taxonomy values at and above the target level.
 * e.g. a class key for an insect would be "animalia_arthropoda_insecta"
 * @param entry
 * @param targetLevel
 */
export const getLevelKeyFromEntry = (
  entry: EntryData,
  targetLevel: TaxonomyLevel
): string => {
  return TaxonomyLevels.reduce((key, _, index) => {
    return `${key}${
      index > TaxonomyLevels.indexOf(targetLevel)
        ? ""
        : `_${entry.taxonomy[targetLevel]}`
    }`;
  }, "");
};

// export const getTaxonomyTreeFromEntries = (
//   entries: EntryData[],
//   startingLevel: TaxonomyLevel
// ) => {
//   // Get unique values for each level recursizely,
//   // Use the getUniqueLevelValues function for each one and then give it
//   // a subset of entries as you get more specific.

//   return getUniqueLevelValues(entries, startingLevel).reduce(
//     (tree, currentValue) => {
//       const level = startingLevel; //kingdom
//       const levelIndex = TaxonomyLevels.indexOf(level);// 0
//       const value = currentValue; //Animalia
//       if (TaxonomyLevels.length > levelIndex + 1) {
//         // There are still levels to explore
//         const nextLevel = TaxonomyLevels[levelIndex + 1];
//         const children = getUniqueLevelValues(
//           entries.filter((e) => e.taxonomy[level] === value),
//           nextLevel
//         );
//         tree[]
//       } else {
//         // we have reached the end of the tree - start returning
//       }
//     },
//     {}
//   );
// };

export const getUniqueLevelValues = (
  entries: EntryData[],
  level: TaxonomyLevel
): string[] => {
  return (
    entries
      // Pull values for the specified level out of the entry taxonomies
      // TODO I should add some kind of case-mapping so animalia == Animalia
      .map((e) => e.taxonomy[level] || "Not Specified")
      // Filter to unique values
      .filter((value, index, self) => self.indexOf(value) === index)
      // Sort by relative frequency in the entries list
      .sort((a, b) =>
        entries.filter((e) => e.taxonomy[level] === a).length >
        entries.filter((e) => e.taxonomy[level] === b).length
          ? 1
          : -1
      )
  );
};
