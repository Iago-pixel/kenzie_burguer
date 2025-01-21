<template>
    <section>
        <ul class="products">
            <ItemProduct v-for="product in $store.state.products" :data="product" :key="product.id"/>
        </ul>
    </section>
</template>

<script setup>
    import ItemProduct from './ItemProduct.vue';
</script>

<style lang="scss" scoped>
    .products {
        max-width: 1024px;
        margin: 16px auto;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        gap: 50px;
        @media only screen and (max-width: 1024px) {
            padding: 16px;
        }
    }
</style>