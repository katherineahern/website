import React from "react";
import { Grid, InputLabel, Paper, TextField, Typography, Card, CardContent, CardMedia } from "material-ui";

import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid,
} from "components";

class HYA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAmount: 0,
      display: 'inline'
    };
    this.handleChange = (event) => {
      this.setState({currentAmount: event.target.value});
    }
    this.handleFocus = () => {
      this.setState({display: 'none'});
    }
    
  }
  
  render() {
    
    return (
      <div>
        <Typography variant="h4" style={{ display: this.state.display }} >
          Entering an amount below will show you how far your dollars can go with HYA to support homeless youth. 
          When you are ready to make a donation, please visit the "Donate Now" button.
        </Typography>
        <Grid container justify="space-evenly">
          <Grid item xs="8">
            <TextField
              id="testId"
              label="Enter amount:"
              defaultValue="0"
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              helperText="" 
              variant="outlined"
            />
          </Grid>
          <Grid item xs="4">
            <Button href="https://www.networkforgood.org/donation/MakeDonation.aspx?ORGID2=813036333">Donate Now</Button>
          </Grid>
          <Grid item xs="12">
            <Typography variant="h6" style={{ display: this.state.display }}>
              Your donation could provide the following to homeless youth:
            </Typography>
          </Grid>
        </Grid>
        <Combination currentAmount={this.state.currentAmount} />        
      </div>
    );
  }
}

function Combination(props) {
  let value = "Original";
  let whatYouCanBuy = [];
  let whatToBuyAmounts = {};
  let currentAmount = parseInt(props.currentAmount) ? parseInt(props.currentAmount) : 0;
  let remaining = currentAmount;
  const amounts = [
          //{shortname: "na", amount: 0},
          {shortname: "id", amount: 8, description: "Legal ID for one participant"}, //– 
          {shortname: "socks", amount: 35, description: "25 pairs of clean, new socks "}, // – 
          {shortname: "supplies", amount: 100, description: "One week of supplies for every group HYA offers"}, // – 
          {shortname: "underwear", amount: 250, description: "60 pairs of clean underwear"}, // – 
          {shortname: "sleeping", amount: 350, description: "23 sleeping bags"}, // – 
          {shortname: "medicine", amount: 500, description: "One month of medical supplies"},// – 
          {shortname: "food", amount: 5000, description: "Four months of healthy, nutritious food"}, // – 
          {shortname: "home", amount: 5000000, description: "A place for us to call HOME"}, //– 
          {shortname: "home", amount: 5, description: "Other place"},
        ];
  const nextLargestThatGoesIn = (amount) => {
    if(amount > 5000001){
      whatYouCanBuy.push({shortname: "home", amount: 5000000, description: "A place for us to call HOME"});
      remaining = 0;
    }
    let i = 0;
    while(amounts[i+1] && (amount >= amounts[i+1].amount)) {
      i++;
    }
    return amounts[i];
  }
  
  while(remaining >= 8) {
    //use shortname as key
    let nextToBuy = nextLargestThatGoesIn(remaining);
    whatYouCanBuy.push(nextLargestThatGoesIn(remaining));
    remaining = remaining - nextToBuy.amount;
  }

  return(
    <Grid container alignContent="space-around" alignItems="center">
      { whatYouCanBuy.map((item) => {
          return (<Item itemName={item.shortname} description={item.description} />)
        })
      }
      
    </Grid>
  )
}

function Item(props) {
 
  return (
    <Grid item xs="3">
      <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <img src={ require('../../assets/img/hya/' + props.itemName + '.svg') } />
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              { props.description }
            </Typography>
          </CardContent>
      </Card>
    </Grid>
  )
}

export default HYA;