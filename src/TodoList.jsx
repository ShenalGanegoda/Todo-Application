import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodos }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No todos:("}
      {todos.map((todos) => {
        // Looping through the Todos array instead of hard coding the values.
        return (
          <TodoItem
            {...todos}
            key={todos.id}
            toggleTodo={toggleTodo}
            deleteTodos={deleteTodos}
          />
        );
      })}
    </ul>
  );
}
