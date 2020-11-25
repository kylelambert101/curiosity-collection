import { Stack } from "@fluentui/react/lib/Stack";
import * as React from "react";
import EntryStack from "./EntryStack";
import EntryDataGroup from "./model/EntryDataGroup";

interface GroupedCollectionProps {
  entryDataGroups: EntryDataGroup[];
}

const GroupedCollection = (
  props: GroupedCollectionProps
): React.ReactElement => {
  const { entryDataGroups: groups } = props;
  return (
    <Stack tokens={{ childrenGap: 10 }}>
      {groups.map((g) => (
        <EntryStack entries={g.entries} header={g.groupName} />
      ))}
    </Stack>
  );
};

export default GroupedCollection;
