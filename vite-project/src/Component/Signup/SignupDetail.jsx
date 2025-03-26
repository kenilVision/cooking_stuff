import React, from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Button from '../Common/Button'
import Input from '../Common/Input'
function SignupDetail() {
    const navigate = useNavigate();


  return (
    <section className="bg-gray-50 min-h-screen dark:bg-gray-900 ">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen w-full lg:py-0">
      <div className="w-full max-w-lg bg-white rounded-lg shadow dark:border  dark:bg-gray-800 dark:border-gray-700 mt-10  ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create an account
          </h1>
          <form className="space-y-4 md:space-y-6" >
            <div>
              <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                First Name
              </label>
              <Input
                type="text"
                name="FirstName"
                id="firstName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="First name"
                
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Last Name
              </label>
              <Input
                type="text"
                name="LastName"
                id="lastName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Last name"
                
                required
              />
            </div>
            <div>
              <label htmlFor="mobileNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Mobile Number
              </label>
              <Input
                type="tel"
                name="MobileNumber"
                id="mobileNumber"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder='Number'
                
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email
              </label>
              <Input
                type="email"
                name="Email"
                id="Email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                
                required
              />
            </div>
            <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password
              </label>
              <Input
                type="password"
                name="Password"
                id="Password"
                placeholder="••••••••"
                
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <Button 
                     text="Create an account"  
                     className= "w-full text-center"
                     />
            <p className="text-sm font-light text-gray-500 text-center dark:text-gray-400">
              Already have an account? < NavLink to="/Login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</ NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SignupDetail
