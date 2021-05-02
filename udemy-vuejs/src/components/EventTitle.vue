<template>
  <div>

    <label for="title">TITLE</label>

    <!-- v-model、input typetextの時は以下のことをしている -->
    <input 
      type="text"
      id='title'
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
    <pre>{{ value }}</pre>
  </div>
</template>

<script>
export default {
  props: ['value']
}
</script>