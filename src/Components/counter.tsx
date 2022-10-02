import React from 'react';

const Counter = () => {
    let count = 0;
    const formatCount = () => {
        return count === 0 ? 'empty' : count
    }
    const getBageClasses = () => {
        let classes = 'badge m-2 '
        classes += count === 0 ? 'bg-warning' : 'bg-primary'
        return classes
    }
    return (
        <>
            <span className={getBageClasses()}>{formatCount()}</span>
            <button className={'btn bg-primary m-2'}>+</button>
        </>
    );
};

export default Counter;