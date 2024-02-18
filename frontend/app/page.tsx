'use client'
import React, { useEffect } from 'react'

const Page = () => {
  useEffect(() => {
    document.title = "Payxpert";
    return () => {
    }
  }, [])

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <span className='text-gray-300'>Pay it extensively at.</span>
          <h1 className='text-7xl font-bold'>Payxpert</h1>
          <div className="flex justify-center py-8 space-x-2">
            <button type='button' className='border rounded-full px-4 py-2 border-blue-600 hover:bg-blue-600 transition duration-200 active:scale-[0.9] transform outline-none'>Sign In</button>
            <button type='button' className='border rounded-full px-4 py-2 border-green-600 hover:bg-green-600 transition duration-200 active:scale-[0.9] transform outline-none'>Sign Up</button>

          </div>
        </div>
      </div>

    </>
  )
}

export default Page