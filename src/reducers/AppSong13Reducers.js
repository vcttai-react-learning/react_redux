import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'No scubs', duration: '3:04' },
        { title: 'Some body like you', duration: '4:04' },
        { title: 'This moment', duration: '2:35' },
        { title: 'How happy it is', duration: '1:09' },
    ];
}

const selectedSongReducer = (selectedSong = null, action) => {
    if( action.type === 'SONG_SELECTED' ){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});