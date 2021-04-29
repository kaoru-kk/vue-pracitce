var vm1 = new Vue({
  el: '#app1',
  data: {
    message: 'instance A'
  }
})
// 外側から書き換えられる
vm1.message = 'value is change';
// 後付けできるけど、再更新はできない（リアクティブシステムが関係）
// vueインスタンスを作成したときに、ゲッターとセッターを用意
// 後付けしたらこれらが用意されないから再更新不可
vm1.name = 'hogehoge'
// nameのゲッターとセッターがないこと確認
console.log(vm1)

// 2個作れる（あまりしない方がいいけど）
var vm2 = new Vue({
  el: '#app2',
  data: {
    message: 'instance B'
  },
  methods:{
    changeInstance: function() {
      // vm2からvm1の書き換え
      vm1.message = 'change from vm2'
    }
  }
})