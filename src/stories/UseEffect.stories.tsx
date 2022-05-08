import React, {useEffect, useMemo, useState} from "react";

export default {
    title: 'UseEffect demo'
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(0);
    const [fake, setFake] = useState(0);

    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first and every counter change')
        document.title = counter.toString()
    }, [counter])


    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
            <button onClick={() => {
                setFake(fake + 1)
            }}>+
            </button>
        </>
    )
}

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(0);
    const [fake, setFake] = useState(0);

    console.log('SetTimeoutExample')


    useEffect(() => {

        setInterval(() => {
            setCounter(state=>state+1)
        }, 1000)

    }, [])

    return (
        <>
            <>
                Hello, counter: {counter} fake: {fake}
                {/*<button onClick={() => {setCounter(counter + 1)}}>+</button>*/}
                {/*<button onClick={() => {setFake(fake + 1)}}>+</button>*/}
            </>
        </>
    )
}


export const Timer = () => {
    const [timer, setTimer] = useState<Date>();

    console.log('SetTimeoutExample')


    useEffect(() => {

        setInterval(() => {
            setTimer(new Date())
        }, 1000)

    }, [])

    return (
        <>
            Time: {timer?.toLocaleTimeString()}
        </>
    )
}

