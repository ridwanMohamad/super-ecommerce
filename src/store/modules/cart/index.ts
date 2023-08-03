import { Module } from "vuex";
import { CartGetters } from "./getters";
import { CartMutation } from "./mutation";
import { CartAction } from "./actions";

const state: CartState = {
    product: [],
    totalItem: 0,
    totalPrice: 0
}

export const Cart: Module<CartState,RootState> = {
    namespaced:true,
    state,
    getters:CartGetters,
    mutations:CartMutation,
    actions:CartAction
}