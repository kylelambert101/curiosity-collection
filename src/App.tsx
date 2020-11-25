import "./App.css";
import GroupedCollection from "./collection/GroupedCollection";
import EntryData from "./collection/model/EntryData";

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
  return <GroupedCollection entries={dummyEntryData} groupLevel="class" />;
}

export default App;
