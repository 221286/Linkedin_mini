import React, { useState } from 'react'
import Modal from './Modal'

const Startpost = () => {
    const [showmodal,setshowmodal] = useState(false);
  return (<>
  {showmodal &&  (<Modal hide={setshowmodal}  ></Modal>)  }
  <div className='h-28 w-full bg-white mt-8 flex'>
        <div className=' border border-black w-3/4 h-12 rounded-3xl mx-auto mt-2  ' onClick={()=>setshowmodal(true)}>
            <p className='p-3 text-slate-400'>Start a post</p>
        </div>
        
      
    </div>
  </>
    
  )
}

export default Startpost
