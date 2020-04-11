import React from 'react'
import Fox from '../pet/fox/index'
import Monkey from '../pet/monkey/index'
import Cat from '../pet/cat/index'

import Menu from '../menu/index'

class Home extends React.Component {
  render() {
    console.log(this.props)
    const {state} = this.props
    return (
      <div className="content">
        { state.GLOBAL.pet == 'MONKEY' ? <Monkey/>
          : state.GLOBAL.pet == 'FOX' ? <Fox/>
          : state.GLOBAL.pet == 'CAT' ? <Cat/>
          : <p>Unknown Pet</p>
        }
        <Menu/>
      </div>
    )
  }
}

export default Home