<template>
  <div>
    <slot></slot>
    <p>{{ headerText }}</p>
  </div>  
</template>

<script>
export default {
  props: {
    headerText: String
  }
}
</script>

<style scoped>
/* どちらにも書いたら親が優先される */
h1 {
  color: green;
}
</style>