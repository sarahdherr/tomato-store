import { connect } from 'react-redux'
import SignUp from '../components/SignUp'
import { setUser } from '../reducers/user'

const mapStateToProps = null

const mapDispatchToProps = (dispatch) => {
  return {
    setUser(user) {
      dispatch(setUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)