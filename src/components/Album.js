import React, { Component } from 'react';
import albumData from './../data/albums';
import './album.css';

class Album extends Component {
  constructor(props) {
    super(props);

  const album = albumData.find( album => {
    return album.slug === this.props.match.params.slug
  });

  this.state = {
    album: album,
    currentSong: album.songs[0],
    isPlaying: false,
    hoveredSongs: []
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
  console.log("Before Enter");
  console.log(this.state.hoveredSongs);
  let hoveredSongs = this.state.hoveredSongs.slice();
  hoveredSongs.push(index);
  this.setState({ hoveredSongs: hoveredSongs });

  console.log("After Enter");
  console.log(this.state.hoveredSongs);
  //if (this.state.isPlaying) {
  //  <span className={this.state.album.songs.index ? 'ion-pause' : 'ion-play'}></span>;
  //}
}

handleMouseLeave(index){
  console.log("Before Leave");
  console.log(this.state.hoveredSongs);
  let hoveredSongs = this.state.hoveredSongs.slice();
  let i = hoveredSongs.indexOf(index);
  hoveredSongs.splice(i);
  this.setState({ hoveredSongs: hoveredSongs });

  console.log("After Leave");
  console.log(this.state.hoveredSongs);
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
                  onMouseEnter={(e) => this.handleMouseEnter(index)}
                  onMouseLeave={() => this.handleMouseLeave(index)}
                  >
                    <td className={ this.state.hoveredSongs.includes(index) ? (this.state.currentSong ? (this.state.isPlaying ? "ion-pause" : "ion-play" ): "ion-play") : null }>
                        <td className={this.state.hoveredSongs.includes(index) ? "hidden" : null}>{index+1}.</td>
                    </td>
                    <td>{song.title}</td>
                    <td>{song.duration}</td>
                  </tr>
                )
            }
            </section>
          </tbody>
        </table>
      </section>
    );
  }
}
export default Album;
