import React, {Component} from 'react'
import NavbarContainer from './NavbarContainer'

export default class AppContainer extends Component {
  render() {
    return (
      <div className="app-container">
        <NavbarContainer />
        <div className="underNav">
        {
          this.props.children && React.cloneElement(this.props.children)
        }
        </div>
      </div>
    )
  }
}
