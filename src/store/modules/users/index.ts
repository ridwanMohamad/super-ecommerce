import { Module } from "vuex"

const state: UsersState = {
    profile: {
        username: 'ridwan',
        fullName: 'Mohamad Ridwan',
        avatar: 'https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Clip-Art-Transparent-PNG.png',
        status: 'Guest',
      }
}
export const Users: Module<UsersState, RootState> = {
    state
}