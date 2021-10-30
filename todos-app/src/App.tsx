import "./App.css";
import { Todos, TodoType } from "react-todomvc";
import "react-todomvc/dist/todomvc.css";
import { GET_TODOS } from "./graphql/query";
import { useQuery, useMutation, StoreObject, Reference } from "@apollo/client";
import { ADD_TODO, DELETE_TODO } from "./graphql/mutation";

// GraphQL constants

function App() {
  // Get data etc

  // make add a function that will execute the GraphQL mutation.
  const [add] = useMutation(ADD_TODO);
  const [del] = useMutation(DELETE_TODO);

  const addNewTodo = async (value: string) => {
    add({
      variables: { todo: { value: value, completed: false } },
      update(cache, { data }) {
        const existing: any = cache.readQuery({ query: GET_TODOS });
        cache.writeQuery({
          query: GET_TODOS,
          data: {
            queryTodo: [
              ...(existing ? existing.queryTodo : []),
              ...data.addTodo.todo,
            ],
          },
        });
      },
    });
  };

  const deleteTodo = async (id: string) => {
    del({
      variables: { id },
      update(cache, { data }) {
        data.deleteTodo.todo.map((t: StoreObject | Reference) =>
          cache.evict({ id: cache.identify(t) })
        );
      },
    });
  };

  // GET
  const { loading, error, data } = useQuery(GET_TODOS);
  const updateTodo = async (value: TodoType) => {};
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
