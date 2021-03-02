import React from "react";
import Link from "next/link";

type TProps = {
    name: string,
    author: string,
    date: string,
    price: number,
    place: string,
    url: string,
    remarks: string
};

const BookList: React.FC<TProps> = ({
    name,
    author,
    date,
    price,
    place,
    url,
    remarks,
}) =>  {
    return (
        <li className="w-2/5">
            <a
                href={url}
                className="
                    block
                    duration-150
                    transform shadow-2xl
                    p-8
                    hover:opacity
                    hover:scale-110
                    mt-5
                    h-44
                    "
            >
                <div className="flex1">
                    <p className="text-lg">
                        {name}
                        <span className="text-gray-500 text-xs ml-5">著者: {author} </span>
                    </p>
                    <p className="mt-4 line-clamp-3">
                        備考: { remarks }
                    </p>
                </div>
            </a>
        </li>
    )
}

export default BookList;