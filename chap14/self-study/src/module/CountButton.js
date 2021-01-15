import React from 'react'
import {useDispatch} from 'react-redux'
import {increase} from './MyReducer'

const CountButton = () => {
    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increase())

    return (
        <div>
            <button onClick={onIncrease}>increase</button>
        </div>
    )
}
    
export default CountButton
        