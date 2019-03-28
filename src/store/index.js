import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common.js'
import goalkeepers from './modules/goalkeepers.js'
import defenders from './modules/defenders.js'
import midfielders from './modules/midfielders.js'
import forwards from './modules/forwards.js'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    common,
    goalkeepers,
    defenders,
    midfielders,
    forwards
  },
  strict: debug
})

export default store
