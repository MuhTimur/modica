import Input from "../Input/Input";
import styles from "./styles/App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <h1 className={styles.appHeader}>todos</h1>
      </header>
      <Input onSubmit={(value: string) => console.log(value)} />
    </div>
  );
}

export default App;
