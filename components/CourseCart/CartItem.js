import React from "react";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";
import cartStore from "../../stores/cartStore";

const CartItem = ({ LanguageCourse }) => {
  return (
    <ListItem style={{ borderBottomWidth: 0 }}>
      <Left>
        <Text style={{ color: "white", marginLeft: 16 }}>
          {" "}
          {LanguageCourse.title}{" "}
        </Text>
        <Text note style={{ marginLeft: 16 }}>
          {LanguageCourse.option}
        </Text>
      </Left>
      <Body>
        <Text style={{ color: "white" }}>{LanguageCourse.price}</Text>
      </Body>
      <Right>
        <Button transparent>
          <Icon name="trash" style={{ color: "white", fontSize: 21 }} />
        </Button>
      </Right>
    </ListItem>
  );
};

export default CartItem;
