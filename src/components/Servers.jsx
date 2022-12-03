import React from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import  {MdOutlineClose} from 'react-icons/md'
import {AiOutlineNumber} from 'react-icons/ai'
import {HiOutlineSpeakerphone} from 'react-icons/hi'
import {FaUserAlt} from 'react-icons/fa'
import {RiHeadphoneFill} from 'react-icons/ri'
import {BiMicrophone} from 'react-icons/bi'
import {BsFillGearFill} from 'react-icons/bs'

import ludek from '../assets/ludek.png'

function Servers() {
    const [hide,setHide] = React.useState(false)
    const [add, setAdd] = React.useState(true)
    function handleAdd() {
        setAdd(!add)
    }
    function handleHide() {
        setHide(!hide)
    }
    

  return (
    <div className='fixed left-[75px] h-full w-[250px] bg-[#2F3136]'>
        <div className='flex justify-between p-4 font-semibold border-b border-[#202225] text-white hover:bg-[#3C3F45] cursor-pointer'>
            <p>STM MAFIJJA</p>
            <IoIosArrowDown />
        </div>
        <div className={ add ? 'border-b border-[#4F545C] pb-4' : "hidden"}>
            <div onClick={handleAdd} className='flex justify-end pt-2'>
                <MdOutlineClose  className='text-[#DCDDDE] w-6 h-6 mr-3 cursor-pointer'/>
            </div>
            <div className='p-8 pt-0'>
                <img src={ludek} />
            </div>
            <div className='px-[1.1rem] text-center'>
                <p className='text-[#DCDDDE] font-light pb-3'>Chcesz nadać serwerowi wyjątkowy charakter? Odblokuj niestandardowe banery serwera z <span className='font-medium'>7 dodatkowymi wzmocnieniami.</span></p>
                <button className='text-white bg-[#5865F2] hover:bg-[#4752C4] w-full h-9 rounded'>Ulepsz ten serwer</button>
            </div>
        </div>
        <div className='text-[#96989D] select-none'>
            <div className='pt-3'>
                <div onClick={handleHide} className='flex items-center cursor-pointer hover:text-[#DCDDDE]'>
                    <IoIosArrowDown />
                    <p>KANAŁY TEKSTOWE</p>
                </div>
                <div className={ hide ? 'hidden' : 'p-2'}>
                    <div className='flex items-center pb-1  hover:bg-[#3C3F45] hover:text-[#DCDDDE] rounded cursor-pointer'>
                        <AiOutlineNumber />
                        <p className='ml-1'>general</p>
                    </div>
                    <div className='flex items-center py-1 hover:bg-[#3C3F45] hover:text-[#DCDDDE] rounded cursor-pointer'>
                        <AiOutlineNumber />
                        <p className='ml-1'>bot</p>
                    </div>
                    <div className='flex items-center py-1 hover:bg-[#3C3F45] hover:text-[#DCDDDE] rounded cursor-pointer'>
                        <AiOutlineNumber />
                        <p className='ml-1'>biznes</p>
                    </div>
                    <div className='flex items-center py-1 hover:bg-[#3C3F45] hover:text-[#DCDDDE] rounded cursor-pointer'>
                        <AiOutlineNumber />
                        <p className='ml-1'>ruchy</p>
                    </div>
                </div>
            </div>
            <div className='pt-3'>
                <div className='flex items-center py-1 hover:bg-[#3C3F45] hover:text-[#DCDDDE] rounded cursor-pointer'>
                    <IoIosArrowDown />
                    <p>KANAŁY GŁOSOWE</p>
                </div>
                <div className='p-2'>
                    <div className='flex items-center pb-1 hover:bg-[#3C3F45] hover:text-[#DCDDDE] rounded cursor-pointer'>
                        <HiOutlineSpeakerphone />
                        <p className='ml-1'>Przystanek Pogodna</p>
                    </div>
                    <div className='flex items-center py-1 hover:bg-[#3C3F45] hover:text-[#DCDDDE] rounded cursor-pointer'>
                        <HiOutlineSpeakerphone />
                        <p className='ml-1'>obiady czwartkowe</p>
                    </div>
                    <div className='flex items-center py-1 hover:bg-[#3C3F45] hover:text-[#DCDDDE] rounded cursor-pointer'>
                        <HiOutlineSpeakerphone />
                        <p className='ml-1'>STM RETAIL BOYZZZ</p>
                    </div>
                    <div className='flex items-center py-1 hover:bg-[#3C3F45] hover:text-[#DCDDDE] rounded cursor-pointer'>
                        <HiOutlineSpeakerphone />
                        <p className='ml-1'>Glaspol - koncern farm...</p>
                    </div>
                    <div className='flex items-center py-1 hover:bg-[#3C3F45] hover:text-[#DCDDDE] rounded cursor-pointer'>
                        <HiOutlineSpeakerphone />
                        <p className='ml-1'>Gejowski pokoik</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='absolute bottom-0 w-[250px] flex justify-between items-center bg-[#292B2F] text-[#96989D] px-2 py-2'>
            <div className='flex items-center pr-5 pl-1 hover:bg-[#3C3F45] rounded cursor-pointer'>
                <div className='flex items-center justify-center bg-blue-400 text-white w-9 h-9 mr-3 rounded-[2rem]'>
                    <FaUserAlt />
                </div>
                <div className=''>
                    <p className='text-white text-[13px]'>azherid</p>
                    <p className='text-[13px]'>#8530</p>
                </div>
            </div>
            <div className='flex'>
                <div className='flex flex-wrap hover:bg-[#3C3F45] rounded mr-2'>
                    <BiMicrophone  className='w-5 h-5 cursor-pointer'/>
                </div>
                <div className='hover:bg-[#3C3F45] rounded mr-2'>
                    <RiHeadphoneFill className='w-5 h-5 cursor-pointer'/>
                </div>
                <div className='hover:bg-[#3C3F45] rounded mr-2'>
                    <BsFillGearFill  className='w-5 h-5 cursor-pointer'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Servers