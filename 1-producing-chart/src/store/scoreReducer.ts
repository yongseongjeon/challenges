import { COLOR } from "../constants/color";
import { Player } from "../types/Player";

const SCORE_ACTIONS = {
  SET_SCORE: "SET_SCORE",
  RESET_SCORES: "RESET_SCORES",
} as const;

function setScore({ name, score }: { name: string; score: string }) {
  return { type: SCORE_ACTIONS.SET_SCORE, payload: { name, score } };
}

function resetScores() {
  return { type: SCORE_ACTIONS.RESET_SCORES };
}

const initialState: Player[] = [
  { name: "Alex", score: "", color: COLOR.ALIZARIN },
  { name: "Tom", score: "", color: COLOR.SUN_FLOWER },
  { name: "Ryan", score: "", color: COLOR.ORANGE },
  { name: "Don", score: "", color: COLOR.TURQUOISE },
  { name: "Emma", score: "", color: COLOR.AMETHYST },
];

export type Action =
  | { type: typeof SCORE_ACTIONS.SET_SCORE; payload: { name: string; score: string } }
  | { type: typeof SCORE_ACTIONS.RESET_SCORES };

function scoreReducer(state = initialState, action: Action) {
  switch (action.type) {
    case SCORE_ACTIONS.SET_SCORE:
      return state.map((player: Player) => (player.name === action.payload.name ? { ...player, score: action.payload.score } : player));
    case SCORE_ACTIONS.RESET_SCORES:
      return { ...initialState };
    default:
      return state;
  }
}

export { initialState, setScore, resetScores, scoreReducer };
