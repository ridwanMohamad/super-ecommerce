import ServiceProducts from "@/services/products";
import { ActionTree, Commit } from "vuex";

export const CartAction: ActionTree<CartState,RootState> = {
    async updateCart({commit,state}:{commit: Commit, state: CartState}, payload: ItemCart) {
        try {
            const checkProductInCart: any =  state.product.find(item => item.productId == payload.productId)
            if (!checkProductInCart) {
                commit('addProductCart',payload)
            } else {
                commit('updateProduct',payload)
            }
            commit('countProduct')
            commit('sumTotalPrice',payload.total)
            
        } catch (error) {
            console.error(error);
        }
    },
    async removeItem({commit,state}:{commit: Commit, state: CartState}, payload: ItemCart) {
        try {
            const checkIndex: number = state.product.findIndex(cart => cart.productId == payload.productId)
            commit('removeItem',checkIndex)
            commit('countProduct')
            commit('sumTotalPrice',payload.total)
            
        } catch (error) {
            console.error(error);
        }
    }
}