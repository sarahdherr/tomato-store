// this file helps the navbar listen to any changes on the state (aka for cart size changes)
import { connect } from 'react-redux'
import Navbar from '../components/Navbar'

const mapStateToProps = (state) => {
	return {
		cartSize: state.cart.size
	}
}

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)