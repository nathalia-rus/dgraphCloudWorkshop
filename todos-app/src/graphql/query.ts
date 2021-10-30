import { gql } from "@apollo/client";

export const GET_TODOS = gql`
  query {
    queryTodo {
      id
      value
      completed
    }
  }
`;

// JSON OUTPUT
// {
//   "data": {
//     "queryTodo": [
//       {
//         "id": "TODOID001",
//         "value": "Figuring this out",
//         "completed": true
//       },
//       {
//         "id": "TODOID002",
//         "value": "Connecting it to app",
//         "completed": false
//       },
//       ...
//     ]
//   }
// }
