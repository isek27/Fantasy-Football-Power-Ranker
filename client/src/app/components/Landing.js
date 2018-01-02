import React, { Component } from "react";
import { connect } from "react-redux";

class Landing extends Component {

    render() {
        return (
            <div style={{textAlign:'center'}}>
                <h1>
                    Fantasy Football Power Ranker
                </h1>
                <div>
                    Input ESPN League ID
                </div>
                <input className="browser-default mt-2" type="text"/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        // look at combined reducers, we called this piece of state - auth
        auth : state.auth
    };
}

export default connect(mapStateToProps)(Landing);
