import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage.js';

function useDarkMode() {
    const [value, setValue] = useLocalStorage('true');

    useEffect( () => {
        if (useLocalStorage === true) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.replace("dark-mode", "");
        }
    }), [value];

    return [value, setValue];
}

export default useDarkMode;