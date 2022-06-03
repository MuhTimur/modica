import React from "react";
import { useDispatch } from "react-redux";

import Checkbox from "../Checkbox/Checkbox";
import styles from "./styles/TodoItem.module.scss";

interface Props {
  item: ITodoItem;
}

const Input = (props: Props) => {
  const { item } = props;

  const dispatch = useDispatch();

  const onCross = () => {
    // dispatch(addTodoItem(...))
  };

  return (
    <div className={styles.root}>
      <Checkbox id={"id_" + item.id} onCheck={onCross} />
      <div className={styles.text}>{item.text}</div>
    </div>
  );
};

export default React.memo(Input);
