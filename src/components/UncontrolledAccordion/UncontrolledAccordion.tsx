import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string
}

export const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {
    let [collapsed, setCollapsed] = useState(true)

    return (
        <div>
            <UncontrolledAccordionTitle title={props.titleValue}/>
            <button onClick={()=>setCollapsed(!collapsed)}>TOGGLE</button>
            {!collapsed && <UncontrolledAccordionBody/>}
        </div>
    )
}





type UncontrolledAccordionTitlePropsType = {
    title: string
}

const UncontrolledAccordionTitle = (props: UncontrolledAccordionTitlePropsType) => {


    console.log('UncontrolledAccordionTitle rendering')
    return <h3 >{props.title}</h3>
}





const UncontrolledAccordionBody = () => {
    console.log('UncontrolledAccordionBody rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

