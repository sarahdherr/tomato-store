import { connect } from 'react-redux'
import SignUp from '../components/SignUp'

import { setUser, logout } from '../reducers/auth'

const mapStateToProps = (state) => {
  return {
    user: state.auth
  }
}

const mapDispatchToProps = { setUser, logout }

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
