import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import { addTodo, getAllTodos, toggleTodo } from "../../Redux/notesSlice";
import { CustomToast } from "../../utils/Toast";
import { AiFillDelete } from "react-icons/ai";
const AddTodo = () => {
  const todoList = useSelector(getAllTodos);
  const dispatch = useDispatch();
  const [inputTodo, setInputTodo] = useState({
    todoTitle: "",
    isCompleted: false,
  });
  const handleChange = (e) => {
    setInputTodo((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputTodo.todoTitle !== "") {
      dispatch(addTodo(inputTodo));
      CustomToast({
        title: "Todo Added",
        icon: "success",
      });
      setInputTodo({ todoTitle: "", isCompleted: false });
    } else {
      CustomToast({
        title: "Please add Title",
        icon: "error",
      });
    }
  };
  const handleToggleTodo = (e, id) => {
    dispatch(toggleTodo(id));
    // console.log("Inside Toggle Todo", id);
  };
  return (
    <div>
      <h2 className="fw-semibold  pb-2 mb-4 text-center">Add Todo</h2>
      <Row className="mt-5">
        <Col lg={"6"} className="mx-auto">
          <Row className="justify-content-center">
            <Col>
              <input
                type="text"
                name="todoTitle"
                className="form-control"
                placeholder="Add Todo"
                value={inputTodo.todoTitle}
                onChange={(e) => handleChange(e)}
              />
            </Col>
            <Col xs={"auto"}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => handleAddTodo(e)}
              >
                Add Todo
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mt-5">
        <h2 className="fw-semibold pb-2 mb-4 text-center">Todo List</h2>
        <Col lg={"6"} className="mx-auto">
          {todoList &&
            todoList.length !== 0 &&
            todoList.map((items, index) => {
              return (
                <React.Fragment key={index}>
                  <ul className="list-group" lg={12}>
                    <li className="list-group-item p-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultChecked={items.isCompleted}
                            id="flexCheckDefault"
                            onChange={(e) => handleToggleTodo(e, items.todoId)}
                          />
                        </div>
                        <h5 className="ms-3 mb-0">{items.todoTitle}</h5>
                        <AiFillDelete className="fs-20" />
                      </div>
                    </li>
                  </ul>
                </React.Fragment>
              );
            })}
        </Col>
      </Row>
    </div>
  );
};

export default AddTodo;
