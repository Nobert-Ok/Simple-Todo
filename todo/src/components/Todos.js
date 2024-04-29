import TodoItems from "./TodoItems";

export default function Todos({ todos, setTodos }) {
  return (
    <div>
      {todos.map((items) => (
        <TodoItems
          key={items}
          items={items}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
