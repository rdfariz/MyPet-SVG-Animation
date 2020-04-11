import { connect } from 'react-redux';
import Component from './component'

function mapStateToProps(state){
    return{
      state
    }
}
  
const Connected = connect(mapStateToProps)(Component);

export default Connected