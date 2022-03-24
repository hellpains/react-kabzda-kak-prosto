import React, {useState} from 'react';

type OnOffPropsType = {

}

export const OnOff = (props: OnOffPropsType) => {
    let [on, setOn ] = useState(false)

    const onOffStyle = {
        display: 'flex',
        margin: '20px'
    }
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'white',

    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        marginLeft: '1px',
        backgroundColor: on ? 'white' : 'red',
    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '15px',
        border: '1px solid black',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red',
    }

    return (
        <div style={onOffStyle}>
            <div onClick={()=>{ setOn(true) }} style={onStyle}>On</div>
            <div onClick={()=>{ setOn(false) }} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};
