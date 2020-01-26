import React from 'react';
import './Player.css';

function Player() {
  return (
    <div className="player">
        <div className="controls">
            <a href="javascript:void();"><i className="fas fa-chevron-left"></i></a>
            <a href="javascript:void();"><i className="fas fa-play"></i></a>
            <a href="javascript:void();"><i className="fas fa-chevron-right"></i></a>
        </div>
    </div>
  );
}

export default Player;
