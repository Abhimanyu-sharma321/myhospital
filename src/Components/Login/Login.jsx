import axios from 'axios';
import { Formik, useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup"

const Login = (isAuthenticate) => {

    const navigate = useNavigate()
    const [userInfo, setUserInfo] = useState()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            invalidEmail: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().trim().required("Email Is Required").email("Invalid-Email Addres"),
            password: Yup.string().trim().required("Password Is Required"),

            invalidEmail: Yup.string()
        }),
        onSubmit: values => {
            handleLogin(values)
        }
    });
    const handleLogin = async (values) => {
        try {
            let res = await axios.get("http://localhost:8000/register")
            setUserInfo(res?.data)
            const CREDENTIAL = userInfo?.map((item) => item.email === values?.email && item?.password === values?.password)

            let token = "ajhduieh4iervdwqdhuijhdwqwdjhbjwdbjhiowhvbdwqvdhjbjBqBDJHBWQJHDBHWDHWJQVBDHJUY2GWDVQHWDvqvv"
            if (CREDENTIAL) {
                localStorage.setItem("token", token)
                navigate("/us")
            }
        } catch (error) {

            console.error(error);

        }
    }
    return (
        <form action="" onSubmit={formik.handleSubmit} >
            <h2 className='text-center text-4xl text-slate-950 font-extrabold mt-10'> Login </h2>
            <div className="w-[20%]  ml-[41%] mt-10  p-14 h-[10%]" style={{ height: 600 }} >

                <div className="gap-20 mb-5  shadow-2xl shadow-slate-100  ">
                    <div className='-ml-10 mb-10'>
                        <label htmlFor="" style={{ marginRight: 110 }}>Email</label>
                        <input type="text" onChange={formik.handleChange} value={formik.values.email} name="email" className="border border-black w-80 h-10 text-center  " placeholder="Enter Here" />
                        {
                            formik.touched.email && formik.errors.email ? (
                                <div className="text-red-950">
                                    {formik.errors.email}
                                </div>
                            ) : null
                        }
                    </div>
                    <div className='-ml-10'>
                        <label htmlFor="" >Password</label>
                        <input type="password" onChange={formik.handleChange} value={formik.values.password} name="password" className="border border-black w-80 text-center h-10" placeholder="Enter Here" />

                        {
                            formik.touched.password && formik.errors.password ? (
                                <div className="text-red-950">
                                    {formik.errors.password}
                                </div>
                            ) : null
                        }
                    </div>
                </div>
                <button type="submit" className=" w-60 h-10 bg-slate-950 text-white  mt-10 hover:bg-white hover:text-black hover:border border-black rounded-lg hover:scale-105 " style={{ marginLeft: 10 }}  > Login</button>
            </div>
        </form>     
    )
}

export default Login