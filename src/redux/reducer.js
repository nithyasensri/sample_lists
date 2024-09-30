import { ADD_TODO, DELETE_ALL, UPDATE_CHECKBOX, REMOVE_TODO,UPDATE_TODO } from './action'

const initialState = [
    { id: 1, todo: 'Buy Laptop', completed: false },
    { id: 2, todo: 'Master Redux', completed: false },
    { id: 3, todo: 'Watering Plants', completed: true },
];

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TODO:
            console.log('a', action.payload)
            return [...state, action.payload]

        case DELETE_ALL:
            return [];

        case UPDATE_CHECKBOX:
            let todoArray = [];
            state.map((item) => {
                if (item.id === action.payload) {
                    item.completed = !item.completed;
                }
                todoArray.push(item);
            })
            return todoArray;

        case REMOVE_TODO:
            const filterData = state.filter((item) => item.id !== action.payload)
            return filterData

        case UPDATE_TODO:
            let data = action.payload;
            const updatedArray = [];
            state.map((item) => {
                if (item.id === data.id) {
                    item.id = data.id;
                    item.todo = data.todo;
                    item.completed = data.completed;
                }
                updatedArray.push(item);
            })
            return updatedArray;


        default:
            // console.log(state);
            return state;
    }
}