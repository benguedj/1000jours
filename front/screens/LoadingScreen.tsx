import { StackActions } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { FC } from "react";
import * as React from "react";
import { useEffect } from "react";
import { StyleSheet } from "react-native";

import { Loader } from "../components";
import { View } from "../components/Themed";
import { StorageKeysConstants } from "../constants";
import type { RootStackParamList } from "../types";
import { StorageUtils } from "../utils";

interface LoadingScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "loading">;
}

const LoadingScreen: FC<LoadingScreenProps> = ({ navigation }) => {
  const redirectTo = (pageName: string) => {
    navigation.dispatch(StackActions.replace(pageName));
  };
  useEffect(() => {
    const handleFirstLaunch = async () => {
      const isFirstLaunch = await StorageUtils.getObjectValue(
        StorageKeysConstants.isFirstLaunchKey
      );
      if (isFirstLaunch === null) {
        redirectTo("onboarding");
      } else {
        redirectTo("root");
      }
    };
    void handleFirstLaunch();
  }, []);

  return (
    <View style={styles.container}>
      <Loader />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    display: "flex",
    height: "100%",
    justifyContent: "center",
  },
});

export default LoadingScreen;
