import { useEffect, useState } from "react";
import Books from "../Model/Books";

export const useFetch = (url: string) => {
    const [dataBooks, setDataBooks] = useState<Books[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect( () => {
        const fetchData = async () => {
            const data = await fetch(url);
            const json = await data.json();
            setDataBooks(json._embedded.books);
            setIsLoading(false);
        } 
        fetchData().catch((error: any) => {
            setHttpError(error.message);
        })
    },[url]);

    return{dataBooks,httpError,isLoading };
}