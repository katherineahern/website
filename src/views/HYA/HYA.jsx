import React from "react";
import { Grid, InputLabel, Paper, TextField } from "material-ui";

import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from "components";

import avatar from "assets/img/faces/tigers_nest.jpg";



function HYA({ ...props }) {
  function handleChange(value) {
    console.log("testId": value)
  }
  const profileStyle = {
    width: '80%'
  }
  const amounts = [
    {shortname: "id", amount: 8}, //– Legal ID for one participant
    {shortname: "socks", amount: 35}, // – 25 pairs of socks
    {shortname: "supplies", amount: 100}, // – One week of supplies for every group HYA offers
    {shortname: "underwear", amount: 250}, // – 60 pairs of clean underwear
    {shortname: "sleeping", amount: 500}, // – 33 sleeping bags
    {shortname: "medicine", amount: 500},// – One month of medical supplies
    {shortname: "food", amount: 5000}, // – Four months of healthy, nutritious food
    {shortname: "home", amount: 5000000}, //– A place for us to call HOME

  ]
  return (
    <div>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12} style={ profileStyle } >
          <Grid container spacing={12}>
            <TextField
              id="testId"
              label="How much do you want to donate?"
              defaultValue="Default Value"
              onChange={() => handleChange()}
              helperText="Some important text"
            />
          </Grid>
          <Grid container spacing={3}>
            
             {amounts.map((value, index) => {
                return (
                  <Grid item id={value.shortname} xs>
                    <Paper>
                      {value.shortname}
                    </Paper>
                  </Grid>
                );
              })}
              <Grid item xs>testId</Grid>
          </Grid>
        </ItemGrid>
      </Grid>
    </div>
  );
}

export default HYA;