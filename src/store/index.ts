import Vuex from 'vuex'
import {Users} from '@/store/modules/users'
import { Products } from './modules/products'
import { Cart } from './modules/cart'

export default new Vuex.Store<RootState>({
  state: {
    AppIcon: "https://www.superindo.co.id/images/new/logo-superindo.png"
    
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Users,
    Products,
    Cart,
  }
})
