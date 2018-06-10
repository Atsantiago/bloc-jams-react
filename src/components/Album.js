import React, { Component } from 'react';
import albumData from './../data/albums';
import './album.css';
import PlayerBar from './PlayerBar';

class Album extends Component {
  constructor(props) {
    super(props);

  const album = albumData.find( album => {
    return album.slug === this.props.match.params.slug
  });

  this.state = {
    album: album,
    currentSong: undefined,
    isPlaying: false,
    hoveredSongs: [],
  };

this.audioElement = document.createElement('audio');
this.audioElement.src = album.songs[0].audioSrc;

}

play() {
  this.audioElement.play();
  this.setState({ isPlaying: true});
}

pause() {
  this.audioElement.pause();
  this.setState({isPlaying: false});
}

setSong(song) {
  this.audioElement.src = song.audioSrc;
  this.setState({ currentSong: song});

}

handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && isSameSong) {
      this.pause();
    } else {
      if (!isSameSong) { this.setSong(song); }
      this.play();
    }
}

handleMouseEnter(index) {
  let hoverSongs = this.state.hoveredSongs.slice();
  hoverSongs.pop();
  hoverSongs.push(index);
  this.setState({ hoveredSongs: hoverSongs });
}

handleMouseLeave(index){
  let hoverSongs = this.state.hoveredSongs.slice();
  hoverSongs.splice(index);
  this.setState({ hoveredSongs: hoverSongs });
}

iconButtonLogic(song, index){
  const isSameSong = this.state.currentSong === song;
  const currentSongIsPlaying = isSameSong && this.state.isPlaying;

  if (currentSongIsPlaying) {
    if (this.state.hoveredSongs.includes(index)) {
      return <span className="ion-pause"></span>
    }
        return <span className="ion-pause"></span>
    }
    if (isSameSong && !this.state.isPlaying) {
      return <span className="ion-play"></span>
    }
    if (this.state.hoveredSongs.includes(index)) {
        return <span className="ion-play"></span>
    }
      return `${index + 1}.`
}

  render() {

    return (
      <section className="album">
        <section id="album-info">
          <img id="album-cover-art" src={this.state.album.albumCover} alt="cover-art"/>
          <div className="album-details">
            <h1 id="album-title">{this.state.album.title}</h1>
            <h2 className="artist">{this.state.album.artist}</h2>
            <div id="release-info">{this.state.album.releaseInfo}</div>
          </div>
        </section>
        <table id="song-list">
          <colgroup>
            <col id="song-number-column" />
            <col id="song-title-column" />
            <col id="song-duration-column" />
          </colgroup>
          <tbody>
            <section className="songs">
              {this.state.album.songs.map((song, index) =>
                  <tr className="song" key={index} onClick={() => this.handleSongClick(song)}
                  onMouseEnter={() => this.handleMouseEnter(index)}
                  onMouseLeave={() => this.handleMouseLeave(index)}
                  >
                    <td>{this.iconButtonLogic(song, index)}</td>
                    <td>{song.title}</td>
                    <td>{song.duration}</td>
                  </tr>
                )
            }
            </section>
          </tbody>
        </table>
        <PlayerBar />
      </section>
    );
  }
}
export default Album;
