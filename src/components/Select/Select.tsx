import React, {useState} from "react";
import s from './Select.module.css'

type ItemType = {
    title: string
    id: any
}

type SelectPropsType = {
    onChange: (value: any) => void
    items: Array<ItemType>
}

export const Select = (props: SelectPropsType) => {
    let [collapsed, setCollapsed] = useState<boolean>(true)
    let [value, setValue] = useState('Name')

    const onClickHandler = (id:number,title:string) => {
        let elem=props.items.find(el=>el.id===id)
        if(elem){
            setValue(elem.title)
        }
    }
    const onClickCollapsed = () => {
        setCollapsed(!collapsed)
    }
    return (
        <div className={s.selectBox}>
            <h3><div className={s.valueTag}onClick={onClickCollapsed}>{value}</div></h3>
            {!collapsed &&
                <div className={s.selectMenuBox}>
                    {props.items.map(i => {
                        return <div className={s.option} key={i.id} onClick={()=>onClickHandler(i.id,i.title)}>{i.title}</div>
                    })}
                </div>}
        </div>
    )
}