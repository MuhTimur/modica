interface ITodoItem {
  id?: number;
  text: string;
  isCrossed?: boolean;
}

type TodoState = {
  items: ITodoItem[];
};

type TodoAction = {
  type: string;
  item: ITodoItem;
};

type DispatchType = (args: TodoAction) => TodoAction;
