import * as React from "react";
import EntryCard from "./EntryCard";
import EntryData from "../model/EntryData";
import { Stack } from "@fluentui/react/lib/Stack";
import { FontWeights, Image, Text, ITextStyles } from "@fluentui/react";
import { TaxonomyLevel, TaxonomyLevels } from "../model/Taxonomy";

interface EntryCardStackProps {
  groupLevel: { level: TaxonomyLevel; value: string };
  entries: EntryData[];
}

const EntryCardStack = (props: EntryCardStackProps) => {
  const { groupLevel, entries } = props;
  const { level, value } = groupLevel;

  const parentTaxa = TaxonomyLevels.map((l) => ({
    level: l,
    values: entries
      .map((e) => e.taxonomy[l])
      .filter((value, index, self) => self.indexOf(value) === index),
  })).filter((_, index) => TaxonomyLevels.indexOf(level) > index);

  return (
    <div>
      {parentTaxa.map((t) => (
        <Text variant="mediumPlus" style={{ color: "#4C4A48" }}>{`${
          t.values.length === 1 ? t.values[0] : "..."
        } > `}</Text>
      ))}
      <span style={{ fontWeight: "bold" }}>{value}</span>
      <Stack horizontal wrap tokens={{ childrenGap: 10 }}>
        {entries.map((e) => (
          <EntryCard entry={e} />
        ))}
      </Stack>
    </div>
  );
};

export default EntryCardStack;
