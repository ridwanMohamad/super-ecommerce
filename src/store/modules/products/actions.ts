import ServiceProducts from "@/services/products";
import { ActionTree, Commit } from "vuex";

export const ProductAction: ActionTree<Products,RootState> = {
    async fetchDataProduct({commit}:{commit: Commit}) {
        try {
            const dataProducts = await ServiceProducts.fetchProducts()
            console.log(dataProducts);
            const Products : Products = {
                products : dataProducts
            }
            commit('setProducts',Products)
        } catch (error) {
            console.error(error);
        }
    }
}