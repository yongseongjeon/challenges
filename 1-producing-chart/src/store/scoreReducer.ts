const SCORE_ACTIONS = {
  SET_SCORES: "SET_SCORES",
} as const;

function setScores({ scores }: { scores: Array<object> }) {
  return { type: SCORE_ACTIONS.SET_SCORES, payload: { scores } };
}

const initialState: Array<object> = [];

type ActionType = { type: typeof SCORE_ACTIONS.SET_SCORES; payload: { scores: Array<object> } };

function scoreReducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case SCORE_ACTIONS.SET_SCORES:
      return action.payload.scores;
    default:
      return state;
  }
}

export { setScores, scoreReducer };
