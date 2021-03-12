<template>
<div class="Home">
  <ItemList />
  <Posinput />
</div>
</template>

<script>
import ItemList from '~/components/ItemList'
import Posinput from '~/components/Posinput'

export default {
  name: 'Home',
  components: {
    ItemList, Posinput
  },
  async fetch(context) {
    //console.log("index.vue/fetch/axios.defaults.baseURL:", context.$axios.defaults.baseURL)
    const res = await context.$axios.get('/')
    context.store.commit('setall', res.data)
  },
  asyncData(context) {
    console.log("index.vue/asyncData")
  }
}
</script>

<style>

</style>