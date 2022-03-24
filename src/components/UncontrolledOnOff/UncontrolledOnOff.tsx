import React, {useState} from 'react';

type UncontrolledOnOffPropsType = {

}

export const UncontrolledOnOff = (props: UncontrolledOnOffPropsType) => {
    let [uncontrolledOn, setUncontrolledOn ] = useState(false)

    const onOffStyle = {
        display: 'flex',
        margin: '20px'
    }
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        backgroundColor: uncontrolledOn ? 'green' : 'white',

    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        marginLeft: '1px',
        backgroundColor: uncontrolledOn ? 'white' : 'red',
    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '15px',
        border: '1px solid black',
        marginLeft: '5px',
        backgroundColor: uncontrolledOn ? 'green' : 'red',
    }

    return (
        <div style={onOffStyle}>
            <div onClick={()=>{ setUncontrolledOn(true) }} style={onStyle}>On</div>
            <div onClick={()=>{ setUncontrolledOn(false) }} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};
