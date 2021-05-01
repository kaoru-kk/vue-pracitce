<template>
  <p>いいね！{{ fav_number }}</p>
  <!-- root要素は１つではないとだめなので以下はエラー -->
  <!-- <p>this is error</p> -->
</template>

<script>
export default {
  data() {
    return {
      fav_number: 19
    };
  }
}
</script>