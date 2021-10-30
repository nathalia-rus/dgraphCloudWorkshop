import "./App.css";
import { Todos, TodoType } from "react-todomvc";
import "react-todomvc/dist/todomvc.css";
import { GET_TODOS } from "./graphql/query";
import { useQuery, useMutation } from "@apollo/client";
import { ADD_TODO } from "./graphql/mutation";

// GraphQL constants

function App() {
  // Get data etc

  // ADD
  // make add a function that will execute the GraphQL mutation.
  const [add] = useMutation(ADD_TODO);
  const addNewTodo = async (value: string) => {
    add({
      variables: { todo: { value: value, completed: false } },
      refetchQueries: [{ query: GET_TODOS }],
    });
  };

  // GET
  const { loading, error, data } = useQuery(GET_TODOS);
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
