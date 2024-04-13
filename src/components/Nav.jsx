import React from 'react'

class Nav extends React.Component{
  render(){
    return(
    <div>
      <nav class="navbar bg-warning" data-bs-theme="dark">
      <div class="container-md">
        <a class="navbar-brand" href="#">{this.props.title}</a>
      </div>
      </nav>
    </div>
    );
  }
}
export default Nav;