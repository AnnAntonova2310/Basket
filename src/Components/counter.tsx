import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    const [tag, setTags] = useState(['tag1', 'tag2', 'tag3'])
    const formatCount = () => {
        return count === 0 ? 'empty' : count
    }
    const getBadgeClasses = () => {
        let classes = 'badge m-2 '
        classes += count === 0 ? 'bg-warning' : 'bg-primary'
        return classes
    }
    const handlerIncrement = () => {
        setCount((prevState) => prevState + 1)
        console.log(count)
    }
    const handlerDecrement = () => {
        setCount((prevState) => prevState - 1)
        console.log(count)
    }
    const handlerTagChange = () => {
        setTags(['tag4', 'tag5'])
    }
    return (
        <>
            <ul>{
                tag.map(tag => (
                    <li
                        className={'btn bg-green m-2 tag' }
                        key={tag}
                        onClick={handlerTagChange}
                    >{tag}</li>))
            }
            </ul>
            <span className={getBadgeClasses()}>{formatCount()}</span>
            <button className={'btn bg-green m-2 btn:hover'} onClick={handlerIncrement}>+</button>
            <button className={'btn bg-green m-2 btn:hover'} onClick={handlerDecrement}>-</button>
        </>
    );
};

export default Counter;