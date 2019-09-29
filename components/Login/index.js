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
    // first_name: "",
    // last_name: ""
  };

  render() {
    const { navigation } = this.props;
    return (
      <Form>
        <Item>
          <Input
            placeholder="username"
            autoCapitalize="none"
            onChangeText={username => this.setState({ username: username })}
          />
        </Item>
        <Item>
          <Input
            placeholder="password"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
        </Item>
        {/* <Item>
          <Input
            placeholder="first_name"
            autoCapitalize="none"
            onChangeText={first_name => this.setState({ first_name })}
          />
        </Item>
        <Item last>
          <Input
            placeholder="last_name"
            autoCapitalize="none"
            onChangeText={last_name => this.setState({ last_name })}
          />
        </Item> */}
        <Button
          full
          onPress={() => authStore.login(this.state, this.props.navigation)}
        >
          <Text>Login</Text>
        </Button>
        <Button
          full
          warning
          onPress={() => this.props.navigation.replace("Register")}
        >
          <Text>Regiister</Text>
        </Button>
      </Form>
    );
  }
}
export default observer(Login);
