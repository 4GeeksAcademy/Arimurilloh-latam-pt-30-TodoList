import React, { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (inputValue) {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>TodoList</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
            placeholder="Write your task here"
          />
        </li>
        {tasks.map((item, index) => (
          <li key={index} className="task-item">
            <span>{item}</span>
            <i
              className="fa-solid fa-square-minus delete-icon"
              onClick={() => deleteTask(index)}
            ></i>
          </li>
        ))}
      </ul>
      <div>{tasks.length} tasks</div>
    </div>
  );
};

export default Home;
