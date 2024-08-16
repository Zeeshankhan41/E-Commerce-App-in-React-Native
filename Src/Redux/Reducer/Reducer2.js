import { ADD_TO_WASHLIST,  REMOVE_FROM_WASHLIST } from "../ActionType";

export const reducer2 = (state = [], action)=> {
    switch (action.type) {
        case ADD_TO_WASHLIST:
            return [...state, action.payload];
            case REMOVE_FROM_WASHLIST:
                const deleteArray=state.filter((item,index)=>{
                    return index !==action.payload
                });
                return deleteArray;

                default:
                    return state;
    }
}
export default reducer2;