import React from 'react'

class Nav extends React.Component{
  render(){
    return(
    <div>
      <nav className="navbar bg-warning" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{this.props.title}</a>
      </div>
      </nav>
    </div>
    );
  }
}
export default Nav;