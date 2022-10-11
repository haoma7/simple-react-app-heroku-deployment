import { useState } from "react";

function User(props){
    return (
        <h1>Name: {props.name} Age: {props.age}</h1>
    )

}

function SecondUser(){
    const [counter, setCounter]=useState(0);
    const increment = ()=>{setCounter(counter + 1);}
    return (
        <div>        
            <h1>Second User data here</h1>        
            <button onClick={increment}>Click me</button>
            <p> You clicked {counter} times</p>
        </div>
    )
}
export {User, SecondUser};