import * as types from '@/actions/mutation-types.js'

export function updateName(params){
    return {
        type: types.UPDATE_GLOBAL_NAME,
        payload : params,
    }
}