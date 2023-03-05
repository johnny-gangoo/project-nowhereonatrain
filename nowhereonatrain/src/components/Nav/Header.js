import React, { useState } from "react";
import { AppBar, Toolbar } from "@mui/material";

import { IconButton } from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import Grid from "@mui/material/Grid";
import { createTheme } from "@mui/material/styles";
import Link from "@mui/material/Link";
import * as Colors from "@mui/material/colors";

import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";

const themes = createTheme({
  palette: {
    primary: {
      main: Colors.grey[900],
    },
  },
});

const Header = () => {
  const [openDrawer, setDrawerOpen] = useState(false);

  return (
    <React.Fragment>
      <AppBar style={{ background: "inherit" }} elevation={0} position="sticky">
        <Toolbar style={{ minHeight: 0, padding: 0 }}>
          <Grid container direction="row">
            <Grid
              item
              sm={10}
              md={2.5}
              style={{ border: "4px solid green" }}
              sx={{
                maxHeight: 0,
                display: { xs: "none", sm: "inherit" },
              }}
            >
              <IconButton
                disableFocusRipple
                disableRipple
                sx={{ ml: 1, mt: 4 }}
              >
                <Link
                  href="https://twitter.com/nowhereonatrain"
                  target="_blank"
                >
                  <TwitterIcon style={{ color: themes.palette.primary.main }} />
                </Link>
              </IconButton>
              <IconButton
                disableFocusRipple
                disableRipple
                sx={{ ml: 1, mt: 4 }}
              >
                <Link
                  href="https://twitter.com/nowhereonatrain"
                  target="_blank"
                >
                  <LinkedInIcon
                    style={{ color: themes.palette.primary.main }}
                  />
                </Link>
              </IconButton>

              <IconButton
                disableFocusRipple
                disableRipple
                sx={{ ml: 1, mt: 4 }}
              >
                <Link
                  href="https://www.facebook.com/profile.php$id=100085796314447"
                  target="_blank"
                >
                  <FacebookIcon
                    style={{ color: themes.palette.primary.main }}
                  />
                </Link>
              </IconButton>

              <IconButton
                disableFocusRipple
                disableRipple
                sx={{ ml: 1, mt: 4 }}
              >
                <Link
                  href="https://www.instagram.com/nowhereonatrain/"
                  target="_blank"
                >
                  <InstagramIcon
                    size="medium"
                    style={{ color: themes.palette.primary.main }}
                  />
                </Link>
              </IconButton>
            </Grid>
            <Grid
              item
              md={7}
              justifyContent="center"
              sx={{
                mt: 10,
                display: { xs: "none", sm: "none", md: "inherit" },
              }}
            >
              <img
                src="/nowhereonatrain-logo.png"
                alt="Restaurant Intro Food"
                style={{
                  maxWidth: "800px",
                  maxHeight: "230px",
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={2}
              md={2.5}
              style={{ border: "4px solid green" }}
              container
              justifyContent="flex-end"
              sx={{ maxHeight: 0 }}
            >
              <IconButton
                size="small"
                color="inherit"
                sx={{ margin: 0, mt: 2 }}
              >
                <MenuIcon
                  style={{ color: themes.palette.primary.main }}
                  fontSize="large"
                  onClick={() => setDrawerOpen(true)}
                />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
        <Drawer
          anchor="right"
          open={openDrawer}
          onClose={() => setDrawerOpen(false)}
        >
          <ChevronRightIcon
            style={{ color: themes.palette.primary.main }}
            onClick={() => setDrawerOpen(false)}
          />
          <Divider />
        </Drawer>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
