import React from "react";
import Link from 'next/Link'

type TProps = {
    title: string,
    author: string,
    date: string,
    price: number,
    place: string,
    id: number
};

const BookList: React.FC<TProps> = ({
    title,
    author,
    date,
    price,
    place,
    id
}) =>  {
    return (
        <li className="w-full">
            <Link href={`/show/${id}`} >
                <a className="p-2 flex hover:bg-yellow-200 hover:bg-opacity-20 duration-200">
                    <p className="text-lg w-1/5 line-clamp-1">{title}</p>
                    <p className="text-lg w-1/5 line-clamp-1">{author}</p>
                    <p className="text-lg w-1/5 line-clamp-1">{date}</p>
                    <p className="text-lg w-1/5 line-clamp-1">{price}</p>
                    <p className="text-lg w-1/5 line-clamp-1">{place}</p>
                </a>
            </Link>
        </li>
    )
}

export default BookList;