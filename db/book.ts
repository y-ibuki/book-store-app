import firebase from "firebase/app";
import 'firebase/firestore';

export const GetIndexBooks = async () => {
    const db = await firebase.firestore()
    const books = await db.collection('books').get()
    return books
}

export const getBook = async (id: string) => {
    const db = await firebase.firestore()
    const collection = await db.collection('books').doc(id)
    const book = await collection
    return book
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
