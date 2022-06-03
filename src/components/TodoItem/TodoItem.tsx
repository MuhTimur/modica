import React from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames";

import { crossTodoItem } from "../../store/actionCreators";
import Checkbox from "../Checkbox/Checkbox";
import styles from "./styles/TodoItem.module.scss";

interface Props {
  item: ITodoItem;
}

const Input = (props: Props) => {
  const { item } = props;

  const dispatch = useDispatch();

  const onCross = () => {
    dispatch(crossTodoItem(item));
  };

  return (
    <div className={styles.root}>
      <Checkbox id={"id_" + item.id} onCheck={onCross} isChecked={!!item.isCrossed} />
      <div
        className={classNames(styles.text, {
          [styles.crossedText]: item.isCrossed,
        })}
      >
        {item.text}
      </div>
    </div>
  );
};

export default React.memo(Input);
