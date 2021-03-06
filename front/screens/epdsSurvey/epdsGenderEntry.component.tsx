import { range } from "lodash";
import * as React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";

import { TitleH1 } from "../../components";
import Button from "../../components/base/button.component";
import Checkbox from "../../components/base/checkbox.component";
import { CommonText } from "../../components/StyledText";
import { View } from "../../components/Themed";
import {
  Colors,
  FontWeight,
  Labels,
  Margins,
  Paddings,
  Sizes,
  StorageKeysConstants,
} from "../../constants";
import type { EpdsGenderType } from "../../type";
import { EpdsGenders } from "../../type";
import { StorageUtils } from "../../utils";

interface EpdsGenderEntryProps {
  goToEpdsSurvey: () => void;
}

const EpdsGenderEntry: React.FC<EpdsGenderEntryProps> = ({
  goToEpdsSurvey,
}) => {
  const gendersArray: EpdsGenderType[] = range(
    Object.keys(EpdsGenders).length
  ).map((index) => {
    return {
      element: {
        label: EpdsGenders[index].label,
        value: EpdsGenders[index].value,
      },
      id: index,
      isChecked: false,
    };
  });

  const [epdsGenders, setEpdsGenders] =
    useState<EpdsGenderType[]>(gendersArray);
  const [selectedGender, setSelectedGender] = useState<string | undefined>();
  const [genderIsSelected, setGenderIsSelected] = useState(false);

  const updateGendersArray = (epdsGender: EpdsGenderType) => {
    setEpdsGenders(() => {
      return gendersArray.map((item) => {
        if (item.id === epdsGender.id) {
          setSelectedGender(epdsGender.element.value);
          setGenderIsSelected(true);
          return { ...item, isChecked: !epdsGender.isChecked };
        } else {
          return item;
        }
      });
    });
  };

  const onGenderSaved = async () => {
    if (selectedGender) {
      await StorageUtils.storeStringValue(
        StorageKeysConstants.epdsGenderKey,
        selectedGender
      );
      goToEpdsSurvey();
    }
  };

  return (
    <View style={styles.mainContainer}>
      <TitleH1
        title={`${Labels.epdsSurvey.genderEntry.titleInformation} : ${Labels.epdsSurvey.title}`}
        animated={false}
      />
      <View>
        <CommonText style={styles.instruction}>
          {Labels.epdsSurvey.genderEntry.instruction}
        </CommonText>
        <View style={styles.answers}>
          {epdsGenders.map((genderElement, index) => (
            <View key={index}>
              <Checkbox
                title={genderElement.element.label}
                checked={genderElement.isChecked}
                labelSize={Sizes.xs}
                onPress={() => {
                  updateGendersArray(genderElement);
                }}
              />
            </View>
          ))}
        </View>
      </View>
      <View style={styles.validateButton}>
        <Button
          title={Labels.buttons.validate}
          rounded={true}
          disabled={!genderIsSelected}
          action={onGenderSaved}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  answers: {
    paddingHorizontal: Paddings.largest,
  },
  instruction: {
    color: Colors.primaryBlueDark,
    fontSize: Sizes.sm,
    fontWeight: FontWeight.medium,
    paddingHorizontal: Paddings.largest,
    paddingVertical: Paddings.default,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "space-between",
    margin: Margins.default,
  },
  validateButton: {
    alignItems: "center",
    marginTop: Margins.larger,
  },
});

export default EpdsGenderEntry;
