import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";

type UncontrolledAccordionPropsType = {
    titleValue: string
}

export const UncontrolledAccordionContainer = (props: UncontrolledAccordionPropsType) => {
    // let [collapsed, setCollapsed] = useState(true)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            <UncontrolledAccordionTitle
                title={props.titleValue}
                onClick={() => dispatch({type: TOGGLE_COLLAPSED})}
            />
            {/*<button onClick={()=>setCollapsed(!collapsed)}>TOGGLE</button>*/}
            {!state.collapsed && <UncontrolledAccordionBody/>}
        </div>
    )
}
export const UncontrolledAccordion = React.memo(UncontrolledAccordionContainer)

type UncontrolledAccordionTitlePropsType = {
    title: string
    onClick: () => void
}

const UncontrolledAccordionTitleContainer = (props: UncontrolledAccordionTitlePropsType) => {
    return <h3 onClick={props.onClick}>{props.title}</h3>
}
export const UncontrolledAccordionTitle = React.memo(UncontrolledAccordionTitleContainer)

const UncontrolledAccordionBodyContainer = () => {
    console.log('UncontrolledAccordionBody rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
export const UncontrolledAccordionBody = React.memo(UncontrolledAccordionBodyContainer)