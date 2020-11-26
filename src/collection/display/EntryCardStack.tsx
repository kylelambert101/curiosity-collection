import * as React from "react";
import EntryCard from "./EntryCard";
import EntryData from "../model/EntryData";
import { Stack } from "@fluentui/react/lib/Stack";

interface EntryCardStackProps {
  header: string;
  entries: EntryData[];
}

const EntryCardStack = (props: EntryCardStackProps) => {
  const { header, entries } = props;
  return (
    <div>
      <span style={{ fontWeight: "bold" }}>{header}</span>
      <Stack horizontal wrap tokens={{ childrenGap: 10 }}>
        {entries.map((e) => (
          <EntryCard entry={e} />
        ))}
      </Stack>
    </div>
  );
};

export default EntryCardStack;
