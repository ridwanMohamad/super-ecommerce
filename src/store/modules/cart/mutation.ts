import { MutationTree } from "vuex";

export const CartMutation:MutationTree<CartState> = {
    setCart(state, cart: CartState) {
        state = cart;
    },
    addProductCart(state, item: ItemCart) {
        state.product.push(item);
    },
    updateProduct(state, item: ItemCart) {
        const getItem: any =  state.product.find(cart => cart.productId == item.productId);
        getItem.qty = item.qty
        getItem.total = item.total
    },
    countProduct(state) {
        let totalItem = 0
        for (let index = 0; index < state.product.length; index++) {
            totalItem += state.product[index].qty;
        }
        state.totalItem = totalItem;
    },
    sumTotalPrice(state) {
        let totalPrice = 0
        for (let index = 0; index < state.product.length; index++) {
            totalPrice += state.product[index].total;
        }
        state.totalPrice = Number(totalPrice.toFixed(2));
    },
    removeItem(state,payload) {
        state.product.splice(payload,1);
    }
}