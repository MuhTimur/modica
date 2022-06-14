import React, { useState } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames";

import { crossTodoItem, removeTodoItem } from "../../store/actionCreators";
import Checkbox from "../Checkbox/Checkbox";
import RemoveButton from "../RemoveButton/RemoveButton";
import styles from "./styles/TodoItem.module.scss";

interface Props {
  item: ITodoItem;
}

const TodoItem = ({ item }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  const onCross = () => {
    dispatch(crossTodoItem(item));
  };

  const onRemove = () => {
    dispatch(removeTodoItem(item));
  };

  return (
    <div
      className={styles.root}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Checkbox
        id={"id_" + item.id}
        onCheck={onCross}
        isChecked={!!item.isCrossed}
      />
      <div
        className={classNames(styles.text, {
          [styles.crossedText]: item.isCrossed
        })}
      >
        {item.text}
      </div>
      <RemoveButton isVisible={isHovered} onClick={onRemove} />
    </div>
  );
};

export default React.memo(TodoItem);
