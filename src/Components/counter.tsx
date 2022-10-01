import React from 'react';

const Counter = () => {
    let count=0;
    const formatCount =()=> {
        return count === 0 ? 'empty' : count
    }

    return (
        <>
            <span className={'badge bg-primary'}>{formatCount()}</span>
            <button className={'btn bg-primary'}>+</button>
        </>
    );
};

export default Counter;