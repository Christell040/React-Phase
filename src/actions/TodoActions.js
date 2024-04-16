export const AddTodoAction = (todo) =>(dispatch, getState)=> {
    const {
        Todo:{ todos },
    } = getState();

    const hasTodo = todos.find((i)=> i.todo === todo );

    if ( !hasTodo && todo !== "" ){
        dispatch(
            {
                type:"add_todo",
                payload:[{id:todo,todo}, ...todos],
            })
        }

    };

 
export const RemoveTodoAction = (todo) =>(dispatch, getState)=> {
    const {
        Todo:{ todos },
    } = getState();


    
    dispatch(
        {
            type:"remove_todo",
            payload: todos.filter( (i)=>( i.id !== todo.id  ))
        })
    

    };

export const EditTodoAction = (id, newTodo) => (dispatch, getState) => {
        dispatch({
            type: "edit_todo",
            payload: { id, newTodo },
        });
    };
    
 