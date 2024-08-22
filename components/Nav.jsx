import Link  from 'next/link'
import Image from 'next/image'

const Nav = () => {
  const isUserLoggedIn = false ;
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
      <div className='sm:flex hidden'>
        {isUserLoggedIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt' className='black_btn'>
              Create Prompt
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
