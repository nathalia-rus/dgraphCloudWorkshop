import { gql } from "@apollo/client";

// "adding GraphQL variables to tell GraphQL that the mutation expects some input:
// a bit like a typed function definition that expects an argument $todo,
// that's passed on to the actual addTodo(input: [$todo]) mutation in Slash GraphQL"

export const ADD_TODO = gql`
  mutation addTodo($todo: AddTodoInput!) {
    addTodo(input: [$todo]) {
      todo {
        id
        value
        completed
      }
    }
  }
`;

// JSON res example:
// "data": {
//   "addTodo": {
//     "todo": [
//       {
//         "id": "0x7a8ac2f48",
//         "value": "New Todo Example",
//         "completed": false
//       }
//     ]
//   }
// }

export const UPDATE_TODO = gql`
  mutation updateTodo($id: ID!, $todo: TodoPatch!) {
    updateTodo(input: { filter: { id: [$id] }, set: $todo }) {
      todo {
        id
        value
        completed
      }
    }
  }
`;

export const DELETE_TODO = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(filter: { id: [$id] }) {
      todo {
        id
      }
    }
  }
`;

export const CLEAR_COMPLETED_TODOS = gql`
  mutation clearTodo {
    deleteTodo(filter: { completed: true }) {
      todo {
        id
      }
    }
  }
`;

// useMutation hook will turn the above to executable functions
