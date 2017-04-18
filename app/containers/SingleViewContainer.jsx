import { connect } from 'react-redux'
import SingleView from '../components/SingleView'

const mapStateToProps = (state) => {
  return state.product
}

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(SingleView)
