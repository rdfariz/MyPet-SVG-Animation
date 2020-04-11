import React from 'react'

export default class Component extends React.Component {
  _changePet(pet) {
    const {actions} = this.props
    actions.setPet(pet)
  }
  _changeColor(pet, colorObj, setTo) {
    const {actions} = this.props
    actions.setColor(pet.toLowerCase(), colorObj, setTo)
  }
  _changeTheme(pet) {
    const {actions} = this.props
    actions.setColorTheme(pet.toLowerCase())
  }
  _resetColor(pet) {
    const {actions} = this.props
    actions.setDefaultColor(pet.toLowerCase())
  }
  render() {
    const { state, actions } = this.props
    const pet = state.GLOBAL.pet
    return (
      <div className="actionsButton">
        <button className="buttonCustom" onClick={() => this._changePet("MONKEY")}>Change Monkey</button>
        <button className="buttonCustom" onClick={() => this._changePet("FOX")}>Change FOX</button>
        <button className="buttonCustom" onClick={() => this._changePet("CAT")}>Change CAT</button>
        <br></br>
        <button className="buttonCustom buttonAction" onClick={() => this._changeTheme(pet)}>Change Theme</button>
        <button className="buttonCustom" onClick={() => this._resetColor(pet)}>Reset Color</button>
      </div>
    )
  }
}