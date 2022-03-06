// const initState = [];

import { createSlice } from '@reduxjs/toolkit';

// const todoListReducer = (state = initState, action) => {
//   switch (action.type) {
//     case 'todoList/addTodo':
//       return [...state, action.payload];
//     case 'todoList/toggleTodoStatus':
//       return state.map((item) =>
//         item.id === action.payload
//           ? { ...item, completed: !item.completed }
//           : item
//       );
//     default:
//       return state;
//   }
// };

// export default todoListReducer;

export default createSlice({
  name: 'todoList',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
  },
});
