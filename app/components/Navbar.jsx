import React, {Component} from 'react';
import {Link} from 'react-router';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-default">
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <a className="navbar-brand" href="#">Home</a>

      <ul className="nav navbar-nav">
        <li className="active"><Link to="#">Users</Link></li>
        <li><Link to="/products" >Products</Link></li>
      </ul>

      <form className="navbar-form navbar-right" role="search">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search" />
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>

      </div>
    </nav>
  )
}

export default Navbar;

// If we want a collapsable hamburger:
// <div className="container-fluid">
//  <div className="navbar-header">
//    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
//          <span className="sr-only">Toggle navigation</span>
//          <span className="icon-bar"></span>
//          <span className="icon-bar"></span>
//          <span className="icon-bar"></span>
//        </button>
//  </div>
//  {/*<a className="navbar-brand" href="#">Brand</a>*/}
// </div>

// If we want a drop down:
// <li className="dropdown">
//   <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span className="caret"></span></a>
//   <ul className="dropdown-menu" role="menu">
//     <li><a href="#">Action</a></li>
//     <li><a href="#">Another action</a></li>
//     <li><a href="#">Something else here</a></li>
//     <li className="divider"></li>
//     <li><a href="#">Separated link</a></li>
//     <li className="divider"></li>
//     <li><a href="#">One more separated link</a></li>
//   </ul>
// </li>
