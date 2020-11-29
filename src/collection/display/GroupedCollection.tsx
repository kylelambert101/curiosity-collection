import { Stack } from "@fluentui/react/lib/Stack";
import * as React from "react";
import EntryCardStack from "./EntryCardStack";
import EntryData from "../model/EntryData";
import EntryDataGroup from "../model/EntryDataGroup";
import { TaxonomyLevel } from "../model/Taxonomy";

interface GroupedCollectionProps {
  entries: EntryData[];
  groupLevel: TaxonomyLevel;
}

const GroupedCollection = (
  props: GroupedCollectionProps
): React.ReactElement => {
  const { entries, groupLevel } = props;

  // Get unique entry values for that group and bundle associated entries
  const groups: EntryDataGroup[] = entries
    .map((e) => e.taxonomy[groupLevel])
    .filter((value, index, self) => self.indexOf(value) === index)
    .map((g) => ({
      groupName: g || "Not Specified",
      entries: entries.filter((e) => e.taxonomy[groupLevel] === g),
    }));

  return (
    <Stack tokens={{ childrenGap: 10 }}>
      {groups.map((g) => (
        <EntryCardStack
          entries={g.entries}
          groupLevel={{ value: g.groupName, level: groupLevel }}
        />
      ))}
    </Stack>
  );
};

export default GroupedCollection;
