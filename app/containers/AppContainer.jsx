import React, {Component} from 'react';
import Navbar from '../components/Navbar';

export default class AppContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="app-container">
        <Navbar />
        {
          this.props.children && React.cloneElement(this.props.children)
        }
      </div>
    )
  }
}
