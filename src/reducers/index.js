import { combineReducers } from 'redux'
import GLOBAL from './global'
import HOME from '../components/pages/home/reducer'
import MENUPET from '../components/pages/menu/reducer'

export default combineReducers({
  GLOBAL,
  HOME,
  MENUPET
})