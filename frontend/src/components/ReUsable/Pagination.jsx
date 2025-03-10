import React from 'react'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'

const Pagination = () => {
    return (
        <div>
            <div className='flex justify-center items-center gap-2 pt-16'>
                <button className='border border-gray-300 rounded-lg p-4 text-[#e75e5e] text-lg font-medium bg-gray-200'><FaAngleDoubleLeft /></button>
                <button className='border border-gray-300 rounded-lg px-5 py-3 text-[#fd1616] text-lg font-medium bg-white hover:bg-[#fd1616] hover:text-white'>1</button>
                <button className='border border-gray-300 rounded-lg px-5 py-3 bg-[#fd1616] text-lg font-medium text-white'>2</button>
                <button className='border border-gray-300 rounded-lg px-5 py-3 text-[#fd1616] text-lg font-medium bg-white hover:bg-[#fd1616] hover:text-white'>3</button>
                <button className='border border-gray-300 rounded-lg px-5 py-3 text-[#fd1616] text-lg font-medium bg-white hover:bg-[#fd1616] hover:text-white'>4</button>
                <button className='border border-gray-300 rounded-lg p-4 text-[#fd1616] text-lg font-medium bg-white hover:bg-[#fd1616] hover:text-white'><FaAngleDoubleRight /></button>
            </div>
        </div>
    )
}

export default Pagination