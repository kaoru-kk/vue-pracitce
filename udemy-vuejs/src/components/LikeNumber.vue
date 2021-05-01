<template>
  <div>
    <p>いいね！{{ halfNumber }}</p>
    <button @click='increment'>plus 1</button>
  </div>
</template>

<script>
export default {
  props: {
    totalNumber: Number
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
      // 引数、１に値の名前、２に値
      // $emit、親コンポーネントのイベントを発火させるものというニュアンス
      this.$emit('button-click', this.totalNumber + 1);

      // これはNG,子から親は書き換えられない
      // vueのシステムは単方向のフローのみ
      // this.totalNumber += 1
    }
  }
}
</script>

<style scoped>
  div {
    border: 1px solid black
  }
</style>