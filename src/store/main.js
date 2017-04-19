import Vue from 'vue'
import Vuex from 'vuex'
import createMutationSharer from 'vuex-shared-mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    time: 60,
    fontSize: 12,
  },
  mutations : {
    majChrono (state, time) {
      state.time = time
    },
    setSize (state, size) {
      state.fontSize = size
    }
  },
  plugins: [
    createMutationSharer({
      predicate: ['majChrono', 'setSize']
    })
  ]
})
