import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  addTodoItem,
  categorySelected,
  clearCompletedTodos,
} from "../../store/actionCreators";
import ControlPanel, {
  ControlPanelCategory,
} from "../ControlPanel/ControlPanel";
import Input from "../Input/Input";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./styles/App.module.scss";

function App() {
  const dispatch = useDispatch();

  const onItemAdd = (text: string) => {
    dispatch(
      addTodoItem({
        text,
      })
    );
  };

  const onClearCompletedTodos = () => {
    dispatch(clearCompletedTodos());
  };

  const onCategorySelected = (category: ControlPanelCategory) => {
    dispatch(categorySelected(category));
  };

  const items: readonly ITodoItem[] = useSelector(
    (state: TodoState) => state.items
  );

  const activeCategory: ControlPanelCategory = useSelector(
    (state: TodoState) => state.selectedCategory
  );

  const itemsLeftCount = items.filter(
    (item: ITodoItem) => !item.isCrossed
  ).length;

  const filteredItems =
    activeCategory === ControlPanelCategory.ALL
      ? items
      : activeCategory === ControlPanelCategory.ACTIVE
      ? items.filter((item: ITodoItem) => !item.isCrossed)
      : items.filter((item: ITodoItem) => item.isCrossed);

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <h1 className={styles.header}>todos</h1>
      </header>
      <div className={styles.content}>
        <Input onSubmit={onItemAdd} />
        {filteredItems.map((item: ITodoItem) => (
          <TodoItem key={item.id} item={item} />
        ))}
        <ControlPanel
          numberOfElements={itemsLeftCount}
          activeCategory={activeCategory}
          onClearCompleted={onClearCompletedTodos}
          onCategorySelected={onCategorySelected}
        />
      </div>
    </div>
  );
}

export default App;
