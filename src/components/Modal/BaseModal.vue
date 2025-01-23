<template>
    <div class="background-modal" @click="close()"></div>
    <div class="modal-box">
        <div class="modal">
            <div class="header"><h3>Carrinho de compras</h3><button @click="close()">X</button></div>
            <ul>
                <ModalCard v-for="(product, index) in $store.state.cart" :data="product" :index="index" :key="index" />
            </ul>
            <div class="line"></div>
            <div class="total-box">
                <p class="total">Total</p><p class="price">{{ $store.getters.total }}</p>
            </div>
            <AppButton class="remove-all-btn" @clickBtn="removeAll()">Remover todos</AppButton>
        </div>
    </div>
</template>

<script setup>
    import ModalCard from './ModalCard.vue';
    import AppButton from '../Button/AppButton.vue';
    import { defineEmits } from 'vue';
    import { useStore } from 'vuex';

    const emit = defineEmits(['closeModal']);
    const store = useStore();

    const close = () => {
        emit('closeModal');
    }

    const removeAll = () =>{
        store.commit('deleteAllCart');
    }
</script>

<style lang="scss" scoped>
    @import '../scss/app.scss';

    .background-modal {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: gray;
        opacity: 0.5;
    }
    .modal-box {
        position: fixed;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
        .modal {
            background-color: white;
            border-radius: 15px;
            .header {
                background-color: $color-primary;
                font-weight: $heading3;
                padding: 16px;
                border-radius: 7px 7px 0 0;
                display: flex;
                justify-content: space-between;
                h3 {
                    margin: 0;
                    color: white;
                }
                button {
                    border: none;
                    background-color: transparent;
                    color: white;
                    cursor: pointer;
                }
            }
            ul {
                list-style-type: none;
                padding: 16px;
                margin: 0;
                overflow-y: scroll;
                max-height: 350px;
            }
            .line {
                border: 1px solid $gray-300;
                margin: 32px 16px 8px;
            }
            .total-box {
                display: flex;
                justify-content: space-between;
                padding: 16px;
                p {
                    margin: 0;
                    font-size: $heading3;
                    font-weight: bold;
                }
                .total {
                    color: $gray-600;
                }
                .price {
                    color: $gray-300;
                }
            }
            .remove-all-btn {
                margin: 0 16px 16px;
                width: 500px;
            }
        }
    }

    @media screen and (max-width: 450px) {
        .modal-box {
            .modal {
                .remove-all-btn {
                    width: 375px;
                }
            }
        }
    }

    @media screen and (max-width: 320px) {
        .modal-box {
            .modal {
                .remove-all-btn {
                    width: 320px;
                }
            }
        }
    }
</style>