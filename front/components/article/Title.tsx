import type { FC } from "react";
import * as React from "react";
import { StyleSheet } from "react-native";

import Colors from "../../constants/Colors";
import { CommonText } from "../StyledText";

interface Props {
  title: string;
}

const Title: FC<Props> = ({ title }) => {
  return <CommonText style={[styles.title]}>{title}</CommonText>;
};

const styles = StyleSheet.create({
  title: {
    color: Colors.primaryBlue,
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
    textTransform: "uppercase",
  },
});

export default Title;