import React from 'react'

class Nav extends React.Component {
  render() {
    return (
      <header>
        <div className="row">
          <div className="col-3">
            <img src="assets/img/logo.png" alt="Come Drink Stuff" />
          </div>
          <nav className="col-9">
            {this.props.children}
          </nav>
        </div>
      </header>
    )
  }
}

export default Nav
