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
import languagecourse from "../../stores/Coursestores";

const CourseItem = ({ navigation, language }) => {
  const handlePress = () => {
    navigation.navigate("courseDetail", {
      languageID: language.id,
      languageName: language.name
    });
  };

  return (
    <ListItem thumbnail onPress={handlePress}>
      {/* <Left>
        <Thumbnail square source={{ uri: language.logo }} />
      </Left> */}
      <Body>
        <Text>language.title</Text>
        <Text note numberOfLines={1}></Text>
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
