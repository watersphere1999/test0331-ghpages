import React, { Fragment } from "react";
import heart from "../../asset/img/icon-heart-broken@3x.png";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { Grid, Box, createMuiTheme } from "@material-ui/core";
import TitleBar from "../../components/TopBar/TitleBar";
import Navigation from "../../components/Bottom/Navigation";
const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "NotoSansCJKtc",
    flexGrow: 1,
    width: "100%",
  },
  text: {
    fontFamily: "NotoSansCJKtc",
    color: "#232323",
    height: "48px",
    lineheight: "1.5",
    fontSize: "16px",

    textAlign: "center",
  },
  button: {
    backgroundColor: "#00d04c",
    width:"100%",
  
    fontSize: "16px",
    textAlign: "center",
    height: "48px;",
    color: "white",
  },
  iconImg: {
    heigh: "112",
    width: "112",

    margin: "187px 149.5px 16px",
    display: "block",
  },
  img: {
    display: "flex",
    justifyContent: "center",
  },
}));

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#00d04c",
    },
  },
});

export default function CollectPage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <ThemeProvider theme={lightTheme}>
          <TitleBar title="我的收藏" />

          <Grid>
            <div className={classes.img}>
              <img src={heart} className={classes.iconImg} />
            </div>
            <div className={classes.text}>必須先登入可以收藏並查看喜愛步道</div>

            <Button
              variant="contained"
              href="#contained-buttons"
              className={classes.button}
            >
              登入
            </Button>
            <Navigation />
          </Grid>
        </ThemeProvider>
      </div>
    </>
  );
}
