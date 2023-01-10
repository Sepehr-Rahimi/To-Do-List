import { } from '@reduxjs/toolkit'
import { useState } from 'react'
import List from './Components/List'
import { addTodo } from '../Redux/todoSlicer'
import { useDispatch } from 'react-redux'


const Todo = () => {

    const [input,setInput] = useState('')
    const dispatch = useDispatch()


    const handleAdd = () => {
        if (input) {
            dispatch(addTodo({
                id : Math.random(),
                title : input
            }))
            setInput('')
        }
    }



    


    return(
        <div>
            <div>
                <button onClick={handleAdd} className='border border-black'>Add</button>
                <input className='border border-black ml-3' onChange={({target}) => setInput(target.value) } value={input} type="text" />
            </div>
            <div>
                <List/>
            </div>
        </div>
    )
}

export default Todo