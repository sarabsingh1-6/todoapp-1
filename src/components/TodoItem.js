import React from "react";

export const TodoItem = ({ todo, onDelete, onUpdate }) => { // here we can user props as well but we can use method like this also what we are getting will write 
  return (
    <div>
      {/* with props then we need to do somthing like this props.todo */}
      <h4>{todo.title}</h4> 
      <p>{todo.desc}</p>
      <button className="btn btn-danger" onClick={()=>{onDelete(todo)}}> Delete </button>

      <button className="btn btn-danger" onClick={()=>{onUpdate(todo)}}> Update </button>

    </div>
  );
};

//export default TodoItmes;
