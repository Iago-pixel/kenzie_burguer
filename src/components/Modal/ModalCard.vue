<template>
    <li class="product">
        <div class="left-box">
            <div class="img-box">
                <img class="img" :src="data.img" :alt="data.name" width="150px" height="150px"/>
            </div>
            <div class="infos">
                <h3 class="name">{{ data.name }}</h3>
                <p class="price">{{ data.priceString }}</p>
            </div>
        </div>
        <button class="icon-btn" @click="deleteItem(index)">
            <FontAwesomeIcon :icon="faTrash" />
        </button>
    </li>
</template>

<script>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { faTrash } from '@fortawesome/free-solid-svg-icons';
    import { useStore } from 'vuex';

    export default {
        props: {
            data: {
                type: Object,
                default: () => {}
            },
            index: {
                type: Number,
                default: 0
            }
        },
        components: {
            FontAwesomeIcon,
        },
        setup() {
            const store = useStore();

            const deleteItem = (index) => {
                store.commit('deleteProductCart', index);
            }

            return {
                faTrash,
                deleteItem
             }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../scss/app.scss';

    .product {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 0 16px;
        .left-box {
            display: flex;
            align-items: center;
            .img-box {
                background-color: $gray-0;
            }
            .infos {
                padding: 0 16px 16px 32px;
                .name {
                    font-size: 22px;
                    color: $gray-600;
                    margin: 10px 0;
                }
                .price {
                    font-size: $heading3;
                    color: $color-primary;
                    font-weight: bold;
                    margin: 10px 0;
                }
            }
        }
        .icon-btn {
            margin-right: 16px;
            font-size: 22px;
            color: $gray-300;
            background-color: transparent;
            border: none;
            cursor: pointer;
        }
    }

    @media screen and (max-width: 320px) {
        .product {
            .left-box {
                .img-box {
                    display: none;
                }
            }
        }
    }
</style>