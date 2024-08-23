'use client'

import Link  from 'next/link'
import Image from 'next/image'
import { signOut, signIn, getProviders } from 'next-auth/react'
import { useState, useEffect } from 'react'

const Nav = () => {
  const isUserLoggedIn = false;
  const [providers, setProviders] = useState(null)

  useEffect(() => {
    const fetchProviders= async () => {
      const providers = await getProviders()
      setProviders(providers)
    }
    fetchProviders()
  }, [])
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.svg'
          alt='Promptopia Logo'
          width={30}
          height={30}
        />
        <p className='logo_text'>Promptopia</p>
      </Link>
      {/* disktop navigation */}
      <div className='sm:flex hidden'>
        {isUserLoggedIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt' className='black_btn'>
              Create Prompt
            </Link>

            <button type='button' onClick={signOut} className='outline_btn'>Sign Out</button>
            <Link href='/profile'>
              <Image
                src='/assets/images/logo.svg'
                width={37}
                height={37}
                className='rounded-full'
                alt='Profile Image'
              />
            </Link>
          </div>
        ) : (
          <>
            {/* <button type='button' onClick={signIn}>Sign In</button> */}
            {providers && Object.values(providers).map((provider) => (
              <button 
                type='button' 
                key={provider.name} 
                onClick={() => signIn(provider.id)}
              >
                
                Sign in with {provider.name}
              </button>
            ))}
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav
