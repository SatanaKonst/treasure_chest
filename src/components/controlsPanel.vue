<template>
  <div class="controls-panel">
    <div class="container pt-2">
      <template v-if="open()===true">
        <div class="row">
          <div class="col-12 mb-3 text-center" v-html="question.text">
          </div>
          <div class="col-12">
            <component :is="renderComponent()"
                       v-if="question.complete===false"
                       :question="question"
                       @answer="setAnswer"
            ></component>
            <div class="alert alert-success text-center" v-else>
              Ответ на вопрос получен!
              <button type="button" class="btn btn-success w-100" @click="$emit('close')">X</button>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="alert alert-warning text-center">
          Для прохождения задания не хватает {{ question.needCristalls }} кристаллов!
          <button type="button" class="btn btn-danger w-100" @click="$emit('close')">X</button>
        </div>

      </template>

    </div>
  </div>
</template>

<script>
import radioVariantsType from "./questionTypes/radioVariantsType.vue"
import checkboxVariantsType from "./questionTypes/checkboxVariantsType.vue"
import textVariantsType from "./questionTypes/textVariantsType.vue"

export default {
  name: 'controlsPanel',
  props: {
    question: Object,
    inventar: Object
  },
  components: {
    radioVariantsType,
    checkboxVariantsType,
    textVariantsType
  },
  data() {
    return {}
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
      this.$props.question.userAnswer = $event;
      if (this.$props.question.actionAnswer !== null) {
        this.$props.question.actionAnswer();
      }
    },
    renderComponent() {
      switch (this.$props.question.type) {
        case 'radio-variants':
          return 'radio-variants-type';
        case 'checkbox-variants':
          return 'checkbox-variants-type';
        case 'text-variants':
          return 'text-variants-type';
      }
    }
  }
}
</script>

<style scoped>
.controls-panel {
  min-height: 35vh;
  background-color: rgb(255 255 255 / 73%);
  border-radius: 10px;
  margin: 5px;
}
</style>