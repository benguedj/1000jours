import { filter } from "lodash";
import type { FC } from "react";
import * as React from "react";
import { Alert, Linking, StyleSheet } from "react-native";

import { Colors, Labels, Paddings, Sizes } from "../../constants";
import type { ArticleLink } from "../../types";
import { SecondaryText } from "../StyledText";
import { View } from "../Themed";
import SubTitle from "./subTitle.component";

interface Props {
  linksArray: ArticleLink[];
}

const Links: FC<Props> = ({ linksArray }) => {
  const goToUrl = (url: string) => {
    if (url && url.length > 0) {
      void Linking.canOpenURL(url).then((supported: boolean) => {
        if (supported) void Linking.openURL(url);
        else Alert.alert(Labels.invalidLink);
      });
    } else Alert.alert(Labels.invalidLink);
  };

  return filter(linksArray, "label").length > 0 ? (
    <View>
      <SubTitle title={Labels.article.learnMoreAboutIt} />
      <View style={styles.linksContainer}>
        {filter(linksArray, "label").map((item, index) => (
          <SecondaryText
            key={index}
            style={[styles.link]}
            onPress={() => {
              goToUrl(item.url);
            }}
          >
            {item.label}
          </SecondaryText>
        ))}
      </View>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  link: {
    color: Colors.commonText,
    flexDirection: "column",
    fontSize: Sizes.sm,
    paddingHorizontal: Paddings.light,
    paddingVertical: Paddings.smaller,
    textDecorationLine: "underline",
  },
  linksContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingVertical: Paddings.light,
  },
});

export default Links;
