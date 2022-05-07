import React, {useEffect, useMemo, useState} from "react";

export default {
    title: 'UseEffect demo'
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(0);
    const [fake, setFake] = useState(0);

    console.log('SimpleExample')

    useEffect(()=>{
        console.log('useEffect every render')
        document.title=counter.toString()
    })

    useEffect(()=>{
        console.log('useEffect only first render (componentDidMount)')
        document.title=counter.toString()
    },[])

    useEffect(()=>{
        console.log('useEffect first and every counter change')
        document.title=counter.toString()
    },[counter])


    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => {setCounter(counter + 1)}}>+</button>
            <button onClick={() => {setFake(fake + 1)}}>+</button>
        </>
    )
}


