<template>
  <div>
    <p>いいね！{{ halfNumber }}</p>
    <button @click='increment'>plus 1</button>
  </div>
</template>

<script>
export default {
  // props: {
  //   totalNumber: Number
  // },
  props: {
    totalNumber: {
      // いろいろ設定かける
      type: Number,
      required: true,
      default: 2
      // オブジェクトしてでもかける（これは動かないけど）
      // default: function() {
      //   return {
      //     number: 4
      //   }
      // }
    }
  },
  computed: {
    halfNumber(){
      return this.totalNumber / 2
    }
  },
  data() {
    return {
      fav_number: 6
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