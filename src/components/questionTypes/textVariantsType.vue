<template>
  <div class="section">
    <label class="form-check-label" for="textVariant">
      Ответ
    </label>
    <input class="form-control" type="text" id="textVariant" v-model="answer">
  </div>
</template>
<script>
export default {
  name: "textVariantsType",
  props: {
    question: Object
  },
  data() {
    return {
      answer: ''
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