import React from "react";

// NativeBase Components
import { Card, CardItem, Text, Button } from "native-base";

const Profile = () => {
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
export default Profile;
