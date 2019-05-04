import JsonPlaceHolder from '../apis/JsonPlaceHolder';


// Action creators
// Action creator return an action


// NEVER DO LIKE THIS WHEN USING REDUX
// export const fetchPosts = async () => {
//     const posts = await JsonPlaceHolder.get('/posts');

//     return {
//         type: 'FETCH_POST'
//     };
// };

// Because we used redux-thunk, we return a function inside of action-creator
export const fetchPosts = () => async (dispatch) => {
    const response = await JsonPlaceHolder.get('/posts');
    console.log(response);

    dispatch({
        type: 'FETCH_POST',
        payload: response
    });
};