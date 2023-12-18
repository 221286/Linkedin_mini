import React from 'react'
import { LOGO_ } from '../utils/Constants'
import { HomeIcon,SearchIcon ,PersonIcon,MailIcon, NoteIcon,BellIcon, PersonAddIcon} from '@primer/octicons-react'
 

const Header = () => {
  return (<div className='h-20 bg-white shadow-lg'>
    <div className='h-20  bg-white   flex justify-between w-3/4 m-auto '>
      <img src={LOGO_} alt="logo" className='h-20 p-2 gap-y-1 ' />
      <div className='mt-2  w-2/3  flex '>
        
      <SearchIcon size={24} className='h-14 w-full  mt-1 text-slate-400 hover:text-slate-950 cursor-pointer' />
      <HomeIcon size={24} className='h-14 w-full p-1 mt-1 text-slate-400 hover:text-slate-950 cursor-pointer' />
      <PersonAddIcon size={24} className='h-14 w-full p-1 mt-1 text-slate-400 hover:text-slate-950 cursor-pointer'/>
      <MailIcon size={24} className='h-14 w-full p-1 mt-1 text-slate-400 hover:text-slate-950 cursor-pointer'/>
      <NoteIcon size={24} className='h-14 w-full p-1 mt-1 text-slate-400 hover:text-slate-950 cursor-pointer'/>
      <BellIcon size={24} className='h-14 w-full p-1 mt-1 text-slate-400 hover:text-slate-950 cursor-pointer' />
      </div>
      <PersonIcon size={24} className='h-14 w-96 p-1 mt-1 text-slate-400 hover:text-slate-950 cursor-pointer' />
      
      
    </div>

  </div>
    
  )
}

export default Header
