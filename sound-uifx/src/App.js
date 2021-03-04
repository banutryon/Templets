import React, { Component } from "react";
import "./App.css";
import ReactAudioPlayer from "react-audio-player";
import mp3 from "./audio/sound.mp3";
import health from "./audio/health.m4r";
import $ from "jquery";
export default class InputRange extends Component {
	playHealth() {
		const playAudio1 = $(".health")[0];
		playAudio1.play();
	}
	playActive() {
		const playAudio2 = $(".active")[0];
		playAudio2.play();
	}
	render() {
		return (
			<div>
				<button onClick={this.playHealth}>Play Health</button>
				<ReactAudioPlayer className="health" src={health} />
				<button onClick={this.playActive}>Play Active</button>
				<ReactAudioPlayer className="active" src={mp3} />
			</div>
		);
	}
}
