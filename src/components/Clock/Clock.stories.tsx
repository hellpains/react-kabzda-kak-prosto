import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Clock} from "./Clock";


export default {
    title: 'Clock',
    component: Clock,
}

export const BaseDigitalExample = () => <Clock mode={'digital'}/>


export const BaseAnalogExample = () => <Clock mode={'analog'}/>


