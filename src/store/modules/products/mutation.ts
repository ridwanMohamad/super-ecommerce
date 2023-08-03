import { MutationTree } from "vuex";

export const ProductMutation:MutationTree<Products> = {
    setProducts(state, product: Products) {
        state.products = product.products
    },
    sortProducts(state, sort: any) {
        console.log(sort);
        
        if (sort.name == "name") {
            if(sort.value=='asc'){
                state.products.sort((a, b)=> a.title < b.title ? -1 : 1)
                return
              }
              state.products.sort((a, b)=> a.title > b.title ? -1 : 1)
        } else {
            if(sort.value=='asc'){
                state.products.sort((a, b)=> a.price < b.price ? -1 : 1)
                return
              }
              state.products.sort((a, b)=> a.price > b.price ? -1 : 1)
        }
    }
}