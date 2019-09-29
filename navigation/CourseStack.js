import { createStackNavigator } from "react-navigation-stack";
import ListScreen from "../components/Courselist";
import DetailScreen from "../components/CourseDetail";
import CourseCart from "../components/CourseCart";
const CourseStack = createStackNavigator(
  {
    CourseList: ListScreen,
    CourseDetail: DetailScreen,
    CourseCart: CourseCart
  },
  {
    initialRouteName: "CourseList",
    defaultNavigationOptions: {
      title: "LanguageCourse"
    }
  }
);

export default CourseStack;
