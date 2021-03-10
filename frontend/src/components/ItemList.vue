<template lang="html">
  <div class="box">
    <table class="table is-narrow is-hoverable is-fullwidth">
      <tr>
        <th>名前</th>
        <th>概要</th>
        <th>説明</th>
        <th>値段</th>
        <th>タグ</th>
        <th>
          <a class="button" @click="on_add"><span class="add">Add</span></a>
        </th>
      </tr>
      <tr v-for="item in items" :key="item._id">
        <td>{{item.name}}</td>
        <td>{{item.shortdescription}}</td>
        <td>{{item.description}}</td>
        <td>{{item.price}}</td>
        <td>{{item.tags[0]}}</td>
        <td>
          <a class="button" @click="on_pencil(item._id)"><span class="edit">Edit</span></a><br>
          <a class="button" @click="on_trash(item._id)"><span class="delete">Delete</span></a>
        </td>
      </tr>
    </table>
    <div class="has-text-info">
        {{numOfItems}} items
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'ItemList',
  computed: mapState({
      items: state => state.items,
      numOfItems: state => Object.keys(state.items).length
  }),
  methods: {
    on_add() {
      this.$store.dispatch('newone')
    },
    on_pencil(key) { // edit
      this.$store.dispatch('edit', key)
    },
    on_trash(key) { // delete
      this.$store.dispatch('delete', key)
    },
  },
  created() {
    this.$store.dispatch('getall')
  }
};
</script>

<style>
.box {
  margin: 10px;
}
.button {
  border-width: 0;
  color: blue;
}
.delete {
  color: red;
}
.add {
  color: green
}
.table {
  border-collapse: collapse;
}
.table th, .table td {
  border: solid 1px darkgray;
}
.table td {
  text-align: left;
}
.has-text-info {
  text-align: right;
}
</style>