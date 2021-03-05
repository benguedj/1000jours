import * as React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { range } from 'lodash';
import { View } from '../components/Themed';
import TimelineStep from '../components/timeline/TimlineStep';
import Colors from '../constants/Colors';
import stepIcon1 from '../assets/images/OLD_icone-projet-parent.png';
import stepIcon2 from '../assets/images/OLD_Icone-conception.png';
import stepIcon3 from '../assets/images/OLD_Icone-debut-de-grossesse.png';
import stepIcon4 from '../assets/images/OLD_Icone-fin-de-grossesse.png';
import stepIcon5 from '../assets/images/OLD_Icone-accouchement.png';
import stepIcon6 from '../assets/images/OLD_Icone-4-premiers-mois.png';
import stepIcon7 from '../assets/images/OLD_Icone-4-mois-a-1-an.png';
import stepIcon8 from '../assets/images/OLD_Icone-1-a-2-ans.png';

type Step = {
  title: string,
  icon: ImageSourcePropType
}

export default function TabOneScreen() {

  const title = 'Choisissez l\'étape que vous souhaitez approfondir';
  const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  const steps: Step[] = [
    {
      title: "Projet de parentalité",
      icon: stepIcon1
    },
    {
      title: "Conception",
      icon: stepIcon2
    },
    {
      title: "Début de grossesse",
      icon: stepIcon3
    },
    {
      title: "Suite et fin de grossesse",
      icon: stepIcon4
    },
    {
      title: "Accouchement",
      icon: stepIcon5
    },
    {
      title: "Ses 3 premiers mois",
      icon: stepIcon6
    },
    {
      title: "De ses 4 mois à 1 an",
      icon: stepIcon7
    },
    {
      title: "De sa 1ère année à sa 2ème année",
      icon: stepIcon8
    },
  ];

  const numberOfStepsWithoutTheFirstAndLast = (steps.length - 1) - 2;

  return (
    <ScrollView style={[styles.mainContainer]}>
      <View>
        <Text style={[styles.title]}>{title}</Text>
        <Text style={[styles.description]}>{description}</Text>
      </View>
      <View style={[styles.timelineStepContainer]}>
        <View style={[styles.timelineContainer]}>
          <View style={[styles.timelineBlock, styles.timelineBlockRight, styles.timelineBlockFirst]} />
          {range(numberOfStepsWithoutTheFirstAndLast).map((index) =>
            <View style={[styles.timelineBlock, (index % 2 === 0) ? styles.timelineBlockLeft : styles.timelineBlockRight]} key={index} />
          )}
        </View>
        {steps.map(({ title, icon }, index) =>
          <TimelineStep title={title} icon={icon} index={index} isTheLast={(index === steps.length-1)} key={index} />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: Colors.primaryColor,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    color: Colors.tertiaryColor,
  },
  mainContainer: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'white',
  },
  timelineStepContainer: {
    marginTop: 80,
    marginBottom: 80,
    marginLeft: '5%',
    marginRight: '5%',
  },
  timelineContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  timelineBlock: {
    height: 100,
    marginTop: -1,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderColor: Colors.secondaryColor,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  timelineBlockFirst: {
    marginTop: 0,
  },
  timelineBlockRight: {
    borderRightWidth: 1,
    borderLeftWidth: 0,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    marginLeft: 75,
    marginRight: 25,
  },
  timelineBlockLeft: {
    borderRightWidth: 0,
    borderLeftWidth: 1,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    marginRight: 75,
    marginLeft: 25
  },
});
