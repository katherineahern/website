import React from "react";
import { Grid, InputLabel } from "material-ui";

import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from "components";

import avatar from "assets/img/faces/tigers_nest.jpg";

function UserProfile({ ...props }) {
  const profileStyle = {
    width: '80%'
  }
  return (
    <div>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12} style={ profileStyle } >
          <ProfileCard 
            avatar={avatar}
            title="Katherine Ahern"
            description="Katherine Ahern is an Oakland-based software engineer, musician, and improvisational comedian. She has held positions in software development, data analysis, and management for technology companies and in academic research. Her specialties include implementing interfaces for interacting with data, and full stack web-based engineering."
            footer={
              <div>
                <a href='https://www.linkedin.com/in/katherine-ahern-8051835/'>
                  <Button color="primary" round>
                    LinkedIn
                  </Button>
                </a>
                <a href='https://github.com/katherineahern/'>
                  <Button color="primary" round>
                    GitHub
                  </Button>
                </a>
              </div>
            }
          />
        </ItemGrid>
      </Grid>
    </div>
  );
}

export default UserProfile;
