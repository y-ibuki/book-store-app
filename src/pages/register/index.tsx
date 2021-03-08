import React from 'react'
import Layout from "~/src/components/Layout";
import { AddBook } from '../../../db/book';
import { auth } from '../../../config/firebase'
import Input from '../../components/Utils/Input'

export interface IRegisterProps {}

const Register = () => {

    const getValue = (name) => {
        return document.getElementById(name).getAttribute('value')
    }

    const getTextarea = (name) => {
        return document.getElementById(name).textContent
    }

    const onRegister = () => {
        const data = {
            user_id: auth.currentUser.uid,
            title: getValue('title'),
            author: getValue('author'),
            date: getValue('date'),
            price: getValue('price'),
            place: getValue('place'),
            url: getValue('url'),
            remarks: getTextarea('remarks')
        }
        AddBook(data)
        // 一覧にredirectする
    }

    return (
        <Layout>
            <div className="py-3 px-10 flex flex-col">
                <Input id="title" title="書籍名" type="text" top />
                <Input id="author" title="著者名" type="text" />
                <Input id="date" title="出版日" type="date" />
                <Input id="price" title="値段" type="text" />
                <Input id="place" title="場所" type="text" />
                <Input id="url" title="URL" type="text" />
                <Input id="remarks" title="備考" type="textarea" />
                <div className="pt-3">
                    <button onClick={onRegister} className="bg-green-100 hover:bg-opacity-60 rounded px-4 py-2">登録</button>
                </div>
            </div>
        </Layout>
    )
};

export default Register;
