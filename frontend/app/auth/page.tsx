'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation';

const Auth = () => {
    const [auth, setAuth] = useState('signin');
    const router = useRouter();
    useEffect(() => {
        document.body.style.backgroundColor = 'white';
        return () => {
        }
    }, [])

    return (
        <>
            <div className="flex justify-center p-1">
                <div className="overflow-hidden flex w-[max-content] rounded-xl border">
                    <button className={`border-0 px-4 py-2 text-sm active:opacity-70 ${auth === 'signup' ? 'bg-gray-800 text-white' : ''}`} onClick={() => { setAuth('signup') }}>Sign Up</button>
                    <button className={`border-0 px-4 py-2 text-sm active:opacity-70 ${auth === 'signin' ? 'bg-gray-800 text-white' : ''}`} onClick={() => { setAuth('signin') }}>Sign In</button>
                </div>
            </div>
            <div className="flex justify-center p-1">
                <div className="w-[90vw] min-w-[max-content] max-w-[300px] rounded-xl border text-center">
                    <div className="space-y-1 px-4 py-2">
                        {/* For Login */}
                        {
                            auth === 'signin' && (

                                <>
                                    <div className="text-start">
                                        <label htmlFor="Username" className='text-sm font-bold'>Username</label>
                                        <input type="text" name='Username' className="w-full rounded-xl border px-4 py-2 text-sm outline-none outline-4 focus:outline-blue-600" /><br />
                                        <label htmlFor="Password" className='text-sm font-bold'>Password</label>
                                        <input type="password" name='Password' className="w-full rounded-xl border px-4 py-2 text-sm outline-none outline-4 focus:outline-blue-600" />

                                    </div>
                                    <div className="pt-6">
                                        <button type="button" className="w-full rounded-xl bg-blue-600 px-4 py-2 text-sm text-white active:bg-blue-800">Sign In</button>
                                    </div>
                                </>
                            )
                        }
                        {
                            auth === 'signup' && (
                                <>
                                    <div className="text-start">
                                        <label htmlFor="Username" className='text-sm font-bold'>Username</label>
                                        <input type="text" name='Username' className="w-full rounded-xl border px-4 py-2 text-sm outline-none outline-4 focus:outline-blue-600" /><br />
                                        <label htmlFor="Password" className='text-sm font-bold'>Password</label>
                                        <input type="password" name='Password' className="w-full rounded-xl border px-4 py-2 text-sm outline-none outline-4 focus:outline-blue-600" /><br />
                                        <label htmlFor="email" className='text-sm font-bold'>Email</label>
                                        <input type="password" name='email' className="w-full rounded-xl border px-4 py-2 text-sm outline-none outline-4 focus:outline-blue-600" />
                                    </div>
                                    <div className="pt-6">
                                        <button type="button" className="w-full rounded-xl bg-blue-600 px-4 py-2 text-sm text-white active:bg-blue-800">Sign Up</button>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Auth