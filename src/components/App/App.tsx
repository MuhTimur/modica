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
    <div className={styles.root}>
      <header className={styles.header}>
        <h1 className={styles.header}>todos</h1>
      </header>
      <div className={styles.content}>
        <Input onSubmit={(value: string) => onItemAdd(value)} />
        {items.map((item: ITodoItem) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
