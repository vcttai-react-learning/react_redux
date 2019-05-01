// Action creators
// Action creator return an action

export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',      // type is REQUIRED in all actions
        payload: song
    };
}