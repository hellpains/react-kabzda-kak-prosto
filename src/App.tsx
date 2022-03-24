import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    let [value,setValue]=useState(0)
    let [collapsed, setCollapsed] = useState(true)

    return (
        <div className="App">
            {/*<PageTitle title={'This is APP component'}/>*/}

            <Accordion titleValue={'Menu'} collapsed={true}/>
            <UncontrolledAccordion titleValue={'Menu'} />

            <Rating value={1} />
            <UncontrolledRating />

            {/*<OnOff />*/}
            {/*<UncontrolledOnOff />*/}
        </div>
    );
}

type PageTitlePropsType={
    title:string
}
const PageTitle = (props:PageTitlePropsType) => {
    console.log('AppTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;