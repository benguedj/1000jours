import type { StackNavigationProp } from "@react-navigation/stack";
import { range } from "lodash";
import type { FC } from "react";
import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import StepIcon8 from "../assets/images/Icone 1 à 2 ans.svg";
import StepIcon7 from "../assets/images/Icone 4 mois à 1 an.svg";
import StepIcon6 from "../assets/images/Icone 4 premiers mois.svg";
import StepIcon5 from "../assets/images/Icone accouchement.svg";
import StepIcon2 from "../assets/images/Icone conception.svg";
import StepIcon3 from "../assets/images/Icone début de grossesse.svg";
import StepIcon4 from "../assets/images/Icone fin de grossesse.svg";
import StepIcon1 from "../assets/images/icone projet parent.svg";
import { View } from "../components/Themed";
import TimelineStep from "../components/timeline/TimlineStep";
import Colors from "../constants/Colors";
import type { TabHomeParamList } from "../types";

interface Step {
  title: string;
  icon: React.ReactNode;
}

interface Props {
  navigation: StackNavigationProp<TabHomeParamList, "listArticles">;
}

const TabHomeScreen: FC<Props> = ({ navigation }) => {
  const screenTitle = "Choisissez l'étape que vous souhaitez approfondir";
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  const steps: Step[] = [
    {
      icon: <StepIcon1 />,
      title: "Projet de parentalité",
    },
    {
      icon: <StepIcon2 />,
      title: "Conception",
    },
    {
      icon: <StepIcon3 />,
      title: "Début de grossesse",
    },
    {
      icon: <StepIcon4 />,
      title: "Suite et fin de grossesse",
    },
    {
      icon: <StepIcon5 />,
      title: "Accouchement",
    },
    {
      icon: <StepIcon6 />,
      title: "Ses 3 premiers mois",
    },
    {
      icon: <StepIcon7 />,
      title: "De ses 4 mois à 1 an",
    },
    {
      icon: <StepIcon8 />,
      title: "De sa 1ère année à sa 2ème année",
    },
  ];

  const numberOfStepsWithoutTheFirstAndLast = steps.length - 1 - 2;

  return (
    <ScrollView style={[styles.mainContainer]}>
      <View>
        <Text style={[styles.title]}>{screenTitle}</Text>
        <Text style={[styles.description]}>{description}</Text>
      </View>
      <View style={[styles.timelineStepContainer]}>
        <View style={[styles.timelineContainer]}>
          <View
            style={[
              styles.timelineBlock,
              styles.timelineBlockRight,
              styles.timelineBlockFirst,
            ]}
          />
          {range(numberOfStepsWithoutTheFirstAndLast).map((index) => (
            <View
              style={[
                styles.timelineBlock,
                index % 2 === 0
                  ? styles.timelineBlockLeft
                  : styles.timelineBlockRight,
              ]}
              key={index}
            />
          ))}
        </View>
        {steps.map(({ title, icon }, index) => (
          <TimelineStep
            title={title}
            icon={icon}
            index={index}
            isTheLast={index === steps.length - 1}
            key={index}
            onPress={() => {
              navigation.navigate("listArticles");
            }}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  description: {
    color: Colors.commonText,
  },
  mainContainer: {
    backgroundColor: "white",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
  },
  timelineBlock: {
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    borderColor: Colors.primaryYellow,
    borderStyle: "solid",
    borderTopWidth: 1,
    height: 100,
    marginTop: -1,
  },
  timelineBlockFirst: {
    marginTop: 0,
  },
  timelineBlockLeft: {
    borderBottomLeftRadius: 50,
    borderLeftWidth: 1,
    borderRightWidth: 0,
    borderTopLeftRadius: 50,
    marginLeft: 25,
    marginRight: 75,
  },
  timelineBlockRight: {
    borderBottomRightRadius: 50,
    borderLeftWidth: 0,
    borderRightWidth: 1,
    borderTopRightRadius: 50,
    marginLeft: 75,
    marginRight: 25,
  },
  timelineContainer: {
    flex: 1,
    flexDirection: "column",
  },
  timelineStepContainer: {
    marginBottom: 80,
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: 80,
  },
  title: {
    color: Colors.primaryBlue,
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default TabHomeScreen;
