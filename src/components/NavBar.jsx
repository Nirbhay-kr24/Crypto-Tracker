import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex flex-wrap md:flex-nowrap items-center justify-between gap-4 px-[5%] md:px-[8%] lg:px-[10%]
    py-5 bg-gray-900/80 backgrop-blur-b border-gray-700/30 sticky top-0 z-50'>
        <a href='/' className='order-1 flex-shrink-0 flex items-center gap-2 hover:scale-105 transition-transform'></a>

    </nav>
    )
}

export default NavBar