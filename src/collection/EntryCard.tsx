import * as React from "react";
import { Card } from "@uifabric/react-cards";
import { FontWeights, Image, Text, ITextStyles } from "@fluentui/react";
import EntryData from "./model/EntryData";

interface EntryCardProps {
  entry: EntryData;
}

const EntryCard = (props: EntryCardProps) => {
  const { entry } = props;

  const siteTextStyles: ITextStyles = {
    root: {
      color: "#025F52",
      fontWeight: FontWeights.semibold,
    },
  };
  const descriptionTextStyles: ITextStyles = {
    root: {
      color: "#333333",
      fontWeight: FontWeights.regular,
    },
  };

  return (
    <Card
      aria-label="Clickable horizontal card "
      horizontal
      onClick={() => {
        console.log("Clicked");
      }}
      tokens={{ childrenMargin: 12 }}
    >
      <Card.Item fill>
        <Image src="https://placehold.it/180x135" alt="Placeholder image." />
      </Card.Item>
      <Card.Section>
        <Text variant="medium" styles={siteTextStyles}>
          {entry.name}
        </Text>
        <Text styles={descriptionTextStyles}>
          <pre id="json">{JSON.stringify(entry.taxonomy, undefined, 2)}</pre>
        </Text>
      </Card.Section>
    </Card>
  );
};

export default EntryCard;
