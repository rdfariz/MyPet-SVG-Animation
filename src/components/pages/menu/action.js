import theme from '../../../constants/theme'

export function setPet(pet) {
  return dispatch => {
    dispatch({
      type: 'SET_PET',
      pet: pet  
    })
  } 
}

export function setColor(pet, colorObj, setTo) {
  return dispatch => {
    dispatch({
      type: 'SET_COLOR',
      pet: pet,
      color: colorObj,
      setTo: setTo
    })
  }
}

export function setColorTheme(pet) {
  const index = Math.floor(Math.random() * theme.length);
  return dispatch => {
    dispatch({
      type: 'SET_COLOR_THEME',
      pet: pet,
      selectedTheme: index
    })
  }
}

export function setDefaultColor(pet) {
  return dispatch => {
    dispatch({
      type: 'SET_DEFAULT_COLOR',
      pet: pet
    })
  }
}