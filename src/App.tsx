import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {RatingType, UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    let [ratingValue,setRatingValue]=useState<RatingType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState(true)
    let [switchOn, setSwitchOn ] = useState(false)

    return (
        <div className="App">
            {/*<PageTitle title={'This is APP component'}/>*/}

            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<UncontrolledRating />*/}

            {/*<Accordion*/}
            {/*    titleValue={'Menu'}*/}
            {/*    collapsed={accordionCollapsed}*/}
            {/*    onClick={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>*/}
            {/*<UncontrolledAccordion titleValue={'Menu'} />*/}



            {/*<OnOff on={switchOn} onClick={setSwitchOn}/>*/}
            <UncontrolledOnOff onClick={setSwitchOn}/>{switchOn.toString()}
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