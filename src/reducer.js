import { BUG_ADDED, BUG_REMOVE } from "./actionTypes";
let lastId = 0;

export default function reducer(state = [], action) {
  if (action.type === BUG_ADDED) {
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false
      }
    ];
  }
  else if (action.type === BUG_REMOVE)
    return state.filter(bug => bug.id !== action.payload.id);
  return state;
}