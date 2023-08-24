import React from 'react'
import Books from '../../../Model/Books';

export const ReturnBook:React.FC<{singleBook: Books}> = (props) => {
    return (
        <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
            <div className='text-center'>
                <img
                    src={props.singleBook.img}
                    width='151'
                    height='233'
                    alt="book"
                />
                <h6 className='mt-2'>{props.singleBook.title}</h6>
                <p>{props.singleBook.author}</p>
                <a className='btn main-color text-white' href='#'>{props.singleBook.category}</a>
            </div>
        </div>
    );
}