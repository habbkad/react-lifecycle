import React, { useState, useEffect } from "react";
import axios from "axios";

const Functionallifecycle = () => {
  const [todos, settodos] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(function (response) {
        // handle success
        settodos(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  console.log(todos);
  return (
    <div>
      <h1>Functional Lifecycle</h1>
      {todos.map((todo) => {
        return (
          <div key={todo.div}>
            <h3>{todo.title}</h3>
            <h3>{todo.completed.toString()}</h3>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Functionallifecycle;
