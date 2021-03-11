<template>
    <div v-if="isActive" class="modal">
      <div class="modal-background" @click="off()"></div>
      <div class="modal-card">
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
            <input class="input" type="text" id="tag" v-model="item.tags"/>
          </div>
        </div>

        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="save()">Save</button>
          <button class="button" @click="off()">Cancel</button>
        </footer>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex'

export default {
  name: "Posinput",
  data() {
    return {
      item: {}
    }
  },
  computed: {
    ...mapState(['isActive', 'key']),
  },
  methods: {
    ...mapMutations(['on','off']),
    save() {
      this.$store.dispatch('save', {key:this.key, item:this.item})
    },
  },
  watch: {
    isActive (nv) {
      console.log("Posinput/watch key:",this.key)
      if (nv) {
        this.item = this.$store.getters.getItemByKey(this.key)
      }
    }
  }
};
</script>

<style>
.modal {
  position:absolute;
  top:0;right:0;bottom:0;left:0;
  height: 100%;
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
  padding:5px;
}
.modal-background {
  background-color: rgba(34, 32, 32, 0.5);
}
</style>