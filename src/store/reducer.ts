import * as actionTypes from "./actionTypes";
import { ControlPanelCategory } from "../components/ControlPanel/ControlPanel";

const initialState: TodoState = {
  items: [
    { id: 1, text: "One", isCrossed: false },
    { id: 2, text: "Two", isCrossed: true }
  ],
  selectedCategory: ControlPanelCategory.ALL
};

const reducer = (state: TodoState = initialState, action: any): TodoState => {
  switch (action.type) {
    case actionTypes.ADD_TODO_ITEM:
      return {
        ...state,
        items: [
          {
            id: state.items.length + 1,
            text: action.item.text,
            isCrossed: false
          } as ITodoItem
        ].concat(state.items)
      };

    case actionTypes.CROSS_TODO_ITEM:
      return {
        ...state,
        items: state.items.map((item: ITodoItem) =>
          item.id === action.item.id
            ? { ...item, isCrossed: !item.isCrossed }
            : item
        )
      };

    case actionTypes.REMOVE_TODO_ITEM:
      return {
        ...state,
        items: state.items.filter(
          (item: ITodoItem) => item.id !== action.item.id
        )
      };

    case actionTypes.CLEAR_COMPLETED_TODOS:
      return {
        ...state,
        items: state.items.filter((item: ITodoItem) => !item.isCrossed)
      };

    case actionTypes.CATEGORY_SELECTED:
      return {
        ...state,
        selectedCategory: action.category
      };
  }
  return state;
};

export default reducer;
