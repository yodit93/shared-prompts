import Link  from 'next/link'
import Image from 'next/image'
import { signout } from 'next-auth/react'

const Nav = () => {
  const isUserLoggedIn = true;
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

            <button type='button' onClick={signout} className='outline_btn'>Sign Out</button>
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
            
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav
