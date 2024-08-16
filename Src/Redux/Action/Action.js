import { ADD_TO_CART, ADD_TO_WASHLIST, REMOVE_FROM_CART, REMOVE_FROM_WASHLIST } from "../ActionType"
export const additemtoCard = data => ({
    type: ADD_TO_CART,
    payload: data,
});
export const removefromCart = index => ({
    type: REMOVE_FROM_CART,
    payload: index,
});
export const addtoWashlist = data => ({
    type: ADD_TO_WASHLIST,
    payload: data,
});
export const removefromWashlist = index => ({
    type: REMOVE_FROM_WASHLIST,
    payload: index,
});
