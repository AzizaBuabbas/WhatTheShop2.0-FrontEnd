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

class CourseItem extends Component {
  handlePress = () => {
    this.props.navigation.navigate("CourseDetail", {
      languageID: this.props.language.id,
      languageName: this.props.language.title
    });
  };

  render() {
    const { language } = this.props;

    return (
      <ListItem thumbnail onPress={this.handlePress}>
        <Left>
          <Thumbnail square source={{ uri: language.logo }} />
        </Left>
        <Body>
          <Text>{language.title}</Text>
          <Text note numberOfLines={1}></Text>
        </Body>
        <Right>
          <Button transparent onPress={this.handlePress}>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    );
  }
}

export default withNavigation(CourseItem);
