import React from "react";

import styles from "./styles/Input.module.scss";

interface Props {
  onSubmit: (value: string) => void;
}

const Input = ({ onSubmit }: Props) => {
  const [enteredText, setEnteredText] = React.useState("");

  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      onSubmit(enteredText);
      setEnteredText("");
    }
  };

  return (
    <input
      className={styles.root}
      value={enteredText}
      onChange={(e) => setEnteredText(e.target.value)}
      onKeyPress={onKeyPress}
      placeholder="What needs to be done?"
    />
  );
};

export default React.memo(Input);
