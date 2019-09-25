import { createStackNavigator } from "react-navigation-stack";
import ListScreen from "../components/Courselist";
import DetailScreen from "../components/CourseDetail";
const CourseStack = createStackNavigator(
  {
    CourseList: ListScreen,
    CourseDetail: DetailScreen
  },
  {
    initialRouteName: "CourseList",
    defaultNavigationOptions: {
      title: "LanguageCourse"
    }
  }
);

export default CourseStack;
