import React from 'react'
import { Login, Logout, firebaseUser } from "../../../config/firebase";

const Header = () => {
    return (
        <header className="text-2xl p-3 bg-gray-100">
            <div className="flex justify-between">
                Book Store App
                <div className="buttonWrapper">
                    {
                        firebaseUser() ?
                            <div className="flex items-center">
                                <span className="text-sm mr-3">
                                    <div>ログインユーザー:</div>
                                    { firebaseUser().displayName }
                                </span>
                                <button
                                    onClick={() => Logout()}
                                    className="bg-blue-500 hover:bg-blue-700 text-white px-2 rounded text-sm h-7"
                                >
                                    ログアウト
                                </button>
                            </div>
                            :
                            <button
                                onClick={() => Login()}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-3 text-sm"
                            >
                                ログイン
                            </button>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header
