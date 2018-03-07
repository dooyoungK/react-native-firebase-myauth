import * as TYPES from './types'
import * as api from '../../services/Api'

export function login(data, successCB, errorCB) {
    return (dispatch) => {
        api.login(data, function(success, data, error) {
            if(success) {
                if(data.exsists) dispatch({ type: TYPES.AUTH_SUCCESS, data: data.user })

                successCB(data)
            } else if(error) {
                if(error.code == 'auth/user-not-found'){
                    let newUser = { user: { admin: false, isNew: true } }
                    successCB(newUser)
                } else errorCB(error)
            }
        })
    }
}