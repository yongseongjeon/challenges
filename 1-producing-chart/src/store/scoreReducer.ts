const SCORE_ACTIONS = {
  SET_SCORE: "SET_SCORE",
  RESET_SCORES: "RESET_SCORES",
} as const;

function setScores({ name, score }: { name: string; score: string }) {
  return { type: SCORE_ACTIONS.SET_SCORE, payload: { name, score } };
}

function resetScores() {
  return { type: SCORE_ACTIONS.RESET_SCORES };
}

const initialState: { [key: string]: string } = {
  Alex: "",
  Tom: "",
  Ryan: "",
  Don: "",
  Emma: "",
};

type ActionType =
  | { type: typeof SCORE_ACTIONS.SET_SCORE; payload: { name: string; score: string } }
  | { type: typeof SCORE_ACTIONS.RESET_SCORES };

function scoreReducer(state = initialState, action: ActionType) {
  console.log(state);
  switch (action.type) {
    case SCORE_ACTIONS.SET_SCORE:
      return { ...state, [action.payload.name]: action.payload.score };
    case SCORE_ACTIONS.RESET_SCORES:
      return { ...initialState };
    default:
      return state;
  }
}

export { setScores, resetScores, scoreReducer };
