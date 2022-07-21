import { ActionTypes } from "../constans/actionTypes";

//initialise products
export const setProducts = (ItemID) => {
    return{
        type: ActionTypes.SET_PODUCTS,
        payload: ItemID,
    };
};

//select product
export const selectedProduct = (ItemID) => {
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload: ItemID
    }
}