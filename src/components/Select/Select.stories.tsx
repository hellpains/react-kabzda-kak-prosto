import React, {useState} from 'react';
import {Select} from "./Select";


export default {
    title: 'Select',
    component: Select,
}

export const sdf = () => {
    return (
        <Select
            items={[
                {title: 'Rus', id: 1},
                {title: 'Arbi', id: 2},
                {title: 'Adam', id: 3}
            ]}
            onChange={()=>{}}
        />
    )
}

