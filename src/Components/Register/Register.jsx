import React, { useEffect } from 'react'
import axios from "axios";
import { useFormik } from "formik"
import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import * as Yup from "yup"
import WithAuthHoc from '../../HOC/WthAuth';
import { useNavigate } from 'react-router-dom';

const Register = (props) => {
  const navigate = useNavigate()
  const [userDetail, setUserDetail] = useState()
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      address: "",
      email: "",
      password: "",
      confirmPassWord: "",
      phoneNo: "",
      zipCode: ''
    },

    validationSchema: Yup.object({
      name: Yup.string().trim().required("First-Name Is Required"),
      lastName: Yup.string().trim().required(" Last-Name is Required"),
      address: Yup.string().trim().required("Address Is Required"),
      email: Yup.string().trim().required("Email Is Required").email("Invalid-Email Addres"),
      password: Yup.string().trim().required("Password Is Required"),
      phoneNo: Yup.string().trim().required(" Phone Number  Is Required"),
      zipCode: Yup.string().trim().required(" ZipCode Is Required"),

      confirmPassWord: Yup.string().trim().required("Please Confirm Password").oneOf([Yup.ref('password'), null], "Password Must Be Same")

    }),

    onSubmit: values => {
      console.log(values, "values")
      localStorage.setItem("userDetail", JSON.stringify(values))
      setUserDetail(values)

      handleAdd(values)
    }
  });

  const handleAdd = async (values) => {

    try {
      await axios.post("http://localhost:8000/register", values)

      // navigate('/login')
      console.log(values)
    } catch (error) {
      console.error(error);

    }

  }
  console.log(userDetail, "userDetail>>>>>>>>>>>")

  return (



    <form  onSubmit={formik.handleSubmit} className={"w-[80%] h-full  border  shadow-lg  mt-24 rounded-l-2xl ml-[10%]  bg-[#CEE6F2 ] "}>

      <h2 className='text-center text-4xl font-extrabold text-ellipsis text-slate-900'>Register</h2>

      <div className="flex gap-4" style={{ marginLeft: 1300 }}>
        <h2>
          login
        </h2>
        <a href="/login">

          <FaSignInAlt aria-label="Login" className="mt-2" />


        </a>
      </div>

      <div className="w-96  ml-[0%] mt-36" style={{ height: 600 }}    >
        <section className="flex gap-20 mb-5  shadow-2xl shadow-slate-100">
          <div className='mb-9'>
            <label htmlFor="">First-Name</label>
            <input type="text" onChange={formik.handleChange} value={formik.values.name} name="name" className="border border-black w-96 text-center  h-12  " placeholder="Enter Name" />

            {formik.touched.name && formik?.errors.name ? (
              <div style={{ color: "red" }}>
                {formik.errors.name}</div>
            ) : null}

          </div>
          <div>
            <label htmlFor="" className="ml-7 text-center" style={{ marginRight: 120 }}>Last-Name</label>
            <input type="text" onChange={formik.handleChange} value={formik.values.lastName} name="lastName" className="border border-red-950 w-96 text-center  ml-4 outline-red-950 h-12" placeholder="Enter Here" />
            {
              formik.touched.lastName && formik.errors.lastName ? (
                <div style={{ color: "red" }}>

                  {formik.errors.lastName}
                </div>
              ) : null
            }
          </div>

          <div>
            <label htmlFor="" className="ml-9 " style={{ marginRight: 110 }}>Email</label>
            <input type="text" onChange={formik.handleChange} value={formik.values.email} name="email" className="border border-black w-96 text-center  h-12    " placeholder="Enter Here" />

            {
              formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red" }}>

                  {formik.errors.email}
                </div>
              ) : null
            }
          </div>




        </section>
        <div className="flex gap-20 mb-5  shadow-2xl shadow-slate-100">



          <div className="flex gap-20 mb-9  shadow-2xl shadow-slate-100">
            <div>
              <label htmlFor="">Address</label>
              <input type="text" onChange={formik.handleChange} value={formik.values.address} name="address" className="border border-black w-96 text-center  h-12  mr-4 font-mono" placeholder="Enter Here" />
              {
                formik.touched.address && formik.errors.address ? (
                  <div style={{ color: "red" }}>

                    {formik.errors.address}
                  </div>
                ) : null
              }
            </div>

          </div>

          <div>
            <label htmlFor="">Password</label>
            <input type="phoneNo" onChange={formik.handleChange} value={formik.values.password} name="password" className="border border-black w-96 text-center h-12" placeholder="Enter Here" />

            {
              formik.touched.password && formik.errors.password ? (
                <div style={{ color: "red" }}>

                  {formik.errors.password}
                </div>
              ) : null
            }
          </div>
          <div>
            <label htmlFor="" className="ml-9 mr-6">Confirm-Password</label>
            <input type="text" onChange={formik.handleChange} value={formik.values.confirmPassWord} name="confirmPassWord" className="border border-black w-96 text-center  h-12  ml-4" placeholder="Enter Here" />

            {
              formik.touched.confirmPassWord && formik.errors.confirmPassWord ? (
                <div style={{ color: "red" }}>

                  {formik.errors.confirmPassWord}
                </div>
              ) : null
            }
          </div>




        </div>
        <button type="submit" className=" w-96 h-14 bg-slate-900 text-white  mt-10 hover:bg-white hover:text-black hover:border border-black rounded-lg ml-[500px]" >Submit</button>

      </div>

    </form >

  )
}

export default Register;