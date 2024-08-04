'use client'

import { Label, TextInput, Button } from 'flowbite-react'
import { IoMdContact, IoIosMail } from 'react-icons/io'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineLocationOn } from 'react-icons/md'
import { IoMdEye } from 'react-icons/io'

export function SignUp() {
  return (
    <div className="w-full h-screen bg-[#e9edf4] flex justify-center items-center">
      <div className="signup-container bg-white border p-11 w-[34rem] h-[38rem] rounded-2xl">
        <h1 className="font-sans text-5xl my-14 font-bold">LEMAs App</h1>
        <form action="">
          <div className="">
            <TextInput
              className="svg-black"
              id="fullname"
              type="fullname"
              rightIcon={IoMdContact}
              placeholder="Full Name"
              required
            />
            <TextInput
              className="mt-1"
              id="email"
              type="email"
              rightIcon={IoIosMail}
              placeholder="Email Address"
              required
            />
            <TextInput className="mt-1" id="phone" type="phone" rightIcon={FaPhoneAlt} placeholder="Phone" required />
            <TextInput
              className="mt-1"
              id="city"
              type="city"
              rightIcon={MdOutlineLocationOn}
              placeholder="City"
              required
            />
            <TextInput className="mt-1" id="city" type="city" rightIcon={IoMdEye} placeholder="Password" required />
            <TextInput
              className="mt-1 w-full"
              id="city"
              type="city"
              rightIcon={IoMdEye}
              placeholder="Confirm Password"
              required
            />
          </div>
          <button className="my-1 bordertext-center w-full bg-[#0E2129] text-white rounded-lg h-14" type="submit">
            Register
          </button>
          <div className="my-6 pb">
            <p className="text-base">
              Already have an account? <a href="" className='font-bold'>Sign In</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
