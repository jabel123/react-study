import React from 'react'
import CountState from './CountState'
import {useSelector} from 'react-redux'

function CountContainer()
{
    const { count } = useSelector(state => ({
        count: state.MyReducer.count
    }));

    return (
        <CountState count = {count}/>
    );
}

export default CountContainer 