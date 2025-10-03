import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import "./Todo.css";
const Todo = () => {
  const [inputValue, setInputValue] = useState("");

  const [task, setTask] = useState([]);
  const [time, setTime] = useState("");

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const handleTaskSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) return;

    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }

    setTask((prevTask) => [...prevTask, inputValue]);
    setInputValue("");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="todo-container">
      <header>
        <h1>TODO APP</h1>
        <h2>{time}</h2>
      </header>
      <section>
        <div>
          <form onSubmit={handleTaskSubmit}>
            <input type="text" onChange={handleInputValue} value={inputValue} />
            <button type="submit">Add Task</button>
          </form>
        </div>
      </section>
      <section>
        <ul>
          {task.map((curElem, index) => {
            return (
              <li key={index}>
                <span>{curElem}</span>
                <span className="check-btn">
                  <FaCheck />
                </span>
                <span className="delete-btn">
                  <MdDeleteForever />
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Todo;
