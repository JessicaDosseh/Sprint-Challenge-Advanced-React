import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    console.log(key); 
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    console.log(storedValue); 
    console.log(setValue); 
    return [storedValue, setValue];
};