import React, {PropsWithChildren, useCallback, useEffect, useState} from 'react'
import { useRouter } from "next/router";
import Layout from "~/src/components/Layout"
import { withRouter } from 'next/router'
import { getBook } from '../../../db/book'

type TProps = {
}

interface IBook {
    title: { [key: string]: string }
}

const show = () => {
    const [book, setBook] = useState(null)
    const router = useRouter()
    const query = router.query

    useEffect(() => {
        async function loadBook() {
            if (query.id === undefined) {
                return
            }
            const doc = await getBook(String(query.id))
            if (!doc.exists) {
                return
            }

            const gotBook = doc.data()
            gotBook.id = doc.id
            setBook(gotBook)
        }

        loadBook()
    }, [query.id])

    const showDetail = (book) => {
        return (
            <div>
                <div className="p-3">
                    <span className="inline-block pr-3">書籍名:</span>
                    {book.title}
                </div>
                <div className="p-3">
                    <span className="inline-block pr-3">著者:</span>
                    {book.author}
                </div>
                <div className="p-3">
                    <span className="inline-block pr-3">出版日:</span>
                    {book.date}
                </div>
                <div className="p-3">
                    <span className="inline-block pr-3">値段:</span>
                    {book.price}
                </div>
                <div className="p-3">
                    <span className="inline-block pr-3">場所:</span>
                    {book.place}
                </div>
                <div className="p-3">
                    <span className="inline-block pr-3">備考:</span>
                    {book.remarks}
                </div>
            </div>
        )
    }

    return (
        <Layout>
            <div className="py-3 px-10 flex flex-col">
                {
                    book ? showDetail(book) : '読み込み中'
                }
            </div>
        </Layout>
    )
}

export default show
