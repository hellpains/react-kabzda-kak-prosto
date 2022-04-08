import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from './Accordion';


export default {
    title: 'Accordion',
    component: Accordion,
}
const callback=action('accordion mode change event fired')

export const MenuCollapsedMode = () => <Accordion items={['1','2','3']} titleValue={'menu'} collapsed={true} onClick={callback}/>
export const UsersUnCollapsedMode = () => <Accordion items={['Rus','Arbi','Adam']} titleValue={'users'} collapsed={false} onClick={callback}/>

export const ModeChanging = () => {
    let [value, setValue] = useState<boolean>(false)
    return <Accordion items={['Rus','Arbi','Adam']} titleValue={'users'} collapsed={value} onClick={() => setValue(!value)}/>
}



