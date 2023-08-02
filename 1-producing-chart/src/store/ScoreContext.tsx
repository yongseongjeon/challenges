import { ReactNode, createContext, useReducer } from "react";
import { Action, initialState, scoreReducer } from "./scoreReducer";
import { Player } from "../types/Player";

interface ScoreContext {
  scores: Player[];
  dispatch: (action: Action) => void;
}

const ScoreContext = createContext<ScoreContext>({
  scores: initialState,
  dispatch: () => {},
});

function ScoreProvider({ children }: { children: ReactNode }) {
  const [scores, dispatch] = useReducer(scoreReducer, initialState);

  return <ScoreContext.Provider value={{ scores, dispatch }}>{children}</ScoreContext.Provider>;
}

export { ScoreContext, ScoreProvider };
