
import { useDispatch , useSelector } from "react-redux";
// import { removeTodo } from "../../Redux/todoSlicer";
import { removeTodo } from "../../Redux/ToDo/actions";



const List =() => {
    console.log(useSelector((s) => s));
    const todos = useSelector((state) => state.todos.list )

    const dispatch = useDispatch()

    return(
        
        <div className="my-4 p-4 bg-white w-full grow rounded-md shadow-md shadow-black flex flex-col ove ">
            
            {
                !todos[0]
                ? <div className="flex items-center bg-slate-400 h-9 rounded-md px-4 shadow-md shadow-black my-2">
                <span className="grow mx-4" >
                    * No todo
                </span>
            </div>
            : null
            }
            {todos.map((todo) => {
                return(
                    <div key={todo.id}  className="flex items-center bg-slate-400 h-9 rounded-md px-4 shadow-md shadow-black my-2">
                        <input type="radio" name="selectedToDo" id="selectedToDo" />
                        <span className="grow mx-4" >
                            {todo.title}
                        </span>
                        <button className="ml-3 hover:underline" onClick={() => dispatch(removeTodo(todo.id))} >Delete</button>
                    </div>
                )
            })}
        </div>

    )
}


export default List