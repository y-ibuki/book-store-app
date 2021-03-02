import Layout from "../components/Layout";
import LoginPage from '../components/Login'
import BookIndex from '../components/BookIndex'
import React, { SFC } from "react";
import { auth } from "~/src/lib/firebase";

const IndexPage: SFC = () => {
  return (
      <Layout title="本貯蔵アプリ">
          <div className="mx-20 my-10">
              <div className="">
                  <label htmlFor="">
                      <input type="text" className="border rounded"/>
                  </label>
                  <label htmlFor="">
                      <input type="text" className="border rounded"/>
                  </label>
                  <label htmlFor="">
                      <input type="text" className="border rounded"/>
                  </label>
              </div>
              <div>
                  {
                      auth.currentUser
                      ?
                      <BookIndex
                          name={auth.currentUser.displayName}
                          uid={auth.currentUser.uid}
                      ></BookIndex>
                      :
                      <LoginPage></LoginPage>
                  }
              </div>
          </div>
      </Layout>
  )
};

export default IndexPage;
