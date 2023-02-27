import * as Yup from 'yup'

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).notOneOf(["number"]).required("Please enter your Name"),
  email: Yup.string().email().required("Please enter your Email"),
  password: Yup.string().min(6).max(15).required("Please enter your Password"),
  Cpassword: Yup.string().required().oneOf([Yup.ref('password'), null], "Password is not match")
})
