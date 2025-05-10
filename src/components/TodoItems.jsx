import React from 'react'
import empty_check from '../assets/empty_check.png'
import checkIcon from '../assets/checkIcon.png'
import delete_icon2 from '../assets/delete_icon2.png'


const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='font-serif font-medium subpixel-antialiased flex items-center my-3 gap-2 shadow-xl p-4 rounded-lg bg-white ring-2 ring-blue-500 '>
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img src={isComplete ? checkIcon : empty_check} alt="" className='w-7' />
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 break-words w-full ${isComplete ? "line-through" : ""}`}>
                {text}
            </p>
        </div>

        <img onClick={()=>{deleteTodo(id)}} src={delete_icon2} alt="" className='w-4.5 cursor-pointer' />


    </div>
  )
}

export default TodoItems