// The vue instance
//
// el : tells vue where the vue tamplate is , notice the difference 
// between vue and react at this point > in react , nothing is written 
// inside of the #app element , thats is because JSX can't be mixed with
// vue tamplates, in contracst vue tamplates are actually html code.
// 
// the v-on or any other v are called directives that vue searches for 
// in the tamplates and connects them into the vue instance as you with
// and the v-on means that you are trying to define an event handler.
//
// Imperative VS Declarative Programming styles.
// Imparative ) is what we used to do in the web for so long, and in this
// style we should do exaclty what our application should do step by step.
// Declarative ) we tell our application the rules that it should follow
// and then every thiing flows smoothily ( like the state in react ) it is
// easier to discribe it as state driven development style.
//
// data : variables that will serve as an intial state for our app 
// methods : fucntions that changes data
// computed : functions that turns the data into a viewable form
//
// this.(name of variable) > this changes the state (this.setState)
// if you want to create a new state , you write (this.data.inputText) 
// both of those will cause the whole html to rerender again
// 
// you can simply move the code inside the #app div and put it in the
// tamplate option, and this is the way how it is going to be used
// when writing actual applications 

console.log(window.jdenticon);
var app = new Vue({
  el: '#app',
  data: {
    inputText: '',
  },
  computed: { 
    identicon: function() {
      if(this.inputText == '') {
        return `<h3>No Input Yet<h3>`;
      }
      return `
        <img src="https://identicon-api.herokuapp.com/${this.inputText}/200/?format=png">
      `; 
    }
  },
  methods: {
    onInputChange: function(event) {
      this.inputText = event.target.value;
      console.log(event.target.value);
    }
  },
})