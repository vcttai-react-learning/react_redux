import React from 'react';
import { connect } from 'react-redux';

class SongDetail extends React.Component
{
    renderSongDetail() {
        if(this.props.song != null){
            const song = this.props.song;

            return (
                <div>
                    <h3>Details:</h3>
                    <div>Title: <b>{song.title}</b></div>
                    <div>Duration: <b>{song.duration}</b></div>
                </div>
            );
        }
        
        return <div>Select a Song!</div>
    }

    render() {
        return this.renderSongDetail();
    }
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetail);