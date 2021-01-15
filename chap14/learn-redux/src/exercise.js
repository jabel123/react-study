import {createStore} from 'redux'

const initialState = {
    counter: 0,
    text: '',
    list: []
};

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

function increase() {
    return {
        type: INCREASE
    };
}

const decrease = () => ({
    type: DECREASE
});

const changeText = text => ({
    type: CHANGE_TEXT,
    text
});

const addToList = item => ({
    type: ADD_TO_LIST,
    item
});

/* 리듀서 만들기*/
// 위 액션 생성함수들을 통해 만들어진 객체들을 참조하여
// 새로운 상태를 만드는 함수를 만든다.
// 주의: 리듀서는 불변성을 지켜줘야 한다.

function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            };
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item)
            };
        default:
            return state;
    }
}

/* 스토어 만들기 */
const store = createStore(reducer);

console.log(store.getState());

const listener = () => {
    const state = store.getState();
    console.log(state)
}

const unsubscribe = store.subscribe(listener);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({id: 1, text:'와우'}));