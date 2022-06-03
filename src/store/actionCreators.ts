import * as actionTypes from "./actionTypes";

export function addTodoItem(item: ITodoItem) {
  const action: TodoAction = {
    type: actionTypes.ADD_TODO_ITEM,
    item,
  };

  return action;
}
