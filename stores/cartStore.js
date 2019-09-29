import { decorate, observable, computed } from "mobx";
import { instance } from "./instance.js";
import { NativeViewGestureHandler } from "react-native-gesture-handler";
class CartStore {
  courses = [];

  addItemToCart = newTitle => {
    const foundTitle = this.courses.find(
      item => newTitle.course === item.title
    );
    if (foundTitle) foundTitle.quantity += newTitle.quantity;
    else this.courses.push(newTitle);
  };

  removeItemFromCart = itemToDelete =>
    (this.courses = this.courses.filter(item => item !== itemToDelete));

  checkoutCart = () => {
    this.courses = [];
    alert("Thank you.");
  };

  get quantity() {
    let total = 0;
    this.courses.forEach(item => (total = item.quantity));
    return total;
  }
}

decorate(CartStore, {
  courses: observable,
  quantity: computed
});

export default new CartStore();
