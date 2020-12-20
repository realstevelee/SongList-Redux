import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        { title: 'All I want for Chrsitmas is you', duration: '3:58' },
        { title: 'Dynamite', duration: '3:30' },
        { title: 'Position', duration: '2:52' },
        { title: 'Blinding Lights', duration: '3:20' }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})