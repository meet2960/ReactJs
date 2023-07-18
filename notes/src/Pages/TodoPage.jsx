import React from "react";
import AddTodo from "../Components/Todos/AddTodo";
import CommonHeading from "../Components/CommonHeading";

const TodoPage = () => {
  return (
    <div>
      <CommonHeading key={"Todo"} title={"Add Todo"} />
      <AddTodo />
    </div>
  );
};

export default TodoPage;
