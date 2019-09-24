import { withNavigation } from "react-navigation";

import React, { Component } from "react";
import {
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button
} from "native-base";

const CourseItem = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("courseDetail", {
      languageID: language.id,
      languageName: language.name
    });
  };

  return (
    <ListItem thumbnail onPress={handlePress}>
      <Left>
        <Thumbnail square source={{ uri: language.img }} />
      </Left>
      <Body>
        <Text>language.title</Text>
        <Text note numberOfLines={1}>
          Its time to build a difference . .
        </Text>
      </Body>
      <Right>
        <Button transparent>
          <Text>View</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default withNavigation(CourseItem);
