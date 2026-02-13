import React from "react";

function App() {
  const name = "Ahmed";
  const courses = ["Finance", "Statistics", "Web Dev"];

  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>Current Courses:</p>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
