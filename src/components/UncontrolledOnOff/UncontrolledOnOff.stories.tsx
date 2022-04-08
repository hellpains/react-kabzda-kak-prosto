import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from './UncontrolledOnOff';
import {UncontrolledRating} from "../UncontrolledRating/UncontrolledRating";


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
}

export const OnMode = () => <UncontrolledOnOff defaultValue={true} onClick={()=>{}}/>;
export const OffMode = () => <UncontrolledOnOff defaultValue={false} onClick={()=>{}}/>;
export const BugMode = () => <div>Unsync when change defaultValue when already render</div>



// export const ChangedRating = () => {
//     let[rating,setRating]=useState<RatingType>(3)yar
//     return <Rating value={rating} onClick={setRating}/>
// }

