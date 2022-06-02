import styles from "./styles/App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <h1 className={styles.appHeader}>todos</h1>
      </header>
    </div>
  );
}

export default App;
