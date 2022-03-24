import React from "react";
import {log} from "util";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

export const Accordion = (props: AccordionPropsType) => {
    console.log('Accordion rendering')
    if (props.collapsed) {
        return (
            <AccordionTitle title={props.titleValue}/>
        )
    }else{
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </div>
        )
    }
}

type AccordionTitlePropsType = {
    title: string
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering')
    return <h3>{props.title}</h3>
}

const AccordionBody = () => {
    console.log('AccordionBody rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

