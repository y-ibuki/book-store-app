import Layout from "../components/Layout";
import LoginPage from '../components/Login'
import BookIndex from '../components/BookIndex'
import React, {SFC, useCallback} from "react";
import { auth } from "../../config/firebase";

const IndexPage: SFC = () => {
  const onClick = (e) => useCallback( () => {

  }, [])

  return (
      <Layout>
          <div className="m-10">
              <div className="pt-5">
                  {
                      auth.currentUser
                      ?
                      <div>
                          <div className="">
                              <div className="flex pt-3 items-end">
                                  <label className="w-1/5 mr-3">
                                      <p>書籍名</p>
                                      <input type="text" className="bg-gray-200 focus:bg-white border-2 p-1 rounded w-full"/>
                                  </label>
                                  <label className="w-1/5 mr-3">
                                      <p>著者名</p>
                                      <input type="text" className="bg-gray-200 focus:bg-white border-2 p-1 rounded w-full"/>
                                  </label>
                                  <label className="w-1/5 mr-3">
                                      <p>値段</p>
                                      <input type="text" className="bg-gray-200 focus:bg-white border-2 p-1 rounded w-full"/>
                                  </label>
                              </div>
                              <div className="flex pt-3 items-end">
                                  <label className="w-1/5 mr-3">
                                      <p>出版日 開始</p>
                                      <input type="date" className="bg-gray-200 focus:bg-white border-2 p-1 rounded w-full"/>
                                  </label>
                                  <label className="w-1/5 mr-3">
                                      <p>出版日 終了</p>
                                      <input type="date" className="bg-gray-200 focus:bg-white border-2 p-1 rounded w-full"/>
                                  </label>
                                  <button onClick={onClick} className="bg-green-100 hover:bg-opacity-60 rounded px-4 py-2 h-10">検索</button>
                              </div>
                          </div>
                          <div className="mt-10">
                              <p className="text-2xl mb-5">検索結果</p>
                              <BookIndex
                                  name={auth.currentUser.displayName}
                                  uid={auth.currentUser.uid}
                              ></BookIndex>
                          </div>
                      </div>
                      :
                      <LoginPage></LoginPage>
                  }
              </div>
          </div>
      </Layout>
  )
};

export default IndexPage;
