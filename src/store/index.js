// import vue and vuex.
import Vue from 'vue'
import Vuex from 'vuex'

// import root store components.
import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

// import store modules.
// import vault from './vault'
// import accounts from './accounts'
import common from './common'
import auth from './auth'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    auth,
    // vault,
    // accounts,
    common
  }
})

export default store
