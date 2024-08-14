'use client'
import React from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { User } from 'next-auth'
import { Button } from './ui/button'

const Navbar = () => {

    const {data: session} = useSession()

    const user: User = session?.user as User

  return (
    <nav className="p-1 md:p-4  shadow-md bg-black text-white">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-4 md:mb-0">
                    <a href="#" className="text-2xl font-bold"> Mystery Mail </a>
                </div>
                <div className="flex items-center gap-4 ">
                    {
                        session ? (
                            <>
                                <span className='mr-4'>Welcome {user?.username || user?.email}</span>
                                <Button className='w-full md:w-auto' onClick={() => signOut()}>Logout</Button>
                            </>
                        ) : (
                            <>
                                <Link href='/sign-in'>
                                    <Button className='w-full  bg-gray-900 hover:bg-gray-700 rounded-2xl md:w-auto'>Sign In</Button>
                                </Link>
                                <Link href='/sign-up'>
                                    <Button className='w-full bg-gray-900 hover:bg-gray-700 rounded-2xl md:w-auto'>Sign up</Button>
                                </Link>
                            </>
                        )
                    }
                </div>
            </div>
        </nav>
  )
}

export default Navbar
