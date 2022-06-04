import React from "react";

import styles from "./styles/RemoveButton.module.scss";

interface Props {
  isVisible: boolean;

  onClick: () => void;
}

const RemoveButton = ({ isVisible, onClick }: Props) => {
  return (
    (isVisible && <span className={styles.root} onClick={onClick} />) || null
  );
};

export default React.memo(RemoveButton);
