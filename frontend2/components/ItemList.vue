<template>
  <div class="container">
    <table class="table">
      <tr>
        <th>名前</th>
        <th>概要</th>
        <th>説明</th>
        <th>値段</th>
        <th>タグ</th>
        <th>
          <a class="button" @click="newone()"><b-icon icon="plus-box"/></a>
        </th>
      </tr>
      <tr v-for="item in items" :key="item._id">
        <td>{{item.name}}</td>
        <td>{{item.shortdescription}}</td>
        <td>{{item.description}}</td>
        <td>{{item.price}}</td>
        <td>{{item.tags[0]}}</td>
        <td class="edit">
          <a class="button" @click="edit(item._id)"><b-icon icon="pencil" size="is-small"/></a>
          <a class="button" @click="remove(item._id)"><b-icon icon="delete" size="is-small"/></a>
        </td>
      </tr>
    </table>
    <div class="has-text-info">
      {{items.length}} 個
    </div>

  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'ItemList',
  computed: {
    ...mapState(['items']),
    ...mapGetters(['getItemByKey'])
  },
  methods: {
    ...mapMutations(['newone','edit','remove']),
  },
};
</script>

<style>
.button {
  border-width: 0;
  padding: 3px;
  color: coral;
}
.table {
  margin: 10px;
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
.edit {
  width: 60px;
}
</style>