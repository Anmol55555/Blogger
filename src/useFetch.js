// A custom Hook


import { useState, useEffect } from 'react';

const useFetch = (apiEndpointUrl) => {
    
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {               // fires the callback function , everytime the page renders
        fetch(apiEndpointUrl)
            .then((response) => {
                if(response.ok == false)        // if res.status != 200, then throw an error
                {
                    throw Error('could not fetch the data for that resource');  
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setIsPending(false);
            });
    }, [apiEndpointUrl]); 

    return {data, isPending, error};

};

export default useFetch;




// useState hook :-
// const [name, setName] = useState('mario');      // it returns array of 2 values, Basically making variable name = 'mario' and cling setName to it to make name reactive
// setName('luigi');                               // This setName functn will change the value of name and rerenders the page ti reflect that on the page as well
// useState Hook which makes a variable reactive such that
// if some variable change after some time , then it triggers
// the react and rerenders the page to reflect the change


// useEffect hook :-
// we can add dependancies as a 2nd argument in the array such that it will fires the callback 
// function only when the specified dependency(variable) changes its state using usestate 
// trigerring a rerender





