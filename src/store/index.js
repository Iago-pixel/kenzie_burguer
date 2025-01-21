import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    cart: [],
    total: {
      totalNumber: 0,
      totalString: 'R$ 0.00'
    }
  },
  getters: {
  },
  mutations: {
    storeProducts(state, data) {
      state.products = data.map((product) => {
        return {...product, priceString: `R$ ${product.price}.00`};
      })
    },
    addProductCart(state, data) {
      state.cart.push(data);
      state.total.totalNumber = state.total.totalNumber + data.price;
      state.total.totalString = `R$ ${state.total.totalNumber}.00`;
    },
    deleteProductCart(state, index) {
      const removedItems = state.cart.splice(index, 1);
      state.total.totalNumber = state.total.totalNumber + removedItems[0].price;
      state.total.totalString = `R$ ${state.total.totalNumber}.00`;
    },
    deleteAllCart(state) {
      state.cart = [];
      state.total = { totalNumber: 0, totalString: 'R$ 0.00'}
    }
  },
  actions: {
  },
  modules: {
  }
})
