import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { Message } from 'element-ui'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    cat: {
      name: ''
    }
  },
  getters: {
    getCatName: state => {
      return state.cat.name
    }
  },
  mutations: {
    UPDATE_CAT (state, payload) {
      state.cat = Object.assign({}, state.cat, payload)
    }
  },
  actions: {
    syncCat (context) {
      let dataFile = 'data.json'
      if (RUN_CORDOVA) { // eslint-disable-line
        let dataDirectory = cordova.file.externalRootDirectory // eslint-disable-line
        self.resolveLocalFileSystemURL(dataDirectory, root => {
          root.getFile(dataFile, { create: false }, fileEntry => {
            fileEntry.file(file => {
              var reader = new FileReader()
              reader.onloadend = event => {
                context.commit('UPDATE_CAT', JSON.parse(reader.result))
              }
              reader.readAsText(file)
            }, error => {
              Message.error('read ' + dataFile + ' file fail')
              console.log(error)
            })
          }, error => {
            Message.error('can not find ' + dataFile + ' file')
            console.log(error)
          })
        }, error => {
          Message.error('can not find ' + dataDirectory + ' folder')
          console.log(error)
        })
      } else {
        axios.get('./' + dataFile)
          .then(function (response) {
            context.commit('UPDATE_CAT', response.data)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
})
