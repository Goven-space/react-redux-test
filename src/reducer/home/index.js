import * as types from '@/actions/mutation-types.js'

const initialState = {
    homeName : '云课堂',
}

const mutations = {
    [types.UPDATE_GLOBAL_NAME](state,action){
        return {
            ...state,
            homeName : action.payload,
        }
    }
}

export default function(state = initialState ,action){
    if(!mutations[action.type]) return state
    return mutations[action.type](state,action)
}