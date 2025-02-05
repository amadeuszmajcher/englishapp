import { useCallback, useState } from "react";
import styles from "./App.module.css";
import { Panel } from "./components/Panel/Panel";
import { Button } from "./components/Button/Button";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";
import { Timer } from "./components/Timer/Timer";
function App() {
  const [isPanelShown, setIsPanelShown] = useState(true);
  const [error, setError] = useState(null);

  const handleError = useCallback((e) => {
    setError(e.message);
    setTimeout(() => {
      setError(null);
    }, 3000);
  }, []);

  return (
    <main className={styles.main}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Button
        onClick={() => {
          setIsPanelShown((prev) => !prev);
        }}
      >
        {isPanelShown ? "Showaj panel" : "Pokaz panel"}
      </Button>
      {isPanelShown && <Panel onError={handleError} />}
      <Timer />
    </main>
  );
}

export default App;
