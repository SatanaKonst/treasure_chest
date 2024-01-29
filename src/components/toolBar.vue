<template>
  <div class="section" id="toolBar">
    <div class="row">
      <div class="col-3 text-center"
           v-for="(item,index) in inventar"
           :key="index"
           @click="initAction(item)">
        <img :src="item.icon" alt="" height="50" width="50">
        <p>
          {{ item.count }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "toolBar",
  props: {
    inventar: Array
  },
  methods: {
    initAction(inventarItem) {
      if (inventarItem.actionEventStart === 'iconClick' && inventarItem.action !== null) {
        inventarItem.action();
      }
    }
  }
}
</script>

<style scoped>
#toolBar {
  max-height: 25vh;
  overflow-y: auto;
  overflow-x: hidden;
}

#toolBar p {
  color: white;
}
</style>