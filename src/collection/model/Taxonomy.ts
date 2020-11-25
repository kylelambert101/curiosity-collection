export interface Taxonomy {
  kingdom: string;
  phylum?: string;
  class?: string;
  order?: string;
  family?: string;
  genus?: string;
  species?: string;
}

export type TaxonomyLevel = keyof Taxonomy;

// There may be a better way to automatically sync this with the keys of
// Taxonomy above, but this will work for now.
export const TaxonomyLevels = [
  "kingdom",
  "phylum",
  "class",
  "order",
  "family",
  "genus",
  "species",
];
