import React, {useMemo, useState} from "react";

export default {
    title: 'UseState demo'
}

function generateDate() {
    console.log('generateDate')
    return 1232849723
}

export const Example1 = () => {
    console.log('Example1')

    const initValue = useMemo(generateDate, [])

    const [counter, setCounter] = useState(generateDate); // [0, function(newValue){}]


    return (
        <>
            <button onClick={() => {
                setCounter(state => state + 1)}}></button>
            {counter}
        </>
    )
}


