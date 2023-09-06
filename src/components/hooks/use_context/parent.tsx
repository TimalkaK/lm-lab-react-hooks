import { useState, createContext } from 'react';
import { Child1 } from './child_1';
import { Child2 } from './child_2';

export interface Theme{
    backgroundColor: string;
    color: string;
    padding: string;
    margin: string;
}


export const ThemeContext = createContext<Theme>({
    backgroundColor: "#CCC",
    color: "#333",
    padding: "2rem",
    margin: "2rem"

})

export const Parent = () => {

    const [darkTheme, setDarkTheme] = useState<Theme>({
        backgroundColor: "#CCC",
        color: "#333",
        padding: "2rem",
        margin: "2rem"
    });

    const toggleTheme = () => {
        setDarkTheme({
        backgroundColor: "#333",
        color: "white",
        padding: "2rem",
        margin: "2rem"
    })
    }

    return (
        <div className='section'>
            <ThemeContext.Provider value={darkTheme}>
            <h2>useContext</h2>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Child1 />
            <Child2 />
            </ThemeContext.Provider>
        </div>

    )
}