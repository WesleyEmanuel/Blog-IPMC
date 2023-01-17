import "./App.css";
import { HeaderPage } from "./components/template/HeaderPage";
import { AppRoutes } from "./routes";

function App() {
  return (
    <div className="App">
      <HeaderPage />
      <AppRoutes />
    </div>
  );
}

export default App;
