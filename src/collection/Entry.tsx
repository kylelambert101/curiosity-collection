import * as React from "react";
import EntryData from "./model/EntryData";

interface EntryProps {
  entry: EntryData;
}

const Entry = (props: EntryProps) => {
  const { entry } = props;
  return <div style={{ border: "1px dotted black" }}>{entry.name}</div>;
};

export default Entry;
