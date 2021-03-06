import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '../Themed';
import Colors from '../../constants/Colors';

type ButtonProps = {
    title: string;
    rounded: boolean;
    disabled: boolean;
    action: () => void;
};

const getStyle = (rounded: boolean, disabled: boolean) => {
  return [
    styles.normalButton,
    rounded ? styles.roundedButton : null,
    disabled ? styles.disabledButton : null,
  ];
}

const Button: React.FC<ButtonProps> = ({title, rounded, disabled, action}) => {

  return (
    <TouchableOpacity disabled={disabled} style={ getStyle(rounded, disabled) } onPress={action}>
      <Text style={ rounded ? styles.roundedButtonText : styles.normalButtonText }>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  normalButton: {
    padding: 15,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  roundedButton: {
    borderRadius: 40,
    backgroundColor: Colors.tertiaryColor,
  },
  disabledButton: {
    backgroundColor: Colors.tertiaryColorDisabled,
  },
  normalButtonText: {
    color: Colors.tertiaryColor,
    textAlign: 'center',
  },
  roundedButtonText: {
    color: 'white',
    textAlign: 'center',
  }
});

export default Button
