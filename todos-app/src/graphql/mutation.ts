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

// useMutation hook will turn the above to executable function
