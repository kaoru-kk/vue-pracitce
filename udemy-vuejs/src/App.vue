<template>
  <div>
    <LikeHeader headerText="hello">
      <!-- v-slotの引数１は適当な名前 (must template tag)-->
      <template v-slot:title>
          <h1>こんにちは</h1>
      </template>

      <template v-slot:like-number>
        <h1>トータルのいいね数は</h1>
        <p>{{ parent_number }}</p>  
      </template>
    </LikeHeader>

    <LikeNumber :totalNumber="parent_number" v-on:button-click="parent_number = $event"></LikeNumber>
    <LikeNumber :totalNumber="parent_number" @button-click="parent_number = $event"></LikeNumber>
    <!-- これでもできる -->
    <LikeNumber :totalNumber="parent_number" @button-click="incrementParentNumber"></LikeNumber>
    
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

<style scoped>
/* どちらにも書いたら親が優先される */
h1 {
  color: red;
}
</style>
