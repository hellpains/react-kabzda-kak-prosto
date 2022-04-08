import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: () => void
    items: Array<string>
}

export const Accordion = (props: AccordionPropsType) => {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick}/>
            {!props.collapsed && <AccordionBody items={props.items}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering')
    return <h3 onClick={props.onClick}>{props.title}</h3>
}


type AccordionBodyPropsType = {
    items: Array<string>
}


const AccordionBody = (props: AccordionBodyPropsType) => {
    console.log('AccordionBody rendering')
    return <ul>
        {
            props.items.map((item,i) => {
                return (
                    <li key={i}>{item}</li>
                )
            })
        }
    </ul>
}

