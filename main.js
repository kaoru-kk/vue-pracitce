new Vue({
  el: '#app',
  data: {
    fruits: ['apple', 'banana', 'grape'],
    object: {
      firstName: 'tarou',
      lastName: 'yamada',
      age: 21
    }
  },
  methods: {
    removeForm: function(){
      this.fruits.shift()
    }
  }
})