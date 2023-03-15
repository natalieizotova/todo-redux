const initialState = {
    todoList:[
        {
            id:1,
            title: "Learn JS",
            isDone: false
        },
        {
            id:2,
            title: "Learn React",
            isDone: false
        },
        {
            id:3,
            title: "Learn Typescript",
            isDone: false
        }
    ]
}
const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case"CREATE": return state;
        case"DELETE": return state;
        case"UPDATE": return state;
        default: return state
    }
}

export default reducer