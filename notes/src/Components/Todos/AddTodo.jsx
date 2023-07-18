import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import {
  addTodo,
  getAllTodos,
  removeTodo,
  toggleTodo,
} from "../../Redux/notesSlice";
import { CustomToast } from "../../utils/Toast";
import { AiFillDelete } from "react-icons/ai";
import CommonHeading from "../CommonHeading";
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
  const handleToggleTodo = (id) => {
    dispatch(toggleTodo({ id: id }));
  };
  return (
    <React.Fragment>
      <Row className="mt-5">
        <Col lg={8} className="mx-auto">
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

      <div className="mt-5">
        <CommonHeading key={"Viewtodo"} title={"Todo List"} />
        <Row>
          <Col lg={8} className="mx-auto">
            {todoList &&
              todoList.length !== 0 &&
              todoList.map((items, index) => {
                return (
                  <React.Fragment key={index}>
                    <ul className="list-group" lg={12}>
                      <li className="list-group-item p-3">
                        <Row className="align-items-center justify-content-between">
                          <Col xs={"auto"}>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked={items.isCompleted}
                              id="flexCheckDefault"
                              onChange={() => handleToggleTodo(items.todoId)}
                            />
                          </Col>
                          <Col className="d-flex justify-content-center">
                            <div>
                              <h5
                                className={`mb-0 ${
                                  items.isCompleted ? "todotext" : ""
                                }`}
                              >
                                <span>{items.todoTitle}</span>
                              </h5>
                            </div>
                          </Col>
                          <Col xs={"auto"}>
                            <button
                              type="button"
                              className="btn btn-link"
                              onClick={(e) =>
                                dispatch(removeTodo({ id: items.todoId }))
                              }
                            >
                              <AiFillDelete className="fs-20 text-primary" />
                            </button>
                          </Col>
                        </Row>
                      </li>
                    </ul>
                  </React.Fragment>
                );
              })}
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default AddTodo;
