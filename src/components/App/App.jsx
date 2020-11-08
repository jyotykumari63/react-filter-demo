import React,{Component} from 'react';
import { Router,Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {history} from '../../helpers/history';
import {alertActions} from '../../actions/alter.action';

import ProductInfo from '../../container/ProductInfo'

class App extends Component{
    constructor(props){
        super(props);
        const {dispatch}=this.props;
        history.listen((location, action)=>{
            // clear alert on location change
            dispatch(alertActions.clear());            
        });
    }
    render(){        
        return(
            <div className="jumbotron">
                <h2 style={{'textAlign':'center',color:'#8f3181'}}>Product Details</h2>
                    <Router history={history}>
                    <ProductInfo/>
                    <div className="App">
                        <div>Filter</div>
                        <div>Items List</div>
                    </div>
                    </Router>
                </div>
        );
    }
}

function mapStateToProps(state){
    const {alert}=state;
    return {
        alert,
    };
}

export const connectedApp=connect(mapStateToProps)(App);

export {connectedApp as App};
