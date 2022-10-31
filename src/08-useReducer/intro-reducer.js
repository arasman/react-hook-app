const initialState = [
    {
        id: 1,
        todo: 'Collect the soul stone',
        done: false
    }
];

const todoReduce = (state = initialState, action = {}) => {
    if (action.type == 'add') {
        return [...state, action.payload]
    }
    return state;

}

let todos = todoReduce();
const newTodo = {
    id: 2,
    todo: 'Collect the power stone',
    done: false,
};
const addTodoAction = {
    type: 'add',
    payload: newTodo
}
todos = todoReduce(todos, addTodoAction);

// console.log({state: todos});