import React, { Component } from "./node_modules/react";

import { withNavigation } from "react-navigation";

import { Card, CardItem, Thumbnail, Text, Left, Body } from "native-base";

import CourseStore from "../../store/CourseStore";

class CourseDetail extends Component {
  render() {
    const { navigation } = this.props;
    //const navigation = this.props.navigation
    const { languagecourses } = CourseStores;

    if (!language) return <Content />;
    const languageID = navigation.getParam("languageID");
    const language = languagecourses.find(
      language => language.id === languageID
    );

    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: language.img }} />
            <Body>
              <Text>{language.name}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{ uri: language.img }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
      </Card>
    );
  }
}
export default withNavigation(CourseDetail);
