import "./App.css";
import GroupedCollection from "./collection/GroupedCollection";
import EntryDataGroup from "./collection/model/EntryDataGroup";

function App() {
  const dummyEntryData: EntryDataGroup[] = [
    {
      groupName: "Arachnids",
      entries: [{ name: "Spider" }, { name: "Scorpion" }],
    },
    { groupName: "Birds", entries: [{ name: "Hawk" }, { name: "Bluejay" }] },
    { groupName: "Reptiles", entries: [{ name: "Turtle" }] },
  ];
  return <GroupedCollection entryDataGroups={dummyEntryData} />;
}

export default App;
