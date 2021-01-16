const INCREASE = 'INCREASE'

const initialState = {
    count: 0,
    text: '현태'
}

export const increase = () => ({
    type: INCREASE
})

function MyReducer(state = initialState, action) {
    switch(action.type) {
        case INCREASE:
            return {
                ...state,
                count: state.count + 1
            }
        default: 
            return state;
    }
}

export default MyReducer