import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routeConfigs } from "./route";
import GlobalStyle from "./styles/GlobalStyle";
import { ScoreProvider } from "./store/ScoreContext";

function App() {
  return (
    <div className="App">
      <ScoreProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            {routeConfigs.map(({ id, path, element }) => (
              <Route key={id} path={path} element={element} />
            ))}
          </Routes>
        </BrowserRouter>
      </ScoreProvider>
    </div>
  );
}

export default App;

