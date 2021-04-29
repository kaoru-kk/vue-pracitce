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

new Vue({
  data: {
    name: 'kaoru'
  },
  // templateとかも全てrenderに変換されている（全て仮想DOMに）
  render: function(h) {
    // hと描かれることが多い
    // 仮想DOMを作る
    // 仮想ノードを返すもの
    console.log(h('h1', 'g_a ' + this.name) ) ;
    return h('h1', 'g_a ' + this.name );
  }
}).$mount('#app3')

// hはdocument.createElementとは違う
// DOMを作る
var div = document.createElement('div')
// DOM
console.log(document)
console.dir(document)
console.log(div)