import React, {FC, useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView/AnalogClockView";


type PropsType = {
    mode?: 'digital' | 'analog'
}

export const Clock = (props: PropsType) => {
    const [timer, setTimer] = useState(new Date());

    useEffect(() => {

        const intervalID = setInterval(() => {
            setTimer(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }

    }, [])

    let view;

    switch (props.mode) {
        case "analog":
            view = <AnalogClockView timer={timer}/>
            break
        case "digital":
        default:
            view = <DigitalClockView timer={timer}/>
    }

    return <div>
        {view}
    </div>
}



export type ClockViewPropsType = {
    timer: Date
}


