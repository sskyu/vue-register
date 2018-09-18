import Vuex, { Store } from 'vuex'
import Vue from 'vue'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const initialState = {
  entities: {
    bandList: {
      0: { value: 0, tolerance: 0, color: 'black', label: 'None' },
      1: { value: 1, tolerance: 1, color: 'brown', label: 'Brown' },
      2: { value: 2, tolerance: 2, color: 'red', label: 'Red' },
      3: { value: 3, color: 'orange', label: 'Orange' },
      4: { value: 4, color: 'yellow', label: 'Yellow' },
      5: { value: 5, tolerance: 0.5, color: 'green', label: 'Green' },
      6: { value: 6, tolerance: 0.25, color: 'blue', label: 'Blue' },
      7: { value: 7, tolerance: 0.10, color: 'violet', label: 'Violet' },
      8: { value: 8, tolerance: 0.05, color: 'grey', label: 'Grey' },
      9: { value: 9, color: 'white', label: 'White' },
      10: { value: 10, tolerance: 5, color: '#ffd700', label: 'Gold' },
      11: { value: 11, tolerance: 10, color: '#c0c0c0', label: 'Silver' }
    }
  },
  results: {
    currentBands: [0, 1, 2, 3, 4]
  }
}

const store = new Store({
  state: initialState,
  getters,
  actions,
  mutations
})

export default store
