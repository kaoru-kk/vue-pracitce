<template>
  <p>いいね！{{ fav_number }}</p>
</template>

<script>
export default {
  // es5
  // data: function(){
  //   return {
  //     fav_number: 100
  //   }
  // }

  // es6
  data() {
    return {
      fav_number: 19
    };
  }
}
</script>

<style>
</style>
