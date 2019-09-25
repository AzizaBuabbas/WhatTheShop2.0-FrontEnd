import React, { Component } from "react";
import { observer } from "mobx-react";

import { Container, Content } from "native-base";

import CourseStore from "../../stores/Coursestores";
import CourseItem from "./CourseItem";
import languagecourse from "../../stores/Coursestores";

const CourseList = () => {
  componentDidMount = () => {
    languagecourse.fetchAllLanguageCourses();
  };
  const languagecourses = languagecourse.languagecourses;
  let courses;
  if (languagecourses) {
    courses = languagecourses.map(language => (
      <CourseItem langauge={courses} key={language.id} />
    ));
  }
  return (
    <Container>
      <Content>{courses}</Content>
    </Container>
  );
};

export default observer(CourseList);
