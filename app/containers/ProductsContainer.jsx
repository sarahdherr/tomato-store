import { connect } from 'react-redux'
import Products from '../components/Products'

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Products)
