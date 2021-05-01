<template>
  <div>
    <LikeHeader>
      <h1>こんにちは</h1>
    </LikeHeader>

    <LikeNumber :totalNumber="parent_number" v-on:button-click="parent_number = $event"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue';

export default {
  data(){
    return {
      parent_number: 12
    };
  },
  components: {
    LikeHeader
  },
  methods: {
    incrementParentNumber(value) {
      console.log(value);
      // ここの値変更は、子から親のデータを変えているのではなく、親が変えているという認識
      this.parent_number  = value + 10;
    }
  }
}

</script>
