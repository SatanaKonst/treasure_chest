<template>
  <div class="section">
    <ul class="list-group">
      <li class="list-group-item" v-for="(variant,index) in question.variants" :key="index">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" :id="'variant'+index" :value="variant"
                 v-model="answer">
          <label class="form-check-label" :for="'variant'+index">
            {{ variant }}
          </label>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "checkboxVariantsType",
  props: {
    question: Object
  },
  data() {
    return {
      answer: []
    }
  },
  watch: {
    answer() {
      this.$emit('answer', this.answer)
    }
  }
}
</script>


<style scoped>

</style>