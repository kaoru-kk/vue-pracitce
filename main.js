// これもできる
var data = {
  message: 'instance A'
}

var vm1 = new Vue({
  el: '#app1',
  data: data
})

// $ つける（data）

console.log(vm1.$data);