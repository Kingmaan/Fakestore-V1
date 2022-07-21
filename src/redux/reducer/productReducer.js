import { ActionTypes } from "../constans/actionTypes"

const initialState = {
    products: [],
};

export const productReducer = (state = initialState,{type,payload}) => {
    switch(type){
        case ActionTypes.SET_PODUCTS:
            return {...state, products:payload};
        default:
            return state;
    }
}

export const selectedProducts = (state={}, {type, payload}) => {
    switch(type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload};
        default:
            return state;
    }
}    


