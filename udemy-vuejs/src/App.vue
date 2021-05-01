<template>
  <div>
    <LikeHeader></LikeHeader>
    <p>{{ parent_number }}</p>
    <LikeNumber :totalNumber="4"></LikeNumber>
    <LikeNumber :totalNumber="8"></LikeNumber>
    <LikeNumber :totalNumber="parent_number"></LikeNumber>
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
  }
}

</script>
