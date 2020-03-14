import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    region: {
      name: 'Cordova'
    }
  },
  mutations: {
    UPDATE_REGION (state, payload) {
      console.log(payload)
      state.region = Object.assign({}, state.region, payload)
      console.log(state.region)
    }
  },
  actions: {
    async getRegionData (context) {
      /* eslint-disable-next-line */
      if (RUN_CORDOVA) {
        // read sdcard and mutation state.region
        // context.commit('UPDATE_REGION', response.data)
      } else {
        await axios.get('./data.json')
          .then(function (response) {
            context.commit('UPDATE_REGION', response.data)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
})
