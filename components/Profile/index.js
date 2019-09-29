import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Card, CardItem, Text, Button } from "native-base";
import authStore from "../../stores/authStore";

const Profile = ({ navigation }) => {
  componentDidMount = () => {
    if (authStore.user) {
      () => profileStore.fetchProfile();
    }
  };
  return (
    <Card>
      <CardItem>
        <Button danger onPress={() => authStore.logout(navigation)}>
          <Text>Logout</Text>
        </Button>
      </CardItem>
    </Card>
  );
};
export default observer(Profile);
