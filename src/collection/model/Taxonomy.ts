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
