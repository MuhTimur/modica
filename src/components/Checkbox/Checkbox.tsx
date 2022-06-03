import React from "react";

import styles from "./styles/Checkbox.module.scss";

interface Props {
  id: string;

  onCheck: () => void;
}

const Input = ({ id, onCheck }: Props) => {
  return (
    <div className={styles.root}>
      <input
        className={styles.checkbox}
        type="checkbox"
        onClick={onCheck}
        id={id}
      />
      <label htmlFor={id}></label>
    </div>
  );
};

export default React.memo(Input);
