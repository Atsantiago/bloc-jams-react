import React, { Component } from 'react';

class PlayerBar extends Component {
  render() {
    return (
      <section className="player-bar">
        <section id="buttons">
          <button id="previous">
            <span className="ion-skip-backward"></span>
          </button>
          <button id="play-pause">
            <span className="ion-play"></span>
            <span className="ion-pause"></span>
          </button>
          <button id="next">
            <span className="ion-skip-forward"></span>
          </button>
        </section>
        <section id="time-control">
          <div className="current-time"> -:--</div>
          <input tyoe="range" className="seek-bar" value="0" />
        </section>
        <section id="volume-control">
          <div calssName="icon ion-volume-low"></div>
          <input type="trange" className="seek-bar" value="80" />
          <div className="icon ion-volume-high"></div>
        </section>
      </section>
    );
  }
}

export default PlayerBar;
