import React, { Component } from 'react';

import funk_happy from './songs/funk_happy.m4a';
import jazz_happy from './songs/jazz_happy.m4a';
import latin_happy from './songs/latin_happy.m4a';
import rock_happy from './songs/rock_happy.m4a';

import funk_sad from './songs/funk_sad.m4a';
import jazz_sad from './songs/jazz_sad.m4a';
import latin_sad from './songs/latin_sad.m4a';
import rock_sad from './songs/rock_sad.m4a';

import funk_fear from './songs/fear_funk.m4a';
import jazz_fear from './songs/fear_jazz.m4a';
import latin_fear from './songs/fear_latin.m4a';
import rock_fear from './songs/rock_fear.m4a';

import rock_angry from './songs/rock_angry.m4a';
import latin_angry from './songs/latin_angry.m4a';
import jazz_angry from './songs/jazz_angry.m4a';
import funk_angry from './songs/funk_angry.m4a';

class Song extends Component {
	//set initial state counter = 0, to interate through song array for each style
	constructor(props) {
		super(props);
		this.state = {palette: this.props.palette};
		this.getSongSrc = this.getSongSrc.bind(this);
	}
	getSongSrc() {
		console.log(this.props);
	 	var songSelection = {
			"happy": { "none": [rock_happy], "funk": [funk_happy], "jazz": [jazz_happy], "latin": [latin_happy] },
			"sad": {  "none": [rock_sad], "funk": [funk_sad], "jazz": [jazz_sad], "latin": [latin_sad] },
			"angry": { "none": [rock_angry], "funk": [funk_angry], "jazz": [jazz_angry], "latin": [latin_angry] },
			"fearful": {  "none": [rock_fear], "funk": [funk_fear], "jazz": [jazz_fear], "latin": [latin_fear] }
		};
	 	
	 	return songSelection[this.props.emotion][this.state.palette][0];
	 }

	render() {
	 	return (
	    	<source src={this.getSongSrc()} type="audio/mpeg" />
	    );

	}
}

export default Song;
