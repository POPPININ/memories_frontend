const reducer = (state = [], action) => 
{
    switch(action.type)
    {
        // fetch all posts
        case 'FETCH_ALL':
            return action.payload;

        // create a post under posts component
        case 'CREATE':
            return [...state, action.payload];

        default:
            return state;
    }
}

export default reducer;