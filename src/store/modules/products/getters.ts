import { GetterTree } from "vuex";

export const ProductGetters: GetterTree<Products,RootState> = {
    getAllProducts(state): Product[] {
        console.log("state",state);
        
        return state.products
    }
}