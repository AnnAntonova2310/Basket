import React, {FC, useState} from 'react';

type tyu = {
    id: number
    value: number
    name: string
    deleteList: (id: number)=>void
    // children: React.ReactNode
}

const Counter:FC<tyu> = ({id,value, name, deleteList}) => {
    const [valueCount, setValue] = useState(value)
    const formatValue = () => {
        return valueCount === 0 ? 'empty' : valueCount
    }
    const getBadgeClasses = () => {
        let classes = 'badge m-2 '
        classes += valueCount === 0 ? 'bg-warning' : 'bg-green'
        return classes
    }
    const handlerIncrement = () => {
        setValue((prevState) => prevState + 1)
        console.log(valueCount)
    }
    const handlerDecrement = () => {
        setValue((prevState) => prevState - 1)
        console.log(valueCount)
    }

    return (
        <div>
           <span> {name} </span>
            <span className={getBadgeClasses()}>{formatValue()}</span>
            <button className={'btn bg-green m-2 btn:hover'} onClick={handlerIncrement}>+</button>
            <button className={'btn bg-green m-2 btn:hover'} onClick={handlerDecrement}>-</button>
            <button className={'btn bg-error m-2 btn:hover'} onClick={()=>deleteList(id)}>Delete</button>
        </div>
    );
};

export default Counter;