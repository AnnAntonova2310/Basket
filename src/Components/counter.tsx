import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount]=useState(0)
    const formatCount = () => {
        return count === 0 ? 'empty' : count
    }
    const getBadgeClasses = () => {
        let classes = 'badge m-2 '
        classes += count === 0 ? 'bg-warning' : 'bg-primary'
        return classes
    }
    const handlerIncrement = () => {
        setCount((prevState)=>prevState+1)
        console.log(count)
    }
    const handlerDecrement = () => {
        setCount((prevState)=>prevState-1)
        console.log(count)
    }
    return (
        <>
            <span className={getBadgeClasses()}>{formatCount()}</span>
            <button className={'btn bg-primary m-2 btn-hover'} onClick={handlerIncrement}>+</button>
            <button className={'btn bg-primary m-2 btn-hover'} onClick={handlerDecrement}>-</button>
        </>
    );
};

export default Counter;