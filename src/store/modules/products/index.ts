import { Module } from "vuex";
import { ProductMutation } from "./mutation";
import { ProductGetters } from "./getters";
import { ProductAction } from "./actions";

const state: Products = {
  products: [],
};

export const Products: Module<Products, RootState> = {
  namespaced: true,
  state,
  mutations: ProductMutation,
  getters: ProductGetters,
  actions: ProductAction,
};
