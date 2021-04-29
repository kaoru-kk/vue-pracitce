// これもできる
var data = {
  message: 'instance A'
}

var vm1 = new Vue({
  el: '#app1',
  data: data,
  computed: {
    myData: function() {
      return this.$data;
    }
  }
})

var vm2 = new Vue({
  el: '#app2',
  data: {
    name: 'kaoru'
  },
  // 長いものは使わない方が良さげ
  template: '<h1>hello {{ name }}</h1>'
})

// $mount (elプロパティの代わり)
// vm.$mount('#app1')
