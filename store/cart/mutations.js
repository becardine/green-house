export default {
  LoadCart(state) {
    let cart = localStorage.getItem("freeCart");
    if (cart) {
      state.cart = JSON.parse(cart);
    }
  },
  AddToCart(state, product) {
    // check if the item is in the cart already
    let itemFound = state.cart.find((p) => p.product.id === product.id);
    if (!itemFound) {
      state.cart.push({
        product,
        quantity: 1,
      });
    }
    if (itemFound) {
      itemFound.quantity += 1;
    }

    //Update localStorage
    localStorage.setItem("freeCart", JSON.stringify(state.cart));

    this.$swal({
      toast: true,
      text: "Cart updated",
      icon: "success",
      timer: 4000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top-end",
    });
  },
  DecreaseItemCount(state, index) {
    let item = state.cart[index];
    if (!item) return;
    if (item.quantity === 1) {
      state.cart.splice(index, 1);
    } else {
      item.quantity -= 1;
    }
    this.$swal({
      toast: true,
      text: "Cart updated",
      icon: "success",
      timer: 4000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top-end",
    });
    //Update localStorage
    localStorage.setItem("freeCart", JSON.stringify(state.cart));
  },
  RemoveCartItem(state, index) {
    state.cart.splice(index, 1);
    this.$swal({
      toast: true,
      text: "Item removed",
      icon: "success",
      timer: 4000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top-end",
    });
    //Update localStorage
    localStorage.setItem("freeCart", JSON.stringify(state.cart));
  },
  IncreaseItemCount(state, index) {
    let item = state.cart[index];
    item.quantity +=1;
    this.$swal({
      toast: true,
      text: "Cart updated",
      icon: "success",
      timer: 4000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top-end",
    });
    //Update localStorage
    localStorage.setItem("freeCart", JSON.stringify(state.cart));
  },
  ClearCart(state) {
    state.cart = [];
    localStorage.removeItem('freeCart');
  }
};
