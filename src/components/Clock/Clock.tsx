import React, {useEffect, useState} from "react";

export const Clock = () => {
    const [timer, setTimer] = useState(new Date());

    useEffect(() => {

       const intervalID= setInterval(() => {
            setTimer(new Date())
        }, 1000)

        return ()=>{
            clearInterval(intervalID)
        }

    }, [])

    return (
        <>
            <div>Time: {timer?.toLocaleTimeString()}</div>
            <div>Date: {timer?.toLocaleDateString()}</div>
        </>
    )
}

export const SuperClock=()=>{

}