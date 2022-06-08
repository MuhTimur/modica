import React from "react";
import classNames from "classnames";

import styles from "./styles/ControlPanel.module.scss";

export enum ControlPanelCategory {
  ALL,
  ACTIVE,
  COMPLETED,
}

interface Props {
  numberOfElements: number;
  activeCategory: ControlPanelCategory;

  onClearCompleted: () => void;
  onCategorySelected: (category: ControlPanelCategory) => void;
}

const ControlPanel = ({
  numberOfElements,
  activeCategory,
  onClearCompleted,
  onCategorySelected,
}: Props) => {
  const areAllSelected = activeCategory === ControlPanelCategory.ALL;
  const areActiveSelected = activeCategory === ControlPanelCategory.ACTIVE;
  const areCompletedSelected =
    activeCategory === ControlPanelCategory.COMPLETED;

  return (
    <div className={styles.root}>
      <span>
        {numberOfElements} item{numberOfElements === 1 || "s"} left
      </span>
      <span
        className={classNames(styles.menuItem, {
          [styles.selected]: areAllSelected,
        })}
        onClick={() => onCategorySelected(ControlPanelCategory.ALL)}
      >
        All
      </span>
      <span
        className={classNames(styles.menuItem, {
          [styles.selected]: areActiveSelected,
        })}
        onClick={() => onCategorySelected(ControlPanelCategory.ACTIVE)}
      >
        Active
      </span>
      <span
        className={classNames(styles.menuItem, {
          [styles.selected]: areCompletedSelected,
        })}
        onClick={() => onCategorySelected(ControlPanelCategory.COMPLETED)}
      >
        Completed
      </span>
      <span className={styles.pointed} onClick={onClearCompleted}>
        Clear completed
      </span>
    </div>
  );
};

export default React.memo(ControlPanel);
