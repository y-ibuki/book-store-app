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
    { name: "本1", author: "著者1", date: "2021/02/21", price: 300, place: "家", url: "https://google.com", remarks: "テスト備考ああああああああああああああああああああああああああああああああああああああああああああああああああああああああ"},
    { name: "本2", author: "著者2", date: "2021/02/22", price: 1500, place: "東京", url: "https://google.com", remarks: "テスト備考っkっっっっっっsdcscsdcsdcsっっl"},
    { name: "本3", author: "著者3", date: "2021/02/23", price: 900, place: "ああああああああああああああ", url: "https://google.com", remarks: "テスト備考jひsdvjsbdvsvsdv"},
    { name: "本4", author: "著者4", date: "2021/02/24", price: 500, place: "F-10", url: "https://google.com", remarks: "テスト備考テストテスト"},
    { name: "本5", author: "著者5", date: "2021/02/25", price: 80000, place: "E-5", url: "https://google.com", remarks: "テスト備考テストテストテストてすと"}
]

const BookIndex = (props: TProps) => {
    return (
        <ul className="flex flex-wrap justify-between">
            {
                test.map( (item,index) => {
                    return (
                        <BookList
                            key={index}
                            name={item.name}
                            author={item.author}
                            date={item.date}
                            url={item.url}
                            price={item.price}
                            place={item.place}
                            remarks={item.remarks}
                        />
                    )
                })
            }
        </ul>
    )
}

export default BookIndex;