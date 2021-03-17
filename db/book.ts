import firebase from "firebase/app";
import 'firebase/firestore';

export const GetIndexBooks = async (data) => {
    const title = String(data?.title)
    const author = String(data?.author)
    const price = String(data?.price)
    const publishStart = String(data?.publishStart)
    const publishEnd = String(data?.publishEnd)

    const db = await firebase.firestore()
    const books = await db.collection('books')
    books.where('title', '==', title)
    books.where('author', '==', author)
    books.where('price', '==', price)
    books.where('publishStart', '==', publishStart)
    books.where('publishEnd', '==', publishEnd)
    return books.get()
}

export const getBook = async (id: string) => {
    const db = await firebase.firestore()
    const docRef = await db.collection('books').doc(id).get()
    return docRef
}

export const AddBook = async (props) => {
    const db = await firebase.firestore()
    const bookRef = await db.collection('books')
    try {
        bookRef.add({
            user_id: props.user_id,
            title: props.title,
            author: props.author,
            date: props.date,
            price: props.price,
            place: props.place,
            url: props.url,
            remarks: props.remarks
        })
    } catch(e) {}
}
