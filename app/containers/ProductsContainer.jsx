import { connect } from 'react-redux';
import Products from '../components/Products';

const mapStateToProps = (state) => {
	console.log("STATE IN mapStateToProps", state)
	return {
		products: state.products
	};
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Products)