import { createStackNavigator } from "react-navigation-stack";

// Components
import Profile from "../components/Profile";
import Login from "../components/Login";
import Register from "../components/Register";

const ProfileStack = createStackNavigator(
  {
    Profile: Profile,
    Login: Login,
    Register: Register
  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      title: "Profile Page"
    }
  }
);

export default ProfileStack;
