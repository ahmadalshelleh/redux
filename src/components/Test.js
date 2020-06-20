import React, { Component } from 'react';
import { connect } from 'react-redux';


class test extends Component{


    render(){
        return (
        <h1>{this.props.header}</h1>
        );
    }
}

const mapStateToProps = state => {
    return {
        header: state.res.header
    }
}

export default connect(mapStateToProps)(test);