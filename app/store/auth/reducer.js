import * as TYPES from './types'
import Immutable from 'seamless-immutable'

export const initialState = Immutable({
    user: null,
    error: null
})

const AuthReducer = (state=initialState, action={}) => {
    switch(action.type) {
        case TYPES.AUTH_SUCCESS:
            return state.merge({ user: action.user, error: null })
        // case TYPES.AUTH_FAILURE:
        //     return state.merge({ user: null, error: action.error })
        default:
            return state
    }
}

export default AuthReducer

export const getAuth = (state) => state.auth.user