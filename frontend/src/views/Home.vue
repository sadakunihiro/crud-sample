<template>
  <div class="home">
    <ItemList />
    <posinput />
  </div>
</template>

<script>
// @ is an alias to /src
import ItemList from '../components/ItemList.vue'
import Posinput from '../components/Posinput.vue'

export default {
  name: 'Home',
  components: {
    ItemList, Posinput
  }
}
</script>
