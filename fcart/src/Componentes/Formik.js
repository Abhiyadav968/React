import { useFormik } from 'formik'
import React from 'react'
import { signUpSchema } from '../Scima'

const initialValues = {
    name: "",
    email: "",
    password: "",
    Cpassword: "",
}

const Formik = () => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            console.log(values)
        }
    })
    console.log(errors)
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className="w-[70%]  px-[300px]">
                <form onSubmit={handleSubmit}>
                    {/* NAME */}
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete='off'
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='bg-transparent border-b-2 border-black focus:outline-none pl-3'
                    />
                    {errors.name && touched.name ? <p className='text-xs text-red-600'>{errors.name}</p> : null}
                    <br /><br />
                    {/* EMAIL */}
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete='off'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='bg-transparent border-b-2 border-black focus:outline-none pl-3'
                    /> 
                    {errors.email && touched.email ? <p className='text-xs text-red-600'>{errors.email}</p> : null}
                     <br /><br />
                    {/* PASSWORD */}
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        autoComplete='off'
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='bg-transparent border-b-2 border-black focus:outline-none pl-3'
                    /> 
                    {errors.password && touched.password ? <p className='text-xs text-red-600'>{errors.password}</p> : null}
                    <br /><br />
                    {/* COMFORM PASSWORD */}
                    <label htmlFor="Cpassword">Comform password</label>
                    <input
                        type="password"
                        name="Cpassword"
                        id="Cpassword"
                        autoComplete='off'
                        value={values.Cpassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='bg-transparent border-b-2 border-black focus:outline-none pl-3'
                    /> 
                    {errors.Cpassword && touched.Cpassword ? <p className='text-xs text-red-600'>{errors.Cpassword}</p> : null}
                    <br /><br />
                    {/* Buttion */}
                    <button type='submit' className='border px-5 py-1 rounded-md'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Formik