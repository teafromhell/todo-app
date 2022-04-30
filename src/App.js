import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import Input from "./components/Input";
import ListOfTasks from "./components/ListOfTasks";
import { setTheme } from "./features/tasks/themeSlice";
import { FiSun, FiMoon } from "react-icons/fi";

function App() {
  const { tasks } = useSelector((state) => state.tasksRedux);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  if (theme === "light") {
    document.body.style.backgroundColor = "#FAFAFA";
  } else {
    document.body.style.backgroundColor = "#161722";
  }

  return (
    <div className={`app ${theme}`}>
      <header className="app__header">
        <div className="app__header-input">
          <div>
            <b className="app__header-title">T O D O</b>
            {theme === "light" ? (
              <FiMoon
                onClick={() =>
                  dispatch(setTheme(theme === "light" ? "dark" : "light"))
                }
                style={{ color: "white", cursor: "pointer" }}
                size={30}
              />
            ) : (
              <FiSun
                onClick={() =>
                  dispatch(setTheme(theme === "light" ? "dark" : "light"))
                }
                style={{ color: "white", cursor: "pointer" }}
                size={30}
              />
            )}
          </div>
          <Input />
        </div>
      </header>
      <main
        className={`tasks-wrapper ${
          tasks.length === 0 ? "tasks-wrapper--hide" : ""
        }`}
      >
        <ListOfTasks />
      </main>
    </div>
  );
}

export default App;
