import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { addTodoItem } from "../../store/actionCreators";
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

  const items: readonly ITodoItem[] = useSelector(
    (state: TodoState) => state.items
  );

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <h1 className={styles.appHeader}>todos</h1>
      </header>
      <Input onSubmit={(value: string) => onItemAdd(value)} />
      {items.map((item: ITodoItem) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default App;
