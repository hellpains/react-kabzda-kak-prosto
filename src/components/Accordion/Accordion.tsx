import React from "react";

type ItemType={
    title:string
    value:any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: Array<ItemType>
    onClick:(value:any)=>void
}

export const AccordionSecret = (props: AccordionPropsType) => {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items}  onClick={props.onClick}/>}
        </div>
    )
}
export const Accordion=React.memo(AccordionSecret)

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

const AccordionTitleSecret = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering')
    return <h3 onClick={props.onChange}>{props.title}</h3>
}
const AccordionTitle=React.memo(AccordionTitleSecret)


type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick:(value:any)=>void
}


const AccordionBodySecret = (props: AccordionBodyPropsType) => {
    console.log('AccordionBody rendering')
    return <ul>
        {
            props.items.map((item,index) => {
                return (
                    <li onClick={()=>{ props.onClick(item.value) }} key={index}>{item.title}</li>
                )
            })
        }
    </ul>
}
const AccordionBody=React.memo(AccordionBodySecret)
