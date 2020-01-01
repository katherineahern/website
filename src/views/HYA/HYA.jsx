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
      amounts: [
          {shortname: "id", amount: 8}, //– Legal ID for one participant
          {shortname: "socks", amount: 35}, // – 25 pairs of socks
          {shortname: "supplies", amount: 100}, // – One week of supplies for every group HYA offers
          {shortname: "underwear", amount: 250}, // – 60 pairs of clean underwear
          {shortname: "sleeping", amount: 500}, // – 33 sleeping bags
          {shortname: "medicine", amount: 500},// – One month of medical supplies
          {shortname: "food", amount: 5000}, // – Four months of healthy, nutritious food
          {shortname: "home", amount: 5000000}, //– A place for us to call HOME
        ]
    };
    this.handleChange = (event) => {
      this.setState({currentAmount: event.target.value});
    }
    
  }
  
  render() {
    console.log(this.state.currentAmount);
    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={12}  >
            <Grid container>
              <TextField
                id="testId"
                label="How much do you want to donate?"
                defaultValue={this.state.currentAmount}
                onChange={this.handleChange}
                helperText="Some important text"
              />
            </Grid>
            <Grid container spacing={3}>
              
               {this.state.amounts.map((value, index) => {
                  return (
                    <Grid item id={value.shortname} xs>
                      <Combination shortname={value.shortname} currentAmount={this.state.currentAmount} />
                        
                    </Grid>
                  );
                })}
          
            </Grid>
          </ItemGrid>
        </Grid>
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
  console.log(whatYouCanBuy);
  console.log(whatToBuyAmounts);
  value = "temp"; //amounts[i] ? amounts[i].shortname : "Original II";

  return(
    <Paper>
      { Object.keys(whatToBuyAmounts).map((shortname) => {
          return (<Item itemName={shortname} amount={whatToBuyAmounts[shortname]} />)
        })
      }
      
    </Paper>
  )
}

function Item(props) {
  return (
    <div>{props.itemName} {props.amount}</div>
  )
}

export default HYA;
