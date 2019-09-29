import React, { Component } from "react";

import { withNavigation } from "react-navigation";

import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Content,
  Button
} from "native-base";

import { Image } from "react-native";

import CourseStores from "../../stores/CourseStores";
import cartStore from "../../stores/cartStore";

class CourseDetail extends Component {
  render() {
    const { navigation } = this.props;
    //const navigation = this.props.navigation
    const { languagecourses } = CourseStores;

    const languageID = navigation.getParam("languageID");
    console.log("ID", languageID);
    const language = languagecourses.find(
      language => language.id === languageID
    );
    console.log("language", language);
    if (!language) return <Content />;

    return (
      <Card style={{ height: 400 }}>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: language.logo }} />
            <Body>
              <Text>{language.title}</Text>
            </Body>
          </Left>
        </CardItem>

        <CardItem cardBody>
          <Image
            source={{ uri: language.logo }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Button
            onPress={() => {
              cartStore.addItemToCart(language);
              this.props.navigation.push("CourseCart");
            }}
          >
            <Text>{language.price} KD</Text>
          </Button>
        </CardItem>
        <CardItem>
          <Text style={{ color: "black" }}>{language.course_overview}</Text>
        </CardItem>
      </Card>
    );
  }
}
export default withNavigation(CourseDetail);
