import _ from 'lodash';
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
    const posts = response.data.slice(0, 50);

    dispatch({
        type: 'FETCH_POSTS',
        payload: posts
    });
};


// Normal fetchUser
// export const fetchUser = (id) => async (dispatch) => {
//     const user = await JsonPlaceHolder.get(`/users/${id}`);

//     dispatch({
//         type: 'FETCH_USER',
//         payload: user.data
//     });
// } 
// End Normal fetchUser


// Memoize solution
export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
    const user = await JsonPlaceHolder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: user.data
    });
});
// End Memoize solution