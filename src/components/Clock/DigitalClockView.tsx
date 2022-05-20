import React, {FC} from "react";
import {ClockViewPropsType} from "./Clock";

export const DigitalClockView: FC<ClockViewPropsType> = ({timer}) => {
    return <span>Time: {timer?.toLocaleTimeString()}</span>
}