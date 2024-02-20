'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';

const Auth = () => {
    const router = useRouter();
    useEffect(() => {
        document.body.style.backgroundColor = 'white';
        return () => {
        }
    }, [])

    return (
        <>
            <div className="flex justify-center p-1">
                <div className="overflow-none flex w-[max-content] rounded-xl border">
                    <button className="border-0 px-4 py-2 text-sm active:opacity-70">Sign Up</button>
                    <button className="border-0 px-4 py-2 text-sm active:opacity-70">Sign In</button>
                </div>
            </div>
            <div className="flex justify-center p-1">
                <div className="w-[90vw] min-w-[max-content] max-w-[300px] rounded-xl border text-center">
                    <div className="space-y-1 px-4 py-2">
                        {/* For Login */}
                        <input type="text" placeholder="Username" className="w-full rounded-xl border px-4 py-2 text-sm outline-none outline-4 focus:outline-blue-600" /><br />
                        <input type="password" placeholder="Password" className="w-full rounded-xl border px-4 py-2 text-sm outline-none outline-4 focus:outline-blue-600" />
                        <div className="pt-6">
                            <button type="button" className="w-full rounded-xl bg-blue-600 px-4 py-2 text-sm text-white active:bg-blue-800">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Auth