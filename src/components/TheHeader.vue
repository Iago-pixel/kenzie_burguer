<template>
    <header class="header">
        <div class="content">
            <h1 class="title">Burguer <span class="pink-title">Kenzie</span></h1>
            <div class="cart-button-box">
                <button class="cart-button"><FontAwesomeIcon :icon="faCartShopping" /></button>
                <span class="number-items">0</span>
            </div>
        </div>
    </header>
</template>

<script setup>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
</script>

<style scoped>
    .header {
        background-color: #F5F5F5;
        padding: 16px;
    }
    .content {
        display: flex;
        justify-content: space-between;
        max-width: 1024px;
        margin: 0 auto;
    }
    .title {
        font-size: 26px;
        color: #333333;
        margin: 0;
    }
    .title .pink-title {
        font-size: 18px;
        color: #EB5757;
    }
    .cart-button-box {
        position: relative;
        padding-top: 8px;
    }
    .cart-button {
        border: none;
        background-color: transparent;
        font-size: 26px;
        color: #828282;

    }
    .number-items {
        font-weight: bold;
        border-radius: 7px;
        background-color: #27AE60;
        color: white;
        padding: 4px;
        position: absolute;
        top: -6px;
        right: 0;
    }
</style>