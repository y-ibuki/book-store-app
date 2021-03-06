import React, { ReactNode, SFC } from "react";
import Link from "next/link";
import BookList from "~/src/components/BookList/BookList";
import { auth } from "../../config/firebase";
import {log} from "util";

type TProps = {
  uid: string;
  name: string;
};

const test = [
    { title: "本1", author: "著者1", date: "2021/02/21", price: 300, place: "家", url: "https://google.com", remarks: "テスト備考ああああああああああああああああああああああああああああああああああああああああああああああああああああああああ"},
    { title: "本2", author: "著者2", date: "2021/02/22", price: 1500, place: "東京", url: "https://google.com", remarks: "テスト備考っkっっっっっっsdcscsdcsdcsっっl"},
    { title: "本3", author: "著者3", date: "2021/02/23", price: 900, place: "ああああああああああああああ", url: "https://google.com", remarks: "テスト備考ああああああああああああああ"},
    { title: "本4", author: "著者4", date: "2021/02/24", price: 500, place: "F-10", url: "https://google.com", remarks: "テスト備考テストテスト"},
    { title: "本5", author: "著者5", date: "2021/02/25", price: 80000, place: "E-5", url: "https://google.com", remarks: "テスト備考テストテストテストてすと"}
]

const BookIndex = (props: TProps) => {
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
                test.map( (item,index) => {
                    return (
                        <BookList
                            key={index}
                            title={item.title}
                            author={item.author}
                            date={item.date}
                            url={item.url}
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