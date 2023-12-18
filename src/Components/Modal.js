import React from 'react'
import ReactDOM from 'react-dom';
import createPortal  from 'react-dom';

const Modal = ({hide}) => {
  return ReactDOM.createPortal(<div className='' onFocus={()=>hide(true) } onBlur={()=>hide(false)}>
          <div className='bg-white mt-20 pb-28 w-2/5 shadow-2xl my-auto opacity-80 fixed'>
        <p className='text-slate-600 mb-2 pl-2 text-xl'>Create a post</p>
        <textarea type="text" className='w-11/12 h-48 outline-none pt-2 block mx-auto pl-4 text-lg' 
        placeholder='What do to want to talk about?' ></textarea>
     <button onClick={()=>hide(false)}>Modal</button> 
    </div>
  </div>
   
  ,document.querySelector(".newPortal"))
}

export default Modal
