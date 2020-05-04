import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
    currentUser: null
}

//* Note -> state = INITIAL_STATE -> if state is ever undefined the default value will be INITIAL_STATE , if it's now not gonna work
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;