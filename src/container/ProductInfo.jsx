import React,{Component} from 'react';
import ProductInfo from '../components/ProductDetails/ProductDetails';
import {productInfoAction} from '../actions/productInfo.action';
import {connect} from 'react-redux';

class ProductInfoCon extends Component{
    constructor(){
        super();
        this.state = {selectedProductDetails:[]};
    }
    
    componentDidMount(){
        
        this.props.dispatch(productInfoAction.productDetails());    
    }
    
    render(){
        
        return(
            <div>
                <ProductInfo productInfo={this.props.productInfo}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {productInfo}=state;
    return {
        productInfo,
    };
}

export default connect(mapStateToProps)(ProductInfoCon);