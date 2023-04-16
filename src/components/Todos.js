import React from "react";
import { TodoItem } from "./TodoItem";

const Todos = (props) => {
  return (
    <div className="container">
      <h3>Todos</h3>
      {props.todos.length == 0
        ? "No todos to display"
        : props.todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={props.sno} onDelete={props.onDelete}  onUpdate={props.onUpdate}/>
            );
          })}
    </div>
  );
};

export default Todos;
