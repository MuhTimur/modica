import * as actionTypes from "./actionTypes";

const initialState: TodoState = {
  items: [
    { id: 1, text: "One", isCrossed: false },
    { id: 2, text: "Two", isCrossed: true },
  ],
};

const reducer = (
  state: TodoState = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case actionTypes.ADD_TODO_ITEM:
      const newItem: ITodoItem = {
        id: state.items.length + 1,
        text: action.item.text,
        isCrossed: false,
      };
      return {
        ...state,
        items: state.items.concat(newItem),
      };

    case actionTypes.CROSS_TODO_ITEM:
      return {
        ...state,
        items: state.items.map((item: ITodoItem) =>
          item.id === action.item.id
            ? { ...item, isCrossed: !item.isCrossed }
            : item
        ),
      };
  }
  return state;
};

export default reducer;
