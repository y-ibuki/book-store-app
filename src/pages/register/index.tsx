import React, { useRef, useEffect, useContext, useState} from 'react'
import Layout from "~/src/components/Layout";
import { AddBook } from '../../../db/book';
import { auth } from '../../../config/firebase'

export interface IRegisterProps {}

const Register = () => {
    const title   = useRef<HTMLInputElement>(null)
    const author  = useRef<HTMLInputElement>(null)
    const date    = useRef<HTMLInputElement>(null)
    const price   = useRef<HTMLInputElement>(null)
    const place   = useRef<HTMLInputElement>(null)
    const url     = useRef<HTMLInputElement>(null)
    const remarks = useRef<HTMLTextAreaElement>(null)

    const onRegister = () => {
        console.log(auth.currentUser.uid)
        const data = {
            user_id: auth.currentUser.uid,
            title: title.current.value,
            author: author.current.value,
            date: date.current.value,
            price: price.current.value,
            place: place.current.value,
            url: url.current.value,
            remarks: remarks.current.value
        }
        const book = AddBook(data)
        // 一覧にredirectする
    }

    return (
        <Layout>
            <div className="py-3 px-10 flex flex-col">
                <label className="w-1/2 pb-3">
                    <span className="block">書籍名</span>
                    <input ref={title} type="text" className="bg-gray-200 focus:bg-white border-2 p-1 rounded w-full" />
                </label>
                <label className="w-1/2 py-3">
                    <span className="block">著者名</span>
                    <input ref={author} type="text" className="bg-gray-200 focus:bg-white border-2 p-1 rounded w-full" />
                </label>
                <label className="w-1/2 py-3">
                    <span className="block">出版日</span>
                    <input ref={date} type="date" className="bg-gray-200 focus:bg-white border-2 p-1 rounded w-full" />
                </label>
                <label className="w-1/2 py-3">
                    <span className="block">値段</span>
                    <input ref={price} type="text" className="bg-gray-200 focus:bg-white border-2 p-1 rounded w-full" />
                </label>
                <label className="w-1/2 py-3">
                    <span className="block">場所</span>
                    <input ref={place} type="text" className="bg-gray-200 focus:bg-white border-2 p-1 rounded w-full" />
                </label>
                <label className="w-1/2 py-3">
                    <span className="block">URL</span>
                    <input ref={url} type="text" className="bg-gray-200 focus:bg-white border-2 p-1 rounded w-full" />
                </label>
                <label className="w-1/2 py-3">
                    <span className="block">備考</span>
                    <textarea ref={remarks} className="bg-gray-200 focus:bg-white border-2 p-1 rounded w-full" />
                </label>
                <div className="pt-3">
                    <button onClick={onRegister} className="bg-green-100 hover:bg-opacity-60 rounded px-4 py-2">登録</button>
                </div>
            </div>
        </Layout>
    )
};

export default Register;
