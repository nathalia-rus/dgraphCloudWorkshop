import "./App.css";
import { Todos, TodoType } from "react-todomvc";
import "react-todomvc/dist/todomvc.css";

// GraphQL constants

function App() {
  // Get data etc

  const todos: [] = [];

  const addNewTodo = async (value: string) => {};
  const updateTodo = async (value: TodoType) => {};
  const deleteTodo = async (id: string) => {};
  const clearCompletedTodos = async () => {};

  return (
    <>
      <Todos
        todos={[...todos]}
        addNewTodo={addNewTodo}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        clearCompletedTodos={clearCompletedTodos}
      />
    </>
  );
}

export default App;
