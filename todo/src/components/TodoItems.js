export default function TodoItems({ items, todos, setTodos }) {
  function handleDeletion(items) {
    setTodos(todos.filter((todo) => todo !== items));
  }

  return (
    <div>
      <h3>
        {" "}
        {items} <button onClick={() => handleDeletion(items)}>x</button>{" "}
      </h3>
    </div>
  );
}
