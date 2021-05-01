<template>
  <div>
    <p>いいね！{{ fav_number }}</p>
    <button @click='increment'>plus 1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fav_number: 19
    };
  },
  methods: {
    increment(){
      this.fav_number += 1;
    }
  }
}
</script>

<style scoped>
  div {
    border: 1px solid black
  }
</style>