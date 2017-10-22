let appState = {
  data: [],
  lastUpdated: ''
}

function reducer(state = appState, action) {

  switch (action.type) {
      case 'save':
        return {
          ...state,
          data: action.payload,
          lastUpdated: action.lastUpdated
        }
    default:
      return state
  }
}

export default reducer
