<template>
    <button class="btn" @click="onClick()">
        <slot></slot>
    </button>
</template>

<script setup>
    import { defineEmits } from 'vue';

    const emit = defineEmits(['clickBtn']);

    const onClick = () => {
        emit('clickBtn');
    }
</script>

<style lang="scss" scoped>
    @import '../scss/app.scss';

    .btn {
        border-radius: 7px;
        border: none;
        background-color: $gray-300;
        padding: 12px 16px;
        font-weight: bold;
        color: white;
        font-size: $heading3;
        cursor: pointer;
        &:hover {
            background-color: $color-primary;
        }
    }
</style>