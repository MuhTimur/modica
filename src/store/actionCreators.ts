import * as actionTypes from "./actionTypes";
import { ControlPanelCategory } from "../components/ControlPanel/ControlPanel";

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

export function clearCompletedTodos() {
  const action: ClearTodosAction = {
    type: actionTypes.CLEAR_COMPLETED_TODOS,
  };

  return action;
}

export function categorySelected(category: ControlPanelCategory) {
  const action: CategorySelectedAction = {
    type: actionTypes.CATEGORY_SELECTED,
    category,
  };

  return action;
}
