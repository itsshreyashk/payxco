'use client'
import React, { useEffect } from 'react'
import Link from 'next/link';
const Page = () => {
  useEffect(() => {
    document.title = "Payxpert";
    document.body.style.backgroundColor = 'black';
    return () => {
    }
  }, [])

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <span className='text-gray-300'>Pay it extensively at.</span>
          <h1 className='text-7xl font-bold text-white'>PayX.co</h1>
          <div className="flex justify-center py-8 space-x-2">
            <Link href='/auth'>
              <button type='button' className='border text-white rounded-full px-4 py-2 border-green-600 hover:bg-green-600 transition duration-200 active:scale-[0.9] transform outline-none'>Get Started</button>
            </Link>
          </div>
        </div>
      </div >
    </>
  )
}

export default Page