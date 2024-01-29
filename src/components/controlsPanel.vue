<template>
  <div class="controls-panel">
    <div class="container alert-link">
      <div class="row" v-if="open()===true">
        <div class="col-12">
          {{ question.text }}
        </div>
        <div class="col-12">
          <component :is="renderComponent()"
                     :question="question"
                     @answer="setAnswer"
          ></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import variantsType from "./questionTypes/variantsType.vue"

export default {
  name: 'controlsPanel',
  props: {
    question: Object,
    inventar: Object
  },
  components: {
    variantsType
  },
  data() {
    return {}
  },
  mounted() {

  },
  methods: {
    open() {
      let cristalInInventar = 0;
      for (let key in this.$props.inventar) {
        let tmp = key.split('_');
        if (tmp[0] === 'cristal') {
          cristalInInventar += this.$props.inventar[key].count;
        }
      }

      return cristalInInventar >= this.$props.question.needCristalls;
    },
    setAnswer($event) {
      console.log($event)
      if (this.$props.question.actionAnswer !== null) {
        this.$props.question.actionAnswer();
      }
    },
    renderComponent() {
      switch (this.$props.question.type) {
        case 'variants':
          return 'variants-type';
      }
    }
  }
}
</script>

<style scoped>
.controls-panel{
  min-height: 35vh;
  background-color: rgb(255 255 255 / 73%);
  border-radius: 10px;
  margin: 5px;
}
</style>