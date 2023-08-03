import { GetterTree } from "vuex";

export const CartGetters: GetterTree<CartState,RootState> = {
    getAllCart(state): CartState {
        return state
    }
}