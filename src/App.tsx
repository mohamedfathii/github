import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { List } from "./pages/github/list";
import { store } from "./store";
import { Provider } from "react-redux";

const routes = [{ path: "/home", element: <List />, exact: true }];

const App = () => {
  return (
    <main className="App">
      <Provider store={store}>
          <Router>
            <Routes>
              {routes.map((route) => (
                <Route
                  path={route.path}
                  element={route.element}
                  key={route.path}
                />
              ))}
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </Router>
      </Provider>
    </main>
  );
};
export default App;
