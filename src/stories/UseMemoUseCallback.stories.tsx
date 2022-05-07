import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 1000000) {
                fake++
                const fakeValue = Math.random()
            }
            resultA *= i
        }
        return tempResultA
    }, [a])


    return (
        <>
            <input value={a} onChange={(e) => {
                setA(+e.currentTarget.value)
            }}/>
            <input value={b} onChange={(e) => {
                setB(+e.currentTarget.value)
            }}/>
            <hr/>
            <div>
                Result for a :{resultA}
            </div>
            <div>
                Result for b :{resultB}
            </div>
        </>
    )
}

const UsersContainer = (props: { users: Array<any> }) => {
    console.log('UsersSecret')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersContainer)

export const HelpsToReact = () => {
    console.log('HelpsToReact')

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Rus', 'Arbi', 'Adam'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users, ('Sveta' + new Date().getTime())]
        setUsers(newUsers)
    }

    return (
        <>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
            <button onClick={addUser}>add user
            </button>
            {counter}
            <Users users={newArray}/>
        </>
    )
}


export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS','HTML'])

    // const newArray = useMemo(() => {
    //     return books.filter(b => b.toLowerCase().indexOf('a') > -1)
    // }, [books])

    // const addBook = () => {
    //     const newUsers = [...books, ('Sveta' + new Date().getTime())]
    //     setBooks(newUsers)
    // }
    const memoizedAddBook= useMemo(()=>{
        return()=>{
            console.log(books)
            const newUsers = [...books, ('Sveta' + new Date().getTime())]
            setBooks(newUsers)
        }
    },[books])

    const memoizedAddBook2= useCallback(()=>{
        console.log(books)
        const newUsers = [...books, ('Sveta' + new Date().getTime())]
        setBooks(newUsers)
    },[books])

    return (
        <>
            <button onClick={() => {setCounter(counter + 1)}}>+</button>
            {counter}
            <Book addBook={memoizedAddBook2}/>
        </>
    )
}

type BooksContainerType= {
    addBook:()=>void
}

const BooksContainer = (props:BooksContainerType) => {
    console.log('BooksSecret')
    return <div>

        <button onClick={ () => props.addBook() }>add user</button>
    </div>
}

const Book = React.memo(BooksContainer)