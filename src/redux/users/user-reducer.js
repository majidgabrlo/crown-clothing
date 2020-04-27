// because our state for the first time is nothing we make this INITIAL_STATE and its value is exact same with out state
import {userActionConst} from './user-types'
const INITIAL_STATE={
    currentUser:null
}

const userReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case userActionConst.SET_CURRENT_USER:
            return {
                ...state,
                currentUser:action.payload
            }
        // every action we make is going to check in every reducer that's what when action.type wasn't equal to our action it returns our simple state
        default:
            return state
    }
}

export default userReducer;