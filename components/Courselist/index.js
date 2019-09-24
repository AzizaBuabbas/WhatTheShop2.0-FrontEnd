import React, { Component } from "./node_modules/react";
import { observer } from "./node_modules/mobx-react";

import { Container, Content } from "native-base";

import CourseStore from "../../stores/Coursestores";
import CourseItem from "./CourseItem";

const CourseList = () => {
  const { languages } = CourseStore;
  let courses;
  if (languages) {
    courses = languages.map(language => (
      <CourseItem langauge={language} key={language.id} />
    ));
  }
  return (
    <Container>
      <Content>{courses}</Content>
    </Container>
  );
};

export default observer(CourseList);
