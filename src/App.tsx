import * as React from "react";
import { Stack } from "@fluentui/react";
import "./App.css";
import GroupedCollection from "./collection/display/GroupedCollection";
import EntryData from "./collection/model/EntryData";
import { TaxonomyLevel } from "./collection/model/Taxonomy";
import GroupLevelSlider from "./collection/controls/GroupLevelSlider";

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

  const [
    selectedGroupLevel,
    setSelectedGroupLevel,
  ] = React.useState<TaxonomyLevel>("kingdom");

  return (
    <>
      <Stack horizontal tokens={{ childrenGap: 10 }}>
        <GroupLevelSlider
          selectedLevel={selectedGroupLevel}
          setSelectedLevel={setSelectedGroupLevel}
        />
      </Stack>
      <GroupedCollection
        entries={dummyEntryData}
        groupLevel={selectedGroupLevel}
      />
    </>
  );
}

export default App;
