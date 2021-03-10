<template lang="html">
  <teleport to="body">
    <div v-if="isActive" class="modal">
      <div class="modal-background" @click="close()"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Item</p>
          <!-- <button class="delete" aria-label="close" @click="close()">close</button> -->
        </header>
        <section class="modal-card-body">

        <div class="field is-horizontal">
          <label class="label field-label">名前</label>
          <div class="control field-body">
            <input class="input" type="text" id="name"  v-model="item.name" maxlength="6" size="6"/>
          </div>
        </div>
        
        <div class="field is-horizontal">
          <label class="label field-label">説明</label>
          <div class="control field-body">
            <input class="input" type="text" id="short"  v-model="item.shortdescription"/>
          </div>
        </div>

        <div class="field is-horizontal">
          <label class="label field-label">概要</label>
          <div class="control field-body">
            <input class="input" type="text" id="desc"  v-model="item.description"/>
          </div>
        </div>


        <div class="field is-horizontal">
          <label class="label field-label">価格</label>
          <div class="control field-body">
            <input class="input" type="number" id="price"  v-model="item.price"/>
          </div>
        </div>

        <div class="field is-horizontal">
          <label class="label field-label">タグ</label>
          <div class="control field-body">
            <input class="input" type="text" id="tag" v-model="item.tags[0]"/>
          </div>
        </div>

        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="save">Save</button>
          <button class="button" @click="close()">Cancel</button>
        </footer>
      </div>
    </div>
  </teleport>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: "Posinput",
  data() {
    return {
      item: this.get_item(this.key),
    }
  },
  computed: {
    ...mapState({isActive: state => state.isActive, key: state => state.key}),
    ...mapGetters(['getItemByKey'])
  },
  methods: {
    get_item(key) {
      if (key) {
        return this.getItemByKey(key)
      } else {
        return { name:'',shortdescription:'',description:'',prince:0.0,tags:[]}
      }
    },
    save() {
      this.$store.dispatch('save', {key:this.key, item:this.item})
    },
    close() {
      this.$store.dispatch('close')
    }
  },
  created() {
  },
  watch: {
    isActive (nv) {
      this.item = nv? this.get_item(this.key) : null
    }
  }
};
</script>

<style>
.modal {
  position:absolute;
  top:0;right:0;bottom:0;left:0;
  background-color:rgba(0,0,0,.5);
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}
.modal-card {
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  background-color:white;
  width:50%;
  height:50%;
  padding:5px;
}
.modal-background {
  background-color: rgba(34, 32, 32, 0.5);
}
</style>