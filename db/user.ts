import firebase from "firebase/app";
import 'firebase/firestore';

/**
 * const [userName, setUserName] = useState('')
 * const [userId, setUserId] = useState('')
 * const user = GetUser('yugo');
 * user.then( item => {
 *      setUserName(item.name)
 *      setUserId(item.id)
 *  })
 *
 * @param userId
 * @constructor
 */
export const GetUser = async (userId: string) => {
    const db = await firebase.firestore()
    const collection = await db.collection('users').where('name', "==", userId).get()
    const data = collection.docs[0].data()
    return data;
}
