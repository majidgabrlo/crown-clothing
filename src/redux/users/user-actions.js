// this file keeps our actions
import {userActionConst} from './user-types'
export const setCurrentUser = user =>({
    // the type is equal to user-reducer.js
    type: userActionConst.SET_CURRENT_USER,
    // the payload is the value that we change in the store
    payload: user
})