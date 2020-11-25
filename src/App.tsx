import * as React from "react";
import {
  Dropdown,
  getId,
  IDropdownOption,
  Label,
  Stack,
} from "@fluentui/react";
import "./App.css";
import GroupedCollection from "./collection/GroupedCollection";
import EntryData from "./collection/model/EntryData";
import { TaxonomyLevel, TaxonomyLevels } from "./collection/model/Taxonomy";

function App() {
  const dummyEntryData: EntryData[] = [
    {
      name: "Spider",
      taxonomy: {
        kingdom: "Animalia",
        phylum: "Arthropoda",
        class: "Arachnida",
        order: "Araneae",
      },
    },
    {
      name: "Scorpion",
      taxonomy: {
        kingdom: "Animalia",
        phylum: "Arthropoda",
        class: "Arachnida",
        order: "Scorpiones",
      },
    },
    {
      name: "Hawk",
      taxonomy: {
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Aves",
        order: "Accipitriformes",
        family: "Accipitridae",
      },
    },
    {
      name: "Bluejay",
      taxonomy: {
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Aves",
        order: "Passeriformes",
        family: "Corvidae",
        genus: "Cyanocitta",
        species: "cristata",
      },
    },
    {
      name: "Chickadee",
      taxonomy: {
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Aves",
        order: "Passeriformes",
        family: "Paridae",
        genus: "Poecile",
      },
    },
    {
      name: "Turtle",
      taxonomy: {
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Reptilia",
        order: "Testudines",
      },
    },
  ];

  const [selectedItem, setSelectedItem] = React.useState<IDropdownOption>();

  const onChange = (
    event: React.FormEvent<HTMLDivElement>,
    item?: IDropdownOption
  ): void => {
    setSelectedItem(item);
  };

  const levelDropdownId = getId("levelDropdown");

  return (
    <>
      <Stack horizontal tokens={{ childrenGap: 10 }}>
        <Label htmlFor={levelDropdownId}>Grouping Level:</Label>
        <Dropdown
          key={levelDropdownId}
          selectedKey={selectedItem ? selectedItem.key : undefined}
          options={TaxonomyLevels.map((level) => ({ key: level, text: level }))}
          style={{ width: 300 }}
          onChange={onChange}
        />
      </Stack>
      <GroupedCollection
        entries={dummyEntryData}
        groupLevel={(selectedItem?.text || "kingdom") as TaxonomyLevel}
      />
    </>
  );
}

export default App;
