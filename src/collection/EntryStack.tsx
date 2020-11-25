import * as React from "react";
import Entry from "./Entry";
import EntryData from "./model/EntryData";
import { Stack } from "@fluentui/react/lib/Stack";

interface EntryStackProps {
  header: string;
  entries: EntryData[];
}

const EntryStack = (props: EntryStackProps) => {
  const { header, entries } = props;
  return (
    <div>
      <span style={{ fontWeight: "bold" }}>{header}</span>
      <Stack horizontal tokens={{ childrenGap: 10 }}>
        {entries.map((e) => (
          <Entry entry={e} />
        ))}
      </Stack>
    </div>
  );
};

export default EntryStack;
