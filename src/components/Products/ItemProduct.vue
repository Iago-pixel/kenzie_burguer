<template>
    <li class="product">
        <div class="img-box">
            <img class="img" :src="data.img" :alt="data.name" />
        </div>
        <div class="infos">
            <h3 class="name">{{ data.name }}</h3>
            <p class="category">{{ data.category }}</p>
            <p class="price">{{ data.priceString }}</p>
            <AppButton @click-btn="addCart(data)">Adicionar</AppButton>
        </div>
    </li>
</template>

<script>
    import AppButton from '../Button/AppButton.vue';

    export default {
        props: {
            data: {
                type: Object,
                default: () => {}
            }
        },
        components: {
            AppButton
        },
        methods: {
            addCart(data) {
                this.$store.commit('addProductCart', data);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../scss/app.scss';

    .product {
        border: 2px $gray-100 solid;
        border-radius: 7px;
        width: 250px;
        overflow: hidden;
        &:hover {
            border: 2px $color-primary solid;
        }
        .img-box {
            background-color: $gray-0;
            display: flex;
            justify-content: center;
            align-content: center;
            height: 160px;
        }
        .infos {
            padding: 16px;
            .name {
                font-size: 22px;
                color: $gray-600;
            }
            .category {
                color: $gray-300;
                font-size: $caption;
            }
            .price {
                font-size: $heading3;
                color: $color-primary;
                font-weight: bold;
            }
        }
    }
</style>