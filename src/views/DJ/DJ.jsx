import React, { Component } from 'react';
import Song from '../../components/Song/Song';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Radio from 'material-ui/Radio';

class DJ extends Component {
  constructor(props) {

    super(props);
    this.state = { palette: 'none' };
    // TODO: refactor so this isn't necessary
    this.handlePaletteChange = this.handlePaletteChange.bind(this);

  }

  handlePaletteChange(changeEvent) {
    this.setState({
      palette: changeEvent.target.value
    });
  }

  render() {
    const backgrounds = {
      none: '#efeff4',
      jazz: '#24956D',
      funk: '#DEAF35',
      latin: '#DE6C35'
    }
    let gridStyle = {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '100%',
      backgroundColor: backgrounds[this.state.palette]
    }
    const emotionStyle = {
      float: 'left',
      width: '20%'
    }

    
    return (
      <div >
        <Grid style={ gridStyle }>
          <Grid> 
            Pick a musical genre and emotion, and sing your song!
          </Grid>
          <Grid> 
              <Radio value='none' checked={ this.state.palette === 'none' } onChange={this.handlePaletteChange}/> Rock
              <Radio value='jazz' checked={ this.state.palette === 'jazz' } onChange={this.handlePaletteChange}/> Lounge
              <Radio value='funk' checked={ this.state.palette === 'funk' } onChange={this.handlePaletteChange}/> Funk
              <Radio value='latin' checked={ this.state.palette === 'latin' } onChange={this.handlePaletteChange}/> Latin  
          </Grid>
          <Grid>
             <Button>
                  <Emotion emotionName="Happy" palette={ this.state.palette } />
             </Button>
             <Button>
                  <Emotion emotionName="Sad" palette={ this.state.palette } />
             </Button>
          </Grid>
          <Grid>
            <Button>
              <Emotion emotionName="Angry" palette={ this.state.palette } />
            </Button>
            <Button>
              <Emotion emotionName="Fearful" palette={ this.state.palette } />
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

class Emotion extends Component {
  
  constructor(props) {
    super(props);
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
          <img style={faceStyle} src={ require('../../assets/img/' + this.props.emotionName.toLowerCase() + '.svg') } onClick={playSong}/><br/>
          <audio controls ref='audio' key={ this.props.emotionName + this.props.palette } > //key to rerender audio
            <Song emotion={ this.props.emotionName.toLowerCase() } palette={ this.props.palette } />
          </audio>
      </div>
    );
  }
  
}

export default DJ;
