import React, {Component} from "react";
import {
  withStyles,
  Card,
  CardContent,
  Typography,
  Button
} from "material-ui";
import adjectives from './Adjective.json';
import nouns from './Noun.json';
import prepositions from './Preposition.json';
import determiners from './Determiners.json';
import Song from '../../components/Song/Song';



class SongRoulette extends Component {
	constructor() {
		super();
		this.makeNewTitle = this.makeNewTitle.bind(this);
		const songName = this.makeNewTitle();
		this.state = {
			countdown: 5,
			songName: songName
		}
		console.log(this.state);
		this.countdown = this.countdown.bind(this);
		
		this.countdown();

		console.log('Nouns length: ' + nouns.nouns.noun.length);
		console.log('adjectives length: ' + adjectives.adjectives.adjective.length);
		
	}
	
	makeNewTitle() {
		
		switch (Math.floor(Math.random() * 4)) {
			case 0:
				return adjectives.adjectives.adjective[Math.floor(Math.random() * 50)] + ' ' + nouns.nouns.noun[Math.floor(Math.random() * 44)];
			case 1:
				return nouns.nouns.noun[Math.floor(Math.random() * 44)] + ' ' + nouns.nouns.noun[Math.floor(Math.random() * 44)];
			case 2:
				return adjectives.adjectives.adjective[Math.floor(Math.random() * 50)] + ' ' +
					nouns.nouns.noun[Math.floor(Math.random() * 44)] + ' of the ' +
					nouns.nouns.noun[Math.floor(Math.random() * 44)];
			case 3:
				return nouns.nouns.noun[Math.floor(Math.random() * 44)] + ' of the ' +
					nouns.nouns.noun[Math.floor(Math.random() * 44)];
			default:
				return "default";
		}
	}

	countdown() {
		let countdown = 6;
		let self = this;
		setInterval( function() {
		    countdown--;
		    if( countdown >= 0 ) {
		        self.setState({ countdown: countdown });
		    }
		}, 1000 );
	}

	render() {
		const emotions = ['happy', 'sad', 'angry', 'fearful'];
		const palettes = ['none', 'jazz', 'funk', 'latin'];

		let getNewSongTitle = () => {
			let newTitle = this.makeNewTitle();
			this.setState({ songName: newTitle });
			//add new random emotion and palette to state?
			this.countdown();
		}
		const countdownStyle = {
			textAlign: 'center',
			marginRight: 'auto',
			marginLeft: 'auto',
			marginTop: '10px'
		}

		return (
			<div>
				<Card style={countdownStyle} >
					<CardContent>
						<Typography variant="headline">{ this.state.songName }</Typography>
					</CardContent>
					
				</Card>
				<Card style={countdownStyle} >
					{ this.state.countdown > 0 ? 
						<CardContent>
							<Typography variant="headline">{this.state.countdown}</Typography>
						</CardContent>
					:
						<Emotion emotionName={ emotions[Math.floor(Math.random() * 4)] } palette={ palettes[Math.floor(Math.random() * 4)] } />
					}
				</Card>
				<Card style={countdownStyle}>
					<Button onClick={ getNewSongTitle } style={{ backgroundColor: '#b7c9d4' }}>Give Me a New Song</Button>
				</Card>
			</div>
		);
	}
}

class Emotion extends Component {
  
  	constructor(props) {
    	super(props);
  	}
  
  	componentDidMount() {
  		var audio = this.refs['audio'];
      	audio.load();
      	audio.currentTime = 0;
      	audio.play();
  	}
  	render() {
    	const faceStyle = {
      		width: '200px',
      		height: '200px'
    	};
    	let playSong = (feeling) => {
      		var audio = this.refs['audio'];
      		audio.load();
      		audio.currentTime = 0;
      		audio.play();
    	}

    	return (
      		<div>
          		<audio controls ref='audio' key={ this.props.emotionName + this.props.palette } > //key to rerender audio
            		<Song emotion={ this.props.emotionName } palette={ this.props.palette } />
          		</audio>
      		</div>
    	);
  }
  
}

export default SongRoulette;