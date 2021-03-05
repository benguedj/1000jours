import * as React from 'react';
import { StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { View, Text } from '../Themed';
import Colors from '../../constants/Colors';

type TimelineStepProps = {
    title: string;
    icon: ImageSourcePropType;
    index: number;
    isTheLast: boolean;
};

const TimelineStep: React.FC<TimelineStepProps> = ({title, icon, index, isTheLast}) => {

  const getStyles=(index: number, isTheLast: boolean) =>{
    const initialOffset = 10;
    const verticalOffset = 100;
    if(index === 0) {
      return [styles.step, {marginTop: initialOffset - 50}, styles.stepLeft];
    } else {
      const marginTop = ((initialOffset - index + 1) + (verticalOffset * (index - 1))) - (isTheLast ? 50 : 0);
      return [styles.step, {marginTop: marginTop}, (index %2 === 0) ? styles.stepLeft : styles.stepRight];
    }
  };

  return (
    <View style={getStyles(index, isTheLast)}>
        <View style={[styles.stepIconContainer, styles.justifyContentCenter]}>
          <Image source={icon}/>
        </View>
        <Text style={[styles.stepTitle, isTheLast ? styles.stepLast : (index === 0) ? styles.stepFirst : null]}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    step: {
      height: 80,
      position: 'absolute',
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'transparent'
    },
    stepRight: {
      right: 0,
      flexDirection: 'row-reverse',
      textAlign: 'right',
    },
    stepLeft: {
      left: 0,
      flexDirection: 'row',
      textAlign: 'left',
    },
    stepIconContainer: {
      width: 80,
      height: 80,
      borderWidth: 1,
      borderColor: Colors.secondaryColor,
      borderRadius: 40,
    },
    justifyContentCenter: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    stepTitle: {
      color: Colors.primaryColor,
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: 13,
    },
    stepFirst: {
      paddingBottom: 60,
    },
    stepLast: {
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 80,
    },
  });

export default TimelineStep
