import { useEffect, useState } from "react";
import "./styles.css";
import { NewTodoFrom } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    // Function to toggle todos
    setTodos((currentTodos) => {
      return currentTodos.map((todos) => {
        if (todos.id === id) {
          return { ...todos, completed };
        }

        return todos;
      });
    });
  }

  function deleteTodos(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todos) => todos.id !== id);
    });
  }
  return (
    <>
      <NewTodoFrom onSubmit={addTodo} />
      <h1 class="text-3xl font-bold underline">TO-DO-LIST</h1>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodos={deleteTodos}
      />
    </>
  );
}
