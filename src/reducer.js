let lastId = 0;

export default function reducer(state = [], action) {
  if (action.type === 'bugAdded') {
    return [
      ...state,
      {
        id: ++lastId,
        description: action.playload.description,
        resolved: false
      }
    ];
  }
  else if (action.type === 'bugRemoved')
    return state.filter(bug => bug.id !== action.payload.id);
  return state;
}