import { productConstants } from '../constants/product.constant';
import { productReviewConstants } from '../constants/product.constant';



export function productInfo(state={},action){
    switch(action.type){
        case productConstants.GETALL_REQUEST:
            return {loading:true};
        case productConstants.GETALL_SUCCESS:
            return {productInfo:action.productInfo};
        case productConstants.GETALL_FAILURE:
            return {error:action.error};
        default: 
            return state;
    }
}

export function productReviewInfo(state={},action){
    switch(action.type){
        case productReviewConstants.GETALL_REQUEST:
            return {loading:true};
        case productReviewConstants.GETALL_SUCCESS:
            return {productReviewInfo:action.productReviewInfo};
        case productReviewConstants.GETALL_FAILURE:
            return {error:action.error};
        default: 
            return state;
    }
}