<template>
    <header class="header">
        <div class="content">
            <h1 class="title">Burguer <span class="pink-title">Kenzie</span></h1>
            <div class="cart-button-box">
                <button class="cart-button" @click="openModal"><FontAwesomeIcon :icon="faCartShopping" /></button>
                <span class="number-items">{{ $store.state.cart.length }}</span>
            </div>
        </div>
    </header>
</template>

<script setup>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
    import { defineEmits } from 'vue';

    const emit = defineEmits(['openModal']);

    const openModal = () => {
        emit('openModal')
    };
</script>

<style lang="scss" scoped>
    @import './scss/app.scss';

    .header {
        background-color: $gray-0;
        padding: 16px;
        .content {
            display: flex;
            justify-content: space-between;
            max-width: 1024px;
            margin: 0 auto;
            .title {
                font-size: $heading1;
                color: $gray-600;
                margin: 0;
                .pink-title {
                    font-size: 18px;
                    color: $color-secondary;
                }
            }
            .cart-button-box {
                position: relative;
                padding-top: 8px;
                .cart-button {
                    border: none;
                    background-color: transparent;
                    font-size: $heading1;
                    color: $gray-300;
                    cursor: pointer;
                }
                .number-items {
                    font-weight: bold;
                    border-radius: 7px;
                    background-color: $color-primary;
                    color: white;
                    padding: 4px;
                    position: absolute;
                    top: -6px;
                    right: 0;
                }
            }
        }
    }
</style>