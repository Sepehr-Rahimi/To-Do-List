import { ADD , REMOVE } from "./constants";
import initialState from "./initialState";


const reducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD : return(
            {
                ...state,
                list : [
                    ...state.list,
                    action.payload
                ]
            }
        )
        case REMOVE : return(
            {
                ...state,
                list : state.list.filter(({id}) => id !== action.payload)
            }
        )
        default: return(
           state
        )
    }
}


export default reducer