import React from 'react';
import { useState, useEffect } from 'react';


function DateTime() {
    const [ date, setDate] = useState(new Date());

    useEffect (() => {
        const timer = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return <div>{date.toLocaleString()}</div>

}

export default DateTime;