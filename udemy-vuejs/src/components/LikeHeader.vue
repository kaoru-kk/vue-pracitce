<template>
  <div>
    <!-- slotの中身がないときに、slotタグの中のものが読み込まれる -->
    <!-- フォールバックコンテンツ -->
    <slot name='title'>
      <h1>デフォルトのタイトル</h1>
    </slot>

    <hr>
    <!-- 名前つきslot -->
    <slot name='like-number'>
      <p>ロールバックテキスと</p>
      <h1>ロールバックテキスと</h1>
    </slot>

    <!-- default slot -->
    <!-- name='default'も同じになる -->
    <!-- 名前付きslotを省いたものがここに入る -->
    <slot></slot>

  </div>
</template>

<script>
export default {
  props: {
    headerText: String
  }
}
</script>

<style scoped>
/* どちらにも書いたら親が優先される */
h1 {
  color: green;
}
</style>