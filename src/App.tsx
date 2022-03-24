import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating";

function App() {
    console.log('App rendering')
    return (
        <div className="App">
            {/*<PageTitle title={'This is APP component'}/>*/}
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            {/*<Rating value={4}/>*/}
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