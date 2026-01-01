import React, { useState } from "react";
import "./TodoApp.css";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    const updatedTasks = [...tasks, task.trim()].sort();
    setTasks(updatedTasks);
    setTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <main id="todo-app">
      <h2 id="todo-title">Todo List</h2>

      <section id="todo-input-section">
        <label htmlFor="task-input" id="task-label">
          <strong>Enter the task:</strong>
        </label>
        <input
          id="task-input"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a task"
          data-testid="task-input"
        />
        <button id="add-task-btn" onClick={addTask} data-action="add">
          Add
        </button>
      </section>

      <section id="todo-list-section">
        {tasks.length === 0 ? (
          <p id="empty-message">No tasks yet. Add one above!</p>
        ) : (
          <ul id="task-list">
            {tasks.map((t, index) => (
              <li key={index} data-task={t}>
                <span className="task-text">{t}</span>{" "}
                <button
                  className="delete-btn"
                  onClick={() => deleteTask(index)}
                  data-action="delete"
                  aria-label={`Delete ${t}`}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default TodoApp;
