import React, {useState} from 'react';
import Counter from "./Counter";

type CounterType = {
    id: number, value: number, name: string, price?: string
}


const CountersList = () => {
    const initialState = [
        {id: 0, value: 0, name: 'Ненужная вещь', price: '200'},
        {id: 1, value: 4, name: 'Ложка'},
        {id: 2, value: 0, name: 'Вилка'},
        {id: 3, value: 0, name: 'Тарелка'},
        {id: 4, value: 0, name: 'Набор минималиста'},
    ]

    const [counters, setCounters] = useState<Array<CounterType>>(initialState);

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

    const onIncrement = (id: number)=> {
        const newArr = counters.map(c => c.id === id ? {...c, value: c.value + 1} : c)
        setCounters(newArr)
    }

    const OnDecrement = (id: number)=> {
        const newArr = counters.map(c => c.id === id ? {...c, value: c.value - 1} : c)
        setCounters(newArr)
    }

    return (
        <>
            {counters.map((count) => (

                <Counter
                    key={count.id}
                    {...count}
                    onIncrement={onIncrement}
                    onDecrement={OnDecrement}
                    deleteList = {handlerDelete}
                />
            ))}
            <button onClick={handlerReset}>Сброс</button>
            <button onClick={handlerUpdate}>Обновить состояние</button>

        </>
    );
};

export default CountersList;