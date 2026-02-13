import React from "react";
const coursetitle= "Math";
function App() {
  const studentname = "Ahmed";
  const student={name: "Ahmed",age: 20,track: 3.0};
  function sayHello() {
      return "Hello " + studentname + "!";}
  return (
    <div>
      <h1>Hello</h1>
      <p>This is{studentname}'s page</p>
      <p>Welcome to {coursetitle}, {studentname}</p>
      <label htmlFor="nameInput">Enter your name:</label>
      <input type="text" id="nameInput" />
      <p>This is {student.name}, they are {student.age} years old, they have a {student.track} gpa</p>
       <p>The sayHello function returns this: {sayHello()}</p>
    </div>
  );}
  export default App;
  //Why must React components start with a capital letter?
  //I dont know
  //What happens if you remove {} around the variable?
  //the literal text will return instead of the variable's content.
  // Can JSX read JavaScript directly without {}?
  //I dont know
  //Why is this variable still accessible inside the component?
  //because being defined outside means it's universally definied. The other way around wont work tho
  //When might this be a bad idea in a real application?
  //If you need for the variable to change. Because when defined outside, each time a command edits it, it will get bakc to the original form
  //What type of expression is allowed inside {}?
  //any variable name or variable name of a list
  //Why does React use htmlFor instead of for?
  //because for is a HTML command already (so it doesn't confuse the two)
  //One thing I understand well in this lab
  //basic summoning and initiation of functions
  //One thing that is still confusing
  //advnaced commands like if for i in range, etc
  //One mistake I made and fixed
  //the if command (I used ai to help)