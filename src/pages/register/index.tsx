import React, { useContext } from 'react'
import Layout from "~/src/components/Layout";
import { GetUser } from '../../../db/user';

export interface IRegisterProps {}

const Register: React.SFC<IRegisterProps> = () => {
    const user = GetUser(1)
    return (
        <Layout>
        </Layout>
    )
};

export default Register;
