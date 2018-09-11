import { FETCH_WEATHER } from '../actions/index'

export default function(state=[], action){
    switch (action.type){
        case FETCH_WEATHER:
            // make sure to return new object for state
            // state.concat({action.payload.data}]
            // or ES6 below
            // state.push manipulates existing array, BAD!!!
            return [ action.payload.data, ...state ];
    }
    return state;
}
