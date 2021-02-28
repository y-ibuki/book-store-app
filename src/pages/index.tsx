import Layout from "../components/Layout";
import { Login, Logout, auth } from "~/src/lib/firebase";

const IndexPage = () => {
  return (
      <Layout title="本貯蔵アプリ">
        <h1>本貯蔵アプリ</h1>
        <div>
          <button onClick={() => Login()}>ログイン</button>
          <button onClick={() => Logout()}>ログアウト</button>
        </div>
        <div>
          <pre>
            {auth.currentUser
              ? auth.currentUser.displayName + "でログインしています"
              : "ログインしていません"}
          </pre>
        </div>
      </Layout>
  )
};

export default IndexPage;
