import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating";

function App() {
    console.log('App rendering')
    return (
        <div className="App">
            <PageTitle title={'This is APP component'}/>
            Article 1
            <Rating value={2}/>
            <Accordion title={'Menu'}/>
            <Accordion title={'Users'}/>
            Article 2
            <Rating value={4}/>
        </div>
    );
}

const PageTitle = (props:any) => {
    console.log('AppTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;