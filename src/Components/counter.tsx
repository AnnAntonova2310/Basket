import React from 'react';

const Counter = () => {
    let count = 0;
    const formatCount = () => {
        return count === 0 ? 'empty' : count
    }
    const getBadgeClasses = () => {
        let classes = 'badge m-2 '
        classes += count === 0 ? 'bg-warning' : 'bg-primary'
        return classes
    }
    const handlerIncrement = () => {
        count = count + 1;
        console.log(count)
    }
    return (
        <>
            <span className={getBadgeClasses()}>{formatCount()}</span>
            <button className={'btn bg-primary m-2 btn-hover'} onClick={handlerIncrement}>+</button>
        </>
    );
};

export default Counter;