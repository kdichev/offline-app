let appState = {
  online: false,
  data: []
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
      case 'save':
        return {
          ...state,
          data: action.payload
        }
    default:
      return state
  }
}

export default reducer
