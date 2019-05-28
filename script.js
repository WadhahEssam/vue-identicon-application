// The vue instance
//
// el : tells vue where the vue tamplate is , notice the difference 
// between vue and react at this point > in react , nothing is written 
// inside of the #app element , thats is because JSX can't be mixed with
// vue tamplates, in contracst vue tamplates are actually html code
// 
// the v-on or any other v are called directives that vue searches for 
// in the tamplates and connects them into the vue instance as you with
// and the v-on means that you are trying to define an event handler 
var app = new Vue({
  el: '#app',
  methods: {
    onInputChange: function(event) {
      console.log(event.target.value);
    }
  }
})