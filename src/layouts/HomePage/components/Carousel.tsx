import { useEffect, useState } from "react";
import Books from "../../../Model/Books";
import { SpinnerLoading } from "../../Utils/SpinnerLoading";
import { useFetch } from "../../../hook/useFetch";
import { ReturnBook } from "./ReturnBook";
import  { datajson }   from "../../../data/data";
const url: string = "http://localhost:8080/apibook/books";
//const url: string = "http://localhost:8888/react/data";

export const Carousel = () => {
    // const [dataBooks, setDataBooks] = useState<Books[]>([]);
    // const [isLoading, setIsLoading] = useState(true);
    // const [httpError, setHttpError] = useState(null);
 
    // useEffect( () => {
    //     console.log("entro");
    //     const fetchData = async() => {
    //         const data = await fetch(url); // prima era url
    //         const json = await data.json();
    //         console.log(json);
    //         setDataBooks(json._embedded.books);
    //         setIsLoading(false);
    //     } 
    //     fetchData().catch((error: any) => {

    //         setHttpError(error.message);
    //     })
    // },[]);

    // DINAMICO 
    //const { dataBooks, isLoading, httpError } = useFetch(url);
    // if (isLoading) {
    //     return (
    //         <SpinnerLoading />
    //     )
    // }

    // if (httpError) {
    //     return (
    //         <div className='container m-5'>
    //             <p>{httpError}</p>
    //         </div>
    //     )
    // }
    // FINE DINAMICO

    const {books: dataBooks} = datajson._embedded;
    return (
        <div className='container mt-5' style={{ height: 550 }}>
            <div className='homepage-carousel-title'>
                <h3>Find your next "I stayed up too late reading" book.</h3>
            </div>
            <div id='carouselExampleControls' className='carousel carousel-dark slide mt-5 
                d-none d-lg-block' data-bs-interval='false'>

                {/* Desktop */}
                <div className='carousel-inner'>
                    {

                        dataBooks.map((singleBook, index) => (
                            <div className={"carousel-item " + (index === 0 ? 'active' : '')} key={index}>
                                <div className='row d-flex justify-content-center align-items-center'>
                                    <ReturnBook singleBook={singleBook} />
                                </div>
                            </div>
                        ))
                    }



                    <button className='carousel-control-prev' type='button'
                        data-bs-target='#carouselExampleControls' data-bs-slide='prev'>
                        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                        <span className='visually-hidden'>Previous</span>
                    </button>
                    <button className='carousel-control-next' type='button'
                        data-bs-target='#carouselExampleControls' data-bs-slide='next'>
                        <span className='carousel-control-next-icon' aria-hidden='true'></span>
                        <span className='visually-hidden'>Next</span>
                    </button>
                </div>
            </div>

            {/* Mobile */}
            <div className='d-lg-none mt-3'>
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='text-center'>
                        <img
                            src={require('../../../Images/BooksImages/book-luv2code-1000.png')}
                            width='151'
                            height='233'
                            alt="book"
                        />
                        <h6 className='mt-2'>Book</h6>
                        <p>Luv2Code</p>
                        <a className='btn main-color text-white' href='#'>Reserve</a>
                    </div>
                </div>
            </div>
            <div className='homepage-carousel-title mt-3'>
                <a className='btn btn-outline-secondary btn-lg' href='#'>View More</a>
            </div>
        </div>
    );
}