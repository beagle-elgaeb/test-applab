import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadState } from "../redux/toDoSlise";
import { ReduxState } from "../redux/types";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function App() {
  const state = useSelector((state: ReduxState) => state.toDo);
  const dispatch = useDispatch();

  const localStorageKey = "todoListState";

  // Загрузка данных из локального хранилища в стейт
  useEffect(() => {
    const savedState = localStorage.getItem(localStorageKey);

    if (savedState) {
      try {
        dispatch(loadState(JSON.parse(savedState)));
      } catch {}
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Загрузка данных из стейта в локальное хранилище
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state]);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
