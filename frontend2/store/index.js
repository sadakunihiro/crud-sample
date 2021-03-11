export const state = () => ({
  isActive: false,
  items: [],
  key: null
})

export const getters = {
  getItemByKey: state => key => {
    return (key == null || key == "")? 
        {_id:null, name:'',shortdescription:'',description:'',price:0.0,tags:['']}
        : state.items.find(item => item._id == key)
  },
}

export const mutations = {
  on(state) {
    state.isActive = true
  },
  off(state) { state.isActive = false },
  setall (state, data) {
    state.items = data;
  },
  remove (state, key) {
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
  save (state, args) {
    const i = state.items.findIndex(val => val._id == args.key)
    if (i == -1) {
      state.items.push(args.item)
    } else {
      state.items[i] = args.item
    }
    state.isActive = false
  }
}

export const actions = {
  getall(context) {
    if (process.server) {
      console.log("getall URL:", process.env.VUE_APP_API_URL)
      this.$axios.$get(process.env.VUE_APP_API_URL)
         .then(data => context.commit('setall', data))
    }
  },
  save(context, args) {
    // catalog.saveProduct(args.key, args.item, result => ...
    if (args.item._id == null) {
      args.item._id = Math.random().toString(32).substring(2)
      console.log("store/index save() new key:", args.item._id)
    }
    context.commit('save', args)
  },
}
