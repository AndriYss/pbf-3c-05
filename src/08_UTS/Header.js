import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div>
                {/* navigation */}
                < div className="container" >
                    <div className="navbar navbar-default navbar-static-top" role="navigation">
                        <div className="navbar-header">
                            <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="icon icon-bar" />
                                <span className="icon icon-bar" />
                                <span className="icon icon-bar" />
                            </button>
                            <a href="#" className="navbar-brand"><img src="assets/images/logo.png" className="img-responsive" alt="logo" /></a>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/" className="active">HOME</Link></li>
                                <li><Link to="/About" >About</Link></li>
                                <li><Link to="/Portfolio" >Portfolio</Link></li>
                                <li><Link to="/Contact" >Contact</Link></li>

                            </ul>
                        </div>
                    </div>
                </div >
            </div >
        )
    }
}
export default Header