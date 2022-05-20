import React, {FC} from "react";
import {ClockViewPropsType} from "../Clock";
import s from './AnalogClockView.module.css'


export const AnalogClockView: FC<ClockViewPropsType> = ({timer}) => {

    const secondsStyle = {
        transform: `rotate(${timer.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${timer.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${timer.getHours() * 30}deg)`
    };

    return (
        <div className={s.clock}>
            <div className={s.analogClock}>
                <div className={`${s.dial} ${s.seconds}`} style={secondsStyle}/>
                <div className={`${s.dial} ${s.minutes}`} style={minutesStyle}/>
                <div className={`${s.dial} ${s.hours}`} style={hoursStyle}/>
            </div>
        </div>
    );
}



