import { ADD_TO_CART, REMOVE_FROM_CART } from "../ActionType";

export const reducer = (state = [], action)=> {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload];
            case REMOVE_FROM_CART:
                const deleteArray=state.filter((item,index)=>{
                    return index !==action.payload
                });
                return deleteArray;

                default:
                    return state;
    }
}
export default reducer;