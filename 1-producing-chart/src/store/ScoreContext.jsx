import { createContext, useReducer } from "react";
import { scoreReducer } from "./scoreReducer";

const ScoreContext = createContext();

function ScoreProvider({ children }) {
  const [scores, dispatch] = useReducer(scoreReducer, []);

  return <ScoreContext.Provider value={{ scores, dispatch }}>{children}</ScoreContext.Provider>;
}

export { ScoreContext, ScoreProvider };
