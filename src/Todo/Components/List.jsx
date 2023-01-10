
import { useDispatch , useSelector } from "react-redux";
import { removeTodo } from "../../Redux/todoSlicer";



const List =() => {
    const todos = useSelector((state) => state.todos.list )

    const dispatch = useDispatch()

    return(
        <div>
            {todos.map((todo) => {
                return(
                    <div>
                        <input type="radio" name="selectedToDo" id="selectedToDo" />
                        <span key={todo.id} >
                            {todo.title}
                        </span>
                        <button className="ml-3" onClick={() => dispatch(removeTodo(todo.id))} >Delete</button>
                    </div>
                )
            })}
        </div>

    )
}


export default List