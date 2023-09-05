
import { useEffect, useState } from "react";
import { BooksCards } from "./components/BooksCards";
import Books from "../../Model/Books";

const url:string = "http://localhost:8080/apibook/books";
export const SearchBooksPage = () => {
    const [dataBooks,setDataBooks] = useState<Books[]>([]);
    useEffect( () =>{
        (async() => {
            const data = await fetch(url);
            const json = await data.json();
            setDataBooks(json._embedded.books);
        })()
    },[])
    return (
        <div className="container">
        
            <BooksCards dataBooks={dataBooks}/>
        </div>
    );
}