import model from '../constants/model'
import theme from '../constants/theme'

const initialState = {
  name: 'Hello',
  pet: 'MONKEY',
  model: model,
  selectedTheme: null
}

export default function selected(state = initialState, action) {
  const { type, pet, color, setTo, selectedTheme} = action
  switch (type) {
    case "SET_PET":
      return {
        ...state,
        pet: pet
      };
    case "SET_COLOR":
      return Object.assign({}, state, {
        ['model']: Object.assign({}, state['model'], {
          [pet]: Object.assign({}, state[pet], {
            color: {
              ...state['model'][pet]['color'],
              [setTo]: color
            }
          })
        })
      });
    case "SET_COLOR_THEME":
      let index = selectedTheme === state.selectedTheme ? Math.floor(Math.random() * theme.length) : selectedTheme
      return Object.assign({}, state, {
        selectedTheme: selectedTheme,
        ['model']: Object.assign({}, state['model'], {
          [pet]: Object.assign({}, state[pet], {
            ...state['model'][pet],
            color: theme[index].color
          })
        })
      });
    case "SET_DEFAULT_COLOR":
      return Object.assign({}, state, {
        selectedTheme: null,
        ['model']: Object.assign({}, state['model'], {
          [pet]: Object.assign({}, state[pet], {
            ...state['model'][pet],
            color: model[pet].color
          })
        })
      });
    default:
      return state
  }
}