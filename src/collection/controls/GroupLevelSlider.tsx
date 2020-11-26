import * as React from "react";
import { Slider, Stack } from "@fluentui/react";
import { FontWeights, Text } from "@fluentui/react";
import { convertToTitleCase } from "../../utilities/StringUtilities";
import { TaxonomyLevel, TaxonomyLevels } from "../model/Taxonomy";

interface GroupLevelSliderProps {
  selectedLevel: TaxonomyLevel;
  setSelectedLevel: (newLevel: TaxonomyLevel) => void;
}

const GroupLevelSlider = (props: GroupLevelSliderProps): React.ReactElement => {
  const { selectedLevel, setSelectedLevel } = props;

  const getValueForLevel = (level: TaxonomyLevel): number => {
    return TaxonomyLevels.indexOf(level);
  };
  const getLevelFromValue = (value: number): TaxonomyLevel => {
    return TaxonomyLevels[value];
  };

  const width = "30em";

  return (
    <>
      <div className="groupLevelSliderContainer" style={{ width }}>
        <Slider
          label="Grouping Level"
          min={0}
          max={TaxonomyLevels.length - 1}
          defaultValue={getValueForLevel(selectedLevel)}
          valueFormat={(value) => convertToTitleCase(getLevelFromValue(value))}
          showValue
          snapToStep
          onChange={(value: number) =>
            setSelectedLevel(getLevelFromValue(value))
          }
          styles={{ root: { paddingLeft: "0.1em" } }}
        />
        <Stack
          horizontal
          horizontalAlign="space-between"
          style={{ paddingLeft: "0.4em" }}
        >
          {TaxonomyLevels.map((l) => (
            <Stack.Item>
              <Text styles={{ root: { fontWeight: FontWeights.semibold } }}>
                {convertToTitleCase(l[0])}
              </Text>
            </Stack.Item>
          ))}
          <Stack.Item>&nbsp;</Stack.Item>
        </Stack>
      </div>
    </>
  );
};

export default GroupLevelSlider;
