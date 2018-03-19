import {connect} from 'react-redux'
import DisplayerPresentation from './displayer.presentation'
const mapStateToProps = state => ({
  value: state.counter.value
})
const Displayer = connect(mapStateToProps, null)(DisplayerPresentation)
export default Displayer
