import { createSelector } from '@reduxjs/toolkit';

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  filterPrioritiesSelector,
  searchTextSelector,
  (todoList, status, priorities, searchText) => {
    return todoList.filter(
      (item) =>
        item.name.includes(searchText) &&
        (status === 'All' ||
          (status === 'Completed' && item.completed) ||
          (status !== 'Completed' && !item.completed)) &&
        (!priorities.length || priorities.includes(item.priority))
    );
  }
);
