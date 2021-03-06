import React from "react";
import Link from "next/link";

type TProps = {
    title: string,
    author: string,
    date: string,
    price: number,
    place: string,
    url: string
};

const BookList: React.FC<TProps> = ({
    title,
    author,
    date,
    price,
    place,
    url,
}) =>  {
    return (
        <li className="w-full">
            <a href={url} className="p-2 flex hover:bg-yellow-200 hover:bg-opacity-20 duration-200">
                <p className="text-lg w-1/5 line-clamp-1">{title}</p>
                <p className="text-lg w-1/5 line-clamp-1">{author}</p>
                <p className="text-lg w-1/5 line-clamp-1">{date}</p>
                <p className="text-lg w-1/5 line-clamp-1">{price}</p>
                <p className="text-lg w-1/5 line-clamp-1">{place}</p>
            </a>
        </li>
    )
}

export default BookList;