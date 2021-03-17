import React, {useEffect, useState} from "react";
import BookList from "~/src/components/BookList/BookList";
import { GetIndexBooks } from '../../db/book'

type TProps = {
  uid: string;
  name: string;
};

const BookIndex = (props: TProps) => {
    const [ books, setBooks ] = useState([])

    useEffect( () => {
        const f = async () => {
            const payload = await GetIndexBooks({})
            return payload
        };
        const indexBooks = f()
        indexBooks.then( i => {
            setBooks(i.docs)
        })
    }, [])

    return (
        <ul className="flex flex-wrap justify-between">
            <li className="w-full">
                <div className="flex p-2">
                    <p className="text-lg w-1/5 line-clamp-1">書籍名</p>
                    <p className="text-lg w-1/5 line-clamp-1">著者名</p>
                    <p className="text-lg w-1/5 line-clamp-1">出版日</p>
                    <p className="text-lg w-1/5 line-clamp-1">値段</p>
                    <p className="text-lg w-1/5 line-clamp-1">場所</p>
                </div>
            </li>
            {
                books.map( (book, index) => {
                    const item = book.data()
                    return (
                        <BookList
                            key={index}
                            id={book.id}
                            title={item.title}
                            author={item.author}
                            date={item.date}
                            price={item.price}
                            place={item.place}
                        />
                    )
                })
            }
        </ul>
    )
}

export default BookIndex;