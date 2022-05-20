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

export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(0);
    const [fake, setFake] = useState(0);

    console.log('SetTimeoutExample')


    useEffect(() => {

        const interval = setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)

        return () => {
            clearInterval(interval)
        }


    }, [])

    return (
        <>
            <>
                Hello, counter: {counter} fake: {fake}
                {/*<button onClick={() => {setCounter(counter + 1)}}>+</button>*/}
                <button onClick={() => {
                    setFake(fake + 1)
                }}>+
                </button>
            </>
        </>
    )
}


export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(0);

    console.log('Component rendered')


    useEffect(() => {

        console.log('Effect occurred: ' + counter)


        return () => {
            console.log('RESET EFFECT')
        }
    }, [])

    const increase = () => {
        setCounter(counter + 1)
    }

    return (
        <>
            <div>
                Hello, counter: {counter}
            </div>

            <button onClick={increase}>+</button>
        </>
    )
}


export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    console.log('Component rendered with ' + text)


    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        };

        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler);
        }
    }, [text])

    return <>
        Typed text: {text}
    </>
}


export const SetTimeoutExample = () => {
    const [text, setText] = useState('')

    console.log('Component rendered with ' + text)


    useEffect(() => {
        const timeoutId=setTimeout(() => {
            console.log('TIMEOUT EXPIRED')
            setText('3 seconds passed')
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [text])

    return <>
        Typed text: {text}
    </>
}





