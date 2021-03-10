import { createStore } from 'vuex'
import catalog from '../api/catalog'


export default createStore({
  state: {
    items: [],
    isActive: false,
    key: null
  },
  getters: {
    getItemByKey: state => key => {
      return state.items.find(item => item._id == key)
    }
  },
  mutations: {
    setall (state, items) {
      state.items = items;
    },
    delete (state, key) {
      state.items = state.items.filter(item => item._id != key)
    },
    newone (state) {
      state.key = null
      state.isActive = true
    },
    edit (state, key) {
      state.key = key
      state.isActive = true
    },
    close (state) {
      state.isActive = false;
    },
    save (state, args) {
      if (args.key == null) {
        state.items.push(args.item)
      } else {
        state.items[args.key] = args.item
      }
      state.isActive = false
    }
  },
  actions: {
    getall({commit}) {
      catalog.getProducts(items => {
        commit('setall', items)
      })
    },
    delete({commit}, key) {
      commit('delete', key)
    },
    newone({commit}) {
      commit('newone')
    },
    edit({commit}, key) {
      commit('edit', key)
    },
    close({commit}) {
      commit('close')
    },
    save({commit}, args) {
      // catalog.saveProduct(args.key, args.item, result => ...
      args.item._id = Math.floor(Math.random()*1000000).toString
      commit('save', args)
    }
  },
  modules: {
  }
})
