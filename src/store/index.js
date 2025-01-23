import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    cart: [],
  },
  getters: {
    total (state) {
      const total = state.cart.reduce((total, product) => total + product.price, 0);

      return `R$ ${total.toFixed(2)}`;
    }
  },
  mutations: {
    storeProducts(state, data) {
      state.products = data.map((product) => {
        return { ...product, priceString: `R$ ${product.price.toFixed(2)}` };
      });
    },
    addProductCart(state, data) {
      state.cart.push(data);
    },
    deleteProductCart(state, index) {
      state.cart.splice(index, 1);
    },
    deleteAllCart(state) {
      state.cart = [];
    }
  },
  actions: {
  },
  modules: {
  }
})
