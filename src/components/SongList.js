import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions/AppSong13Actions';

class SongList extends React.Component
{
    renderList() {
        return this.props.songs.map( song => {
            return (
                <div key={song.title} className='item'>
                    <div className='right floated content'>
                        <button 
                            className='ui button primary'
                            onClick={() => {this.props.selectSong(song);}}
                        >
                            Select
                        </button>
                    </div>
                    <div className='content'>{song.title}</div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className='ui divided list'>{this.renderList()}</div>
        );
    }
}

// use "connect" of react-redux here
// This function's name follow convension (you can change it if you want)
const mapStateToProps = (state) => {
    // this return will be the props of SongList
    return { songs: state.songs };
}

export default connect(mapStateToProps, {
    selectSong: selectSong                  // khi gọi hàm action creator này ở SongList, "connect" sẽ thực hiện dispatch của Redux
})(SongList);