import React, { useState } from "react";

function TodoList() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [nextId, setNextId] = useState(1); 

  const addTodoItem = () => {
    if (input.trim() === "") return;

    const item = {
      id: nextId,
      text: input,
      completed: false,
    };

    setTodoList((prev) => [...prev, item]);
    setInput("");
    setNextId((prev) => prev + 1);
  };

  const toggleCompleted = (id) => {
    setTodoList((prevList) =>
      prevList.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (id) => {
    setTodoList((prevList) => prevList.filter((t) => t.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodoItem}>Add</button>

      <ul>
        {todoList.map((t) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleCompleted(t.id)}
            />
            <span
              style={{
                textDecoration: t.completed ? "line-through" : "none",
              }}
            >
              {t.text}
            </span>
            <button onClick={() => deleteTodo(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
