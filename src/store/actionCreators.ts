import * as actionTypes from "./actionTypes";

export function addTodoItem(item: ITodoItem) {
  const action: TodoAction = {
    type: actionTypes.ADD_TODO_ITEM,
    item,
  };

  return action;
}

export function crossTodoItem(item: ITodoItem) {
  const action: TodoAction = {
    type: actionTypes.CROSS_TODO_ITEM,
    item,
  };

  return action;
}

export function removeTodoItem(item: ITodoItem) {
  const action: TodoAction = {
    type: actionTypes.REMOVE_TODO_ITEM,
    item,
  };

  return action;
}
