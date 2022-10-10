import React, {useState} from 'react';
import Counter from "./Counter";


const CountersList = () => {
    const initialState = [
        {id: 0, value: 0, name: 'Ненужная вещь', price: '200'},
        {id: 1, value: 4, name: 'Ложка'},
        {id: 2, value: 0, name: 'Вилка'},
        {id: 3, value: 0, name: 'Тарелка'},
        {id: 4, value: 0, name: 'Набор минималиста'},
    ]

    const [counters, setCounters] = useState (initialState);

    const handlerDelete = (id: number) => {
        const newCounters = counters.filter(c=> c.id!==id)
        setCounters(newCounters)
    }

    const handlerReset =()=> {
        console.log('handlerReset')
        setCounters(initialState)
    }

    const handlerUpdate = () => {
        const updatedState = [
            {id: 0, value: 1, name: 'Ненужная вещь', price: '200'},
            {id: 1, value: 2, name: 'Ложка'},
            {id: 2, value: 3, name: 'Вилка'},
            {id: 3, value: 4, name: 'Тарелка'},
            {id: 4, value: 0, name: 'Набор минималиста'},
        ]
        setCounters(updatedState)
    }

    return (
        <>
            {counters.map((count) => (

                <Counter
                    key={count.id}
                    // id={count.id}
                    // value={count.value}
                    // name={count.name}
                    {...count}
                    deleteList = {handlerDelete}
                />
            ))}
            <button onClick={handlerReset}>Сброс</button>
            <button onClick={handlerUpdate}>Обновить состояние</button>
        </>
    );
};

export default CountersList;