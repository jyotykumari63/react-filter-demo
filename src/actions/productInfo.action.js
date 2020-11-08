import { productConstants,productReviewConstants,addProductReviewConstants } from '../constants/product.constant';
import { productInfo } from '../services/productInfo.services';


export const productInfoAction={
    productDetails,
};



function productDetails() {
    return dispatch => {
        dispatch(request());
        productInfo.productDetails()
            .then(
                productInfo => dispatch(success(productInfo)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: productConstants.GETALL_REQUEST } }
    function success(productInfo) { return { type: productConstants.GETALL_SUCCESS, productInfo } }
    function failure(error) { return { type: productConstants.GETALL_FAILURE, error } }
}


