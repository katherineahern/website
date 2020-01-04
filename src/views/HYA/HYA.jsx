import React from "react";
import { Grid, InputLabel, Paper, TextField } from "material-ui";

import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
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
          {shortname: "N/A", amount: 0},
          {shortname: "id", amount: 8}, //– Legal ID for one participant
          {shortname: "socks", amount: 35}, // – 25 pairs of socks
          {shortname: "supplies", amount: 100}, // – One week of supplies for every group HYA offers
          {shortname: "underwear", amount: 250}, // – 60 pairs of clean underwear
          {shortname: "sleeping", amount: 500}, // – 33 sleeping bags
          {shortname: "medicine", amount: 500},// – One month of medical supplies
          {shortname: "food", amount: 5000}, // – Four months of healthy, nutritious food
          {shortname: "home", amount: 5000000}, //– A place for us to call HOME
        ];
  const nextLargestThatGoesIn = (amount) => {
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
    if(whatToBuyAmounts[nextToBuy.shortname]) {
      whatToBuyAmounts[nextToBuy.shortname] = whatToBuyAmounts[nextToBuy.shortname] + 1;
    } else {
      whatToBuyAmounts[nextToBuy.shortname] = 1;
    }
    whatYouCanBuy.push(nextLargestThatGoesIn(remaining));
  }

  return(
    <Grid container justify="center">
      { Object.keys(whatToBuyAmounts).map((shortname) => {
          return (<Item itemName={shortname} amount={whatToBuyAmounts[shortname]} />)
        })
      }
      
    </Grid>
  )
}

function Item(props) {
  return (
    <Grid item>
      <Paper>
        <b>{props.amount} X</b><br/>
        <img src={ require('../../assets/img/hya/' + props.itemName + '.svg') } /><br/>
        <b>{props.itemName}</b>
      </Paper>
    </Grid>
  )
}

export default HYA;