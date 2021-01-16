import { combineReducers, createStore } from 'redux'

const initialState = {
    counter: 0,
    text: '',
    list: []
}

const INCREASE = 'INCREASE'
const ADD_TO_LIST = 'ADD_TO_LIST'

const increase = () => ({
    type: INCREASE
})    

const addToList = item => ({
    type: ADD_TO_LIST,
    item
})

function myReducer(state = initialState, action){
    switch(action.type)
    {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            };
        case ADD_TO_LIST: 
            return {
                ...state,
                list: state.list.concat(action.item)
            };                
    }
}

const store = createStore(myReducer)

const listener = () => {
    const state = store.getState();
    console.log(state)
}

const unsubscribe = store.subscribe(listener);

store.dispatch(increase())
store.dispatch(addToList({id:1, text:'와우'}))

