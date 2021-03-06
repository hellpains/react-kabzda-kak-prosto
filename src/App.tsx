import React, {useEffect, useState} from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {RatingType, UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {OnOff} from "./components/OnOff/OnOff";
import {Select} from "./components/Select/Select";
import {Clock} from "./components/Clock/Clock";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState(true)
    let [switchOn, setSwitchOn] = useState(false)
    const [value, setValue] = useState('2');

    return (
        <div className="App">
            <PageTitle title={'This is APP component'}/>


            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}

            {/*<UncontrolledRating />*/}
            <Clock mode={'digital'}/>
            <Clock mode={'analog'}/>
            {/*<Accordion*/}
            {/*    titleValue={'Menu'}*/}
            {/*    collapsed={accordionCollapsed}*/}
            {/*    onClick={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>*/}

            {/*<UncontrolledAccordion titleValue={'Menu'} />*/}
            {/*<OnOff on={switchOn} onClick={setSwitchOn}/>*/}
            {/*<UncontrolledOnOff onClick={setSwitchOn}/>{switchOn.toString()}*/}
            {/*<Select value={value}*/}
            {/*    items={[*/}
            {/*        {title: 'Rus', value: '1'},*/}
            {/*        {title: 'Arbi', value: '2'},*/}
            {/*        {title: 'Adam', value: '3'}*/}
            {/*    ]}*/}
            {/*    onChange={setValue}*/}
            {/*/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}
const PageTitle = (props: PageTitlePropsType) => {
    console.log('AppTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;

