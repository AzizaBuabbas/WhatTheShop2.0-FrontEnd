import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Form, Item, Input, Button, Text } from "native-base";

// Store
import authStore from "../../stores/authStore";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    const { navigation } = this.props;
    return (
      <Form>
        <Item>
          <Input
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={username => this.setState({ username: username })}
          />
        </Item>
        <Item last>
          <Input
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
        </Item>
        <Button full onPress={() => authStore.login(this.state, navigation)}>
          <Text>Login</Text>
        </Button>
        <Button
          full
          warning
          onPress={() => authStore.signup(this.state, navigation)}
        >
          <Text>Regiister</Text>
        </Button>
      </Form>
    );
  }
}
export default observer(Login);
