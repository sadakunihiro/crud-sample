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
    console.log("index.vue fetch: url:", process.env.VUE_APP_API_URL)
    const res = await context.$axios.get(process.env.VUE_APP_API_URL)
    context.store.commit('setall', res.data)
  },
  asyncData(context) {
    //console.log("index.vue asyncData")
  }
}
</script>

<style>

</style>