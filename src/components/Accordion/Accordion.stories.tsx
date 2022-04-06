import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from './Accordion';


export default {
    title: 'Accordion',
    component: Accordion,
}
const callback=action('accordion mode change event fired')

export const MenuModeFalse = () => <Accordion titleValue={'menu'} collapsed={false} onClick={callback}/>
export const MenuModeTrue = () => <Accordion titleValue={'menu'} collapsed={true} onClick={callback}/>

export const ControlledCollapsedMode = () => {
    let [value, setValue] = useState<boolean>(false)
    return <Accordion titleValue={'menu'} collapsed={value} onClick={() => setValue(!value)}/>
}



