import { createStackNavigator } from "react-navigation-stack";

// Components
import Profile from "../components/Profile";
import Login from "../components/Login";
import Register from "../components/Register";
import CourseList from "../components/Courselist";

const ProfileStack = createStackNavigator(
  {
    Profile: Profile,
    Login: Login,
    Register: Register,
    CourseList: CourseList
  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      title: "Profile Page"
    }
  }
);

export default ProfileStack;
