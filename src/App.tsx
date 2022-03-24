import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    console.log('App rendering')
    return (
        <div className="App">
            {/*<PageTitle title={'This is APP component'}/>*/}

            {/*<Accordion titleValue={'Menu'} collapsed={true}/>*/}
            {/*<UncontrolledAccordion titleValue={'Menu'} />*/}

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