import React from "react";

import styles from "./styles/Checkbox.module.scss";

interface Props {
  id: string;
  isChecked: boolean;

  onCheck: () => void;
}

const Checkbox = ({ id, isChecked, onCheck }: Props) => {
  return (
    <div className={styles.root}>
      <input
        className={styles.checkbox}
        checked={isChecked}
        type="checkbox"
        onChange={onCheck}
        id={id}
      />
      <label htmlFor={id}></label>
    </div>
  );
};

export default React.memo(Checkbox);
