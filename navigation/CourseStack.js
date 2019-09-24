import { createStackNavigator } from "react-navigation-stack";
import ListScreen from "../components/CourseList";
import DetailScreen from "../components/CourseDetail";
const CourseStack = createStackNavigator(
  {
    CourseList: ListScreen,
    CourseDetail: DetailScreen
  },
  {
    initialRouteName: "Course",
    defaultNavigationOptions: {
      title: "LanguageCourse"
    }
  }
);

export default CourseStack;
