const TodoReducer = (state = { todos: [] }, action) => {
    switch (action.type) {
        case "add_todo":
            return { todos: action.payload };
        case "remove_todo":
            return { todos: action.payload };
        case "edit_todo":
            return {
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id ? { ...todo, todo: action.payload.newTodo } : todo
                ),
            };
        default:
            return state;
    }
};
export default TodoReducer;
