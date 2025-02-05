import React, { Component } from "react";
import { observer } from "mobx-react";

import { Container, Content, Button } from "native-base";

import CourseStore from "../../stores/CourseStores";
import CourseItem from "./CourseItem";

class CourseList extends Component {
  // componentDidMount = () => {
  //   languagecourse.fetchAllLanguageCourses();
  // };
  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerleft: null,
    headerright: (
      <Button onPress={() => navigation.navigate("CourseCart")}></Button>
    )
  });

  render() {
    const languagecourses = CourseStore.languagecourses;
    console.log("CourseList.js languagecourses: ", languagecourses);
    let courses;
    if (languagecourses) {
      courses = languagecourses.map(language => {
        return <CourseItem language={language} key={language.id} />;
      });
    }
    return (
      <Container>
        <Content>{courses}</Content>
      </Container>
    );
  }
}

export default observer(CourseList);
