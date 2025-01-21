<template>
  <TheHeader @openModal="openModal()"/>
  <ListProducts />
  <base-modal @closeModal="closeModal()" v-if="modal"/>
</template>

<script>
import ListProducts from './components/Products/ListProducts.vue';
import TheHeader from './components/TheHeader.vue';
import BaseModal from './components/Modal/BaseModal.vue';
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      modal: false
    }
  },
  components: {
    ListProducts,
    TheHeader,
    BaseModal
  },
  methods: {
    openModal() {
      this.modal = true
    },
    closeModal() {
      this.modal = false
    }
  },
  created() {
    axios.get('products').then((response) => {
        this.$store.commit('storeProducts', response.data);
    })
  }
}
</script>

<style>
  body {
    margin: 0;
  }
  #app {
    font-family: "Inter", sans-serif;
  }
</style>
