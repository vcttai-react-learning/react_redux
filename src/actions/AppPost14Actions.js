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
    const posts = response.data.slice(0, 30);

    dispatch({
        type: 'FETCH_POSTS',
        payload: posts
    });
};


// Normal fetchUser
export const fetchUser = (id) => async (dispatch) => {
    const user = await JsonPlaceHolder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: user.data
    });
} 
// End Normal fetchUser


// Memoize solution
// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const user = await JsonPlaceHolder.get(`/users/${id}`);

//     dispatch({
//         type: 'FETCH_USER',
//         payload: user.data
//     });
// });
// End Memoize solution


// Better solution for fetching posts and users
// dispatch() and getState() is redux's functions
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // To call action creator inside action creators, dispatch the result of child-action-creator
    // this is how redux-thunk works
    await dispatch(fetchPosts());

    const uniqueUserIds = _.uniq( _.map( getState().posts, 'userId' ) );
    // uniqueUserIds.forEach( userId => dispatch( fetchUser( userId ) ) );
    // or we can get Users like this
    Promise.all( uniqueUserIds.map( userId => dispatch( fetchUser( userId ) ) ) );
}