import Vue from 'vue'
import Vuex from 'vuex'
import createMutationSharer from 'vuex-shared-mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    time: 0,
  },
  mutations : {
    majChrono (state, time) {
      state.time = time
    },
  },
  plugins: [
    createMutationSharer({
      predicate: ['majChrono']
    })
  ]
})
