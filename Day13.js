//this keyword
function sayMyName(name){
    console.log(`my name is ${name}`)
}
sayMyName(' Walter White ')

//this keyword - implicit binding
const person = {
 name :"sai",
  myName: function() {
    console.log(`my name is ${this.name}`)
    
  },
}
person.myName()

//this keyword -explicit binding
function myName(){
    console.log(`my name is ${this.man}`)
}
myName.call(person)


//new binding

function Person(name){
  this.name= name;

}
const p1 = new Person("sai")
const p2 = new Person("dhanush");
