const reducer = (state = {people: []}, action) => {
    switch(action.type){
        case "add":
            return {people: [...state.people, action.payload]};
        case "remove":
            return {people: state.people.filter((person) => person !== action.payload)}
        default: 
            return state
    }
}

export default reducer