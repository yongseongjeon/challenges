import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { RouteConfig, routeConfigs } from "./route";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {routeConfigs.map(({ id, path, element }: RouteConfig) => (
            <Route key={id} path={path} element={element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
