<template>
  <div>
    <p>Home</p>
    <input type="text" placeholder="home">
  </div>
</template>

<script>
export default {

  // keepaliveを使っている時,destroyは使われない
  destroyed() {
    console.log('destroy!')
  },
  // これらが使える
  deactivated() {
    console.log('deactivated')
  },
  activated() {
    console.log('activated!')
  },
}
</script>