import {connect} from 'react-redux'
import ControllerPresentation from './controller.presentation'
import {bindActionCreators} from 'redux'
import {increaseAsyn, decreaseAsyn} from '../../actions/counter.actions'

const mapDispatchToProps = dispatch => ({
  increment: bindActionCreators(increaseAsyn, dispatch),
  decrement: bindActionCreators(decreaseAsyn, dispatch),
})

const Controller = connect(null, mapDispatchToProps)(ControllerPresentation)
export default Controller
