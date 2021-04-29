Vue.component('hello', {
  template: '<p>使い回しコンポーネント</p>'
});

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


new Vue({
  el: '#app4',
  data: {
    name: 'kaoru'
  },
  beforeCreate: function() {
    console.log('before create')
  },
  created: function() {
    console.log('created!')
  },
  beforeMount: function() {
    console.log('beforeMount')
  },
  mounted: function() {
    console.log('Mounted')
  },
  beforeUpdate: function() {
    console.log('beforeUpdate')
  },
  updated: function() {
    console.log('updated')
  },
  beforeDestroy: function() {
    console.log('beforeDestroy')
  },
  destroyed: function() {
    console.log('destroyed')
  },
  methods: {
    destroy: function(){
      this.$destroy()
    }
  }
})