import React from "react";
import { Grid, InputLabel, Paper, TextField, Typography } from "material-ui";

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
    };
    this.handleChange = (event) => {
      this.setState({currentAmount: event.target.value});
    }
    
  }
  
  render() {
    console.log(this.state.currentAmount);
    return (
      <div>
        <Grid container justify="space-evenly">

          <Grid item xs="8">
            <TextField
              id="testId"
              label="How much do you want to donate?"
              defaultValue={this.state.currentAmount}
              onChange={this.handleChange}
              helperText="Some important text"
            />
          </Grid>

          <Grid item >
            <Button href="https://www.networkforgood.org/donation/MakeDonation.aspx?ORGID2=813036333">Donate Now</Button>
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
          {shortname: "socks", amount: 35, description: "25 pairs of socks"}, // – 
          {shortname: "supplies", amount: 100, description: "One week of supplies for every group HYA offers"}, // – 
          {shortname: "underwear", amount: 250, description: "60 pairs of clean underwear"}, // – 
          {shortname: "sleeping", amount: 500, description: "33 sleeping bags"}, // – 
          {shortname: "medicine", amount: 500, description: "One month of medical supplies"},// – 
          {shortname: "food", amount: 5000, description: "Four months of healthy, nutritious food"}, // – 
          {shortname: "home", amount: 5000000, description: "A place for us to call HOME"}, //– 
        ];
  const nextLargestThatGoesIn = (amount) => {
    if(amount > 5000001){
      whatYouCanBuy.push({shortname: "home", amount: 5000000, description: "A place for us to call HOME"});
      remaining = 0;
    }
    let i = 0;
    while(amounts[i+1] && (amount > amounts[i+1].amount)) {
      i++;
    }
    remaining = remaining - amounts[i].amount;
    return amounts[i];
  }
  
  while(remaining >= 8) {
    //use shortname as key
    let nextToBuy = nextLargestThatGoesIn(remaining);
    whatYouCanBuy.push(nextLargestThatGoesIn(remaining));
  }

  return(
    <Grid container justify="center">
      { whatYouCanBuy.map((item) => {
          return (<Item itemName={item.shortname} description={item.description} />)
        })
      }
      
    </Grid>
  )
}

function Item(props) {
  return (
    <Grid item>
      <Paper>
        <Typography>{props.description}</Typography>
        <img src={ require('../../assets/img/hya/' + props.itemName + '.svg') } /><br/>
      </Paper>
    </Grid>
  )
}

export default HYA;