import { connect } from 'react-redux'
import Product from '../components/Product'

const mapStateToProps = (state) => {
  return state.product
}

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Product)
