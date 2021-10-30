import "./App.css";
import { Todos, TodoType } from "react-todomvc";
import "react-todomvc/dist/todomvc.css";
import { GET_TODOS } from "./graphql/query";
import { useQuery } from "@apollo/client";

// GraphQL constants

function App() {
  // Get data etc

  const { loading, error, data } = useQuery(GET_TODOS);

  const addNewTodo = async (value: string) => {};
  const updateTodo = async (value: TodoType) => {};
  const deleteTodo = async (id: string) => {};
  const clearCompletedTodos = async () => {};

  if (loading) return <p>Loading todos...</p>;
  if (error) return <p>`Error: ${data.message}`</p>;

  return (
    <>
      <Todos
        todos={[...data.queryTodo]}
        addNewTodo={addNewTodo}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        clearCompletedTodos={clearCompletedTodos}
      />
    </>
  );
}

export default App;
