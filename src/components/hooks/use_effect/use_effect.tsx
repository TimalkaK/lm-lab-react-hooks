// make an api call using useEffect
import { useEffect, useState } from "react";

export const APICall = () => {

    const [todo, setTodo] = useState(null);

    useEffect(() => {
        const fetchTodo = async () =>{
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
                const text = await response.json();
                setTodo(text);
            }catch(error){
                console.log(error);
            }
        }
        fetchTodo();
    },[todo]);


    return (
        <>
            <h2>useEffect</h2>
            <p>{JSON.stringify(todo)}</p>
        </>
    )
}