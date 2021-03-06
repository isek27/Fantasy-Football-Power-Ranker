import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {

    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return <li><a className="btn" href="/auth/google">Login</a></li>;
            default:
            return [
                <li key="1"><Payments /></li>,
                <li key="2" style={{margin: '0 10px'}}>Credits: {this.props.auth.credits}</li>,
                <li key="3"><a href="/api/logout">Logout</a></li>
            ];
        }
    }

    render() {
        //console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to={this.props.auth ? "/surveys" : "/"}
                        className="left brand-logo"
                        style={{marginLeft: '10px'}}
                    >
                        FF Power Ranker
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        // look at combined reducers, we called this piece of state - auth
        auth : state.auth
    };
}

export default connect(mapStateToProps)(Header);
