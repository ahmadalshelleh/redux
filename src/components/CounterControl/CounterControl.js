import React from 'react';
import { connect } from 'react-redux';
import './CounterControl.css';


// const mapStateToProps = state => {
//     return {
//         ctr: state.ctr.counter,
//         storedResults: state.res.results,
//         value:state.res.value
//     };
// };




const counterControl = (props) => (
    <div className="CounterControl" onClick={props.clicked}>
        {props.label} <br/> 
        <div>
        {props.value} 
        </div>
    </div>
);



const mapStateToProps = state => ({
    value:state.res.value
});
  
export default connect(mapStateToProps)(counterControl);