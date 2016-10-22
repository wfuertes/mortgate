import React, { Component } from 'react';
import './App.css';
import './css/pure-min.css';
import './css/marketing.css';
import './css/grids-responsive-min.css';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
            <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
                <Link className="pure-menu-heading" to="/">MORTGATE</Link>

                <ul className="pure-menu-list">
                    <li className="pure-menu-item pure-menu-selected"><Link to="/" className="pure-menu-link">Home</Link></li>
                    <li className="pure-menu-item"><Link to="/about" className="pure-menu-link">About</Link></li>
                </ul>
            </div>
        </div>

        <div className="content-wrapper">
            <div className="content">
                {this.props.children}
            </div>

            <div className="footer l-box is-center">
                MORTGATE: Made with love by the MapleStack Team.
            </div>
        </div>
      </div>
    );
  }
}

export default App;
