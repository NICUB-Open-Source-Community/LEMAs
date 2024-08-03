'use client'

import { Label, TextInput, Button } from 'flowbite-react'
import { IoMdContact, IoIosMail } from 'react-icons/io'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineLocationOn } from 'react-icons/md'
import { IoMdEye } from 'react-icons/io'

export function SignUp() {
  return (
    <div className="">
      <div className="signup-container">
        <h1 className="font-sans text-5xl my-14">LEMAs App</h1>
        <form action="">
          <div className="max-w-md">
            <TextInput
              className=""
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
              className="mt-1"
              id="city"
              type="city"
              rightIcon={MdOutlineLocationOn}
              placeholder="Confirm Password"
              required
            />
          </div>
          <Button className="my-1" type="submit">
            Register
          </Button>
          <div className="mt-6">
            <p className='text-base'>
              Already have an account? <a href="">Sign In</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
