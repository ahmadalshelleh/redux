import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import Test from '../../components/Test';

class Counter extends Component {
    constructor(props){
        super(props)
        this.props.onLoad()
        this.props.onHeader("yes")
    }
    render () {
        return (
            <div>
                <Test />
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" value={this.props.value} clicked={this.props.onIncreamentCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecreamentCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                {console.log(this.props.storedResults)}
                    {this.props.storedResults.map(strResults => {
                        return(
                        <li key={strResults.id} onClick={() => this.props.onDeleteResult(strResults.id)}>{strResults.value}</li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncreamentCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecreamentCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, value: 10}),
        onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, value: 15}),
        onStoreResult: (res) => dispatch({type: actionTypes.STORE_RESULT, result: res}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id}),
        onLoad: () => dispatch({type: actionTypes.TITLE_ACTION}),
        onHeader: (rrr) => dispatch({type: actionTypes.HEADER_ACTION, rrr: rrr}),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);