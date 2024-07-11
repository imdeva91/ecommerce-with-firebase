import React from 'react'

const Navbar = () => {
  return (
    <>
    <div>
        <header className='border-b border-gray-200 bg-white'>
            <div className='container mx-auto flex items-center justify-between p-5'>
                <div>
                    <h3 className='font-bold text-2xl'>Apna <span className='text-orange-400'>shop</span></h3>
                </div>
                <ul className='flex items-center justify-center gap-7 text-lg font-semibold'>
                    <l1 className="hover:text-gray-900 cursor-pointer">Home</l1>
                    <l1 className="hover:text-gray-900 cursor-pointer">All Products</l1>
                    <l1 className="hover:text-gray-900 cursor-pointer">Men's</l1>
                    <l1 className="hover:text-gray-900 cursor-pointer">Kids</l1>
                </ul>
                <div className='flex items-center gap-3 justify-center'>
                    <button className='bg-gray-100 hover:bg-gray-200 border-0 py-1 px-3 focus:outline-none rounded-sm'>Login</button>
                    <p>cart</p>
                </div>
            </div>
        </header>
    </div>
    </>
  )
}

export default Navbar
