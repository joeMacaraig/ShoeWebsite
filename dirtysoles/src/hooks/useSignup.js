import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const {dispatch} = useAuthContext();

    const signup = async(first_name, last_name, email, username, password) => {
        setLoading(true);
        setError(null);

        const response = await fetch('/signup', {
            method: "POST", 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({first_name, last_name, email, username, password})
        })
        
        const json = await response.json();

        if(!response.ok){
            setLoading(false);
            setError(json.error);
        }

        if (response.ok) {
            //saves the user to the local storage
            localStorage.setItem('user', JSON.stringify(json));
            //update the auth context
            dispatch({type: 'LOGIN', payload: json});

            setLoading(false);
        }
    }

    return {signup, loading, error};
}
