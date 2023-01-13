import { } from '@reduxjs/toolkit'
import { useState } from 'react'
import List from './Components/List'
// import { addTodo } from '../Redux/todoSlicer'
import { addTodo } from '../Redux/ToDo/actions'
import { useDispatch } from 'react-redux'
import { useRef } from 'react'
import { useEffect } from 'react'


const Todo = () => {

    const [input,setInput] = useState('')
    const dispatch = useDispatch()
    const inputRef = useRef(null)


    const handleAdd = () => {
        if (input) {
            dispatch(addTodo({
                id : Math.random(),
                title : input
            }))
            setInput('')
            inputRef.current.focus()
        }
    }






    


    return(
        <div className='w-[500px] h-full bg-slate-400 shadow-md shadow-black mx-auto flex flex-col items-center rounded-md p-3 overflow-auto'>
            <div className='flex w-full'>
                <input onKeyUp={({keyCode}) => {
                    if (keyCode === 13) handleAdd()
                }} placeholder='Enter your todo' name='input' ref={inputRef} className='grow rounded-md px-3 shadow-md shadow-black h-9' onChange={({target}) => setInput(target.value) } value={input} type="text" />
                <button onClick={handleAdd} className='mx-2 h-9 rounded-md shadow-md shadow-black bg-white px-3'>Add</button>
            </div>
            <List/>
        </div>
    )
}

export default Todo