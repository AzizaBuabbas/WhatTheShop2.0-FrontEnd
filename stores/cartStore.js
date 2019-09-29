import { decorate, observable, computed } from "mobx";
import { instance } from "./instance.js";
import { NativeViewGestureHandler } from "react-native-gesture-handler";

class CartStore {
  items = [];
  loading = false;

  fetchCart = async () => {
    try {
      const res = await instance.get("/viewcart/");
      const items = res.data;
      this.items = items;
      this.loading = false;
    } catch (err) {
      console.log(err);
    }
  };

  createItem = async item => {
    try {
      console.log("");
      const res = await instance.post("/addtocart/", item);
      console.log(res);
      const data = res.data;
      console.log("lastcart", data);
    } catch (err) {
      console.log("error: " + err.response);
    }
  };

  updateQuantity = async item => {
    try {
      const res = await instance.put("/checkout/", item);
      const data = res.data;
      console.log("lastcart", data);
    } catch (err) {
      console.log(err.response);
    }
  };

  checkOut = async () => {
    this.items = [];
  };

  addItemToCart(item) {
    const foundItem = this.items.find(cartItem => cartItem.name === item.name);
    console.log("Found this item: " + foundItem);
    if (foundItem) {
      foundItem.quantity += item.quantity; //here we stopped
      this.updateQuantity(foundItem);
      alert("Thank You , Item added succesfully");
    } else {
      console.log("Didn't find item: " + item);
      const newItem = {
        item: item.id,
        quantity: item.quantity
      };
      this.createItem(newItem);
      this.items.push(newItem);

      alert("Thank You , Item added succesfully");
    }

    console.log("itemscart", this.items);
  }

  removeItemFromCart(item) {
    this.items = this.items.filter(cartItem => cartItem !== item);
  }
}

decorate(CartStore, {
  items: observable
});

const cartStore = new CartStore();

export default cartStore;