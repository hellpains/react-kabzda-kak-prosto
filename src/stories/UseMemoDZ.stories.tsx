import React, {useMemo, useState} from "react";
import {Select} from "../components/Select/Select";

export default {
    title: 'useMemoDZ'
}

// export const UseMemoExample = () => {
//
//     const [a, setA] = useState<number>(5)
//     const [b, setB] = useState<number>(5)
//
//     let resultA = 1;
//     let resultB = 1;
//
//     resultA = useMemo(() => {
//         let tempResultA = 1;
//         for (let i = 1; i <= a; i++) {
//             let fake = 0;
//             while (fake < 1000000) {
//                 fake++
//                 const fakeValue = Math.random()
//             }
//             resultA *= i
//         }
//         return tempResultA
//     }, [a])
//
//
//     return (
//         <>
//             <input value={a} onChange={(e) => {
//                 setA(+e.currentTarget.value)
//             }}/>
//             <input value={b} onChange={(e) => {
//                 setB(+e.currentTarget.value)
//             }}/>
//             <hr/>
//             <div>
//                 Result for a :{resultA}
//             </div>
//             <div>
//                 Result for b :{resultB}
//             </div>
//         </>
//     )
// }


export const UseMemoExample = () => {
    const [r, setR] = useState('1');
    const [b, setB] = useState('2');
    const [u, setU] = useState('2');
    let [rus] = useState([
        {title: 'Moscow', value: '1'},
        {title: 'Grozny', value: '2'},
        {title: 'Piter', value: '3'}
    ])
    let [bel] = useState([
        {title: 'Minsk', value: '1'},
        {title: 'Gomiel', value: '2'},
        {title: 'XXX', value: '3'}
    ])
    let [ukr] = useState([
        {title: 'Kiev', value: '1'},
        {title: 'Donetsk', value: '2'},
        {title: 'Kharkov', value: '3'}
    ])

    const [counter, setCounter] = useState(0)

    let rusNew=useMemo(()=>{
        return rus.filter(u => u.title.toLowerCase().indexOf('o') > -1)
    },[rus])
    let belNew=useMemo(()=>{
        return bel.filter(u => u.title.toLowerCase().indexOf('i') > -1)
    },[bel])
    let ukrNew=useMemo(()=>{
        return ukr.filter(u => u.title.toLowerCase().indexOf('e') > -1)
    },[ukr])

    return (
        <>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
            {counter}
            <div style={{
                display: 'flex', width: '200px',
                justifyContent: 'space-between',
                marginBottom: '50px'
            }}>
                <SelectRussiaExample rus={rusNew} r={r} setR={setR}/>
                <SelectBelExample bel={belNew} b={b} setB={setB}/>
                <SelectUkrExample ukr={ukrNew} u={u} setU={setU}/>
            </div>

        </>
    )
}

type SECRussiaType = {
    rus: any
    r: string
    setR: (r: string) => void
}
const SelectRussiaExampleContainer = (props: SECRussiaType) => {
    console.log('Russia')
    return (
        <Select value={props.r}
                items={props.rus}
                onChange={props.setR}
        />
    )
}

type SECBelType = {
    bel:any
    b: string
    setB: (b: string) => void
}
const SelectBelExampleContainer = (props: SECBelType) => {
    console.log('Bel')
    return (

        <Select value={props.b}
                items={props.bel}
                onChange={props.setB}
        />

    )
}

type SECUkrType = {
    ukr:any
    u: string
    setU: (u: string) => void
}
const SelectUkrExampleContainer = (props: SECUkrType) => {
    console.log('Ukr')
    return (

        <Select value={props.u}
                items={props.ukr}
                onChange={props.setU}
        />

    )
}

const SelectRussiaExample = React.memo(SelectRussiaExampleContainer)
const SelectBelExample = React.memo(SelectBelExampleContainer)
const SelectUkrExample = React.memo(SelectUkrExampleContainer)


