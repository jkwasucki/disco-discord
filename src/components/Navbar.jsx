import React from 'react'
import {IoMdCompass} from 'react-icons/io'
import {AiOutlinePlus, AiOutlineDownload} from 'react-icons/ai'
import {FaDiscord} from 'react-icons/fa'

function Navbar() {
  return (
    <div className='fixed h-full w-[75px] bg-[#202225]'>
        <div className='flex justify-center items-center'>
            <div className='pt-3 flex flex-col justify-center items-center'>
                <div className='flex flex-wrap justify-center py-2 cursor-pointer '>
                    <FaDiscord className='text-white w-[50px] h-[50px] p-3 bg-[#4F545C99] hover:bg-[#5865F2] rounded-[2rem] hover:rounded-[1rem] hover:ease duration-300'/>
                </div>
                <div className='flex justify-center py-1'>
                    <hr className='border-[#4F545C99] w-10'/>
                </div>
                <div className='flex flex-wrap justify-center py-2 cursor-pointer '>
                    <p className='text-white text-2xl w-[50px] h-[50px] flex justify-center items-center bg-[#4F545C99] rounded-[2rem] hover:rounded-[1rem] hover:ease duration-300 hover:bg-[#5865F2]'>A</p>
                </div>
                <div className='flex flex-wrap justify-center py-2 cursor-pointer '>
                    <p className='text-white text-2xl w-[50px] h-[50px] flex justify-center items-center bg-[#4F545C99] rounded-[2rem] hover:rounded-[1rem] hover:ease duration-300 hover:bg-[#5865F2]'>A</p>
                </div>
                <div className='flex flex-wrap justify-center py-2 cursor-pointer '>
                    <p className='text-white text-2xl w-[50px] h-[50px] flex justify-center items-center bg-[#4F545C99] rounded-[2rem] hover:rounded-[1rem] hover:ease duration-300 hover:bg-[#5865F2]'>A</p>
                </div>
                <div className='flex flex-wrap py-2 cursor-pointer '>
                    <IoMdCompass  className='w-[50px] h-[50px] p-3 text-[#3BA55D] bg-[#4F545C99] rounded-[3rem] hover:rounded-[1rem] hover:ease duration-300 hover:bg-[#3BA55D] hover:text-white'/>
                </div>
                <div className='flex flex-wrap py-2  cursor-pointer'>
                    <AiOutlinePlus  className='w-[50px] h-[50px] p-3 text-[#3BA55D] bg-[#4F545C99] rounded-[3rem] hover:rounded-[1rem] hover:ease duration-300 hover:bg-[#3BA55D] hover:text-white'/>
                </div>
                <div className='flex justify-center py-1'>
                    <hr className='border-[#4F545C99] w-10'/>
                </div>
                <div className='flex flex-wrap py-2  cursor-pointer'>
                    <AiOutlineDownload  className='w-[50px] h-[50px] p-3 text-[#3BA55D] bg-[#4F545C99] rounded-[2rem] hover:rounded-[1rem] hover:ease duration-300 hover:bg-[#3BA55D] hover:text-white'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar