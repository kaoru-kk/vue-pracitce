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