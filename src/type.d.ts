interface ITodoItem {
  id?: number;
  text: string;
  isCrossed?: boolean;
}

type TodoState = {
  items: ITodoItem[];
  selectedCategory: ControlPanelCategory;
};

type TodoAction = {
  type: string;
  item: ITodoItem;
};

type ClearTodosAction = {
  type: string;
};

type CategorySelectedAction = {
  type: string;
  category: ControlPanelCategory;
};

type DispatchType = (args: TodoAction) => TodoAction;
