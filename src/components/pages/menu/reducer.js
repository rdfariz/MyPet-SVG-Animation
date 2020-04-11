const initialState = {
  isOpenMenu: false
}

export default function reducer (state = initialState, action) {
  const { type } = action
  switch (type) {
    case "OPEN_MENU":
      return {
        ...state,
        isOpenMenu: true
      }  
    case "CLOSE_MENU":
      return {
        ...state,
        isOpenMenu: false
      }
    default:
      return state
  }
}