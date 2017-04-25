import { connect } from 'react-redux'
import SignUp from '../components/SignUp'
import { signup } from '../reducers/auth'

const mapStateToProps = null

const mapDispatchToProps = {signup}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)