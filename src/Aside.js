import React from 'react'
import {BsFillCalendarFill} from "react-icons/bs";
import {BsFillTrashFill} from 'react-icons/bs'
import Comments from './Comment';
//import Commentdup from './Commentdup'
const Aside=()=> {
    return (
    <> 
    <div className='inner-section'>
         <aside> <div className='notes'> 
         <BsFillCalendarFill className='icons'size="25px"/> 
         <h3 class="side-headings">Notes</h3>
         </div> 
         <div className='notes'>
             <BsFillTrashFill className='icons'size="25px"/>
              <h3 className='side-headings'>Trash</h3>
         </div> 
         </aside>
          <Comments/> 
          </div> 
          </>
)
}

export default Aside