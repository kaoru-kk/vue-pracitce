var component = {
  data: function(){
    return {
      number: 12
    }
  },
  template: '<p>favorite {{ number }}<button @click="increment">+1</button></p> ',
  methods: {
    increment: function(){
      this.number += 1
    }
  }
}

new Vue({
  el: '#app',
  // ローカル登録のやり方
  components: {
     'my-component': component
  }
})