let appState = {
  online: false
}

function reducer(state = appState, action) {

  switch (action.type) {
    case 'init':
      return {
        ...state,
        online: true
      }
    case 'close':
      return {
        ...state,
        online: false
      }
    default:
      return state
  }
}

export default reducer
