import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage.js';

function useDarkMode() {
    const [value, setValue] = useLocalStorage();

    useEffect(() => {
        if (useLocalStorage === true) {
            return document.body.classList.add("dark-mode");
        } else {
            return document.body.classList.remove("dark-mode");
        }
    }, [value]);

    return [value, setValue];
}

export default useDarkMode;