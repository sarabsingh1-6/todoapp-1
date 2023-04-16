import "./App.css";
//import TodoItmes from "./components/TodoItmes";
import Todos from "./components/Todos";
import React, { useState } from "react";
import { AddTodo } from "./components/AddTodo";
import { useEffect } from "react";
import Header from "./components/Header";

function App() {
  let intiTodo;
  if (localStorage.getItem("todos") === null) {
    intiTodo = [];
  } else {
    intiTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("on delete", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("i am adding todo", title, desc);
    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    setTodos([...todos, myTodo]);
  };

  const onUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };


  const [todos, setTodos] = useState(intiTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <Header />
      <AddTodo addTodo={addTodo} />
      {/* here we are sending "todos" and "ondelete" to the todos component*/}
      <Todos todos={todos} onDelete={onDelete} onUpdate={onUpdate}/>


      {/* <TodoForm /> */}
    </div>
  );
}

export default App;
