import React, { Fragment, useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, CardActionArea } from "@material-ui/core";
import axios from "axios";
import QuickList from "../../components/Lists/QuickList";
import BackArrow from "../../components/TopBar/BackArrow";
import family from "../../asset/img/icon-family.png";
import mapple from "../../asset/img/icon-mapple.png";
import chellenge from "../../asset/img/icon-chellenge.png";
import hotSpring from "../../asset/img/icon-hot-spring.png";
import forest from "../../asset/img/icon-forest.png";
import sakura from "../../asset/img/icon-sakura.png";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mask: {
    boxShadow: "none",
    backgroundColor: "#ffeddc",
    objectFit: "cover",
    height: 176,
    position: "relative",
  },
  collectionContent: {
    marginTop: 51,
    position: "relative",
    padding: 8,
    height: 120,
    overflow: "hidden",
  },
  title: {
    color:'black',
    fontSize: 16,
    fontWeight:'bold',
    padding: 8,
    lineHeight: 1.5,
    letterSpacing: 0.5,
    marginTop:"-1px",
  },

  list: {
    padding: "5%",
  },
  backArrow: {
    color: "#232323",
  },

  iconImg: {
    position: "absolute",
    right: 0,
    bottom: -40,
    width: 142,
    height: 142,
    overflow: "hidden",
  },
}));

const api = axios.create({
  baseURL: "https://go-hiking-backend-laravel.herokuapp.com/",
  headers: {
    "X-Secure-Code": "12345678",
  },
});

const obj = {
  "mapple.png": mapple,
  "chellenge.png": chellenge,
  "hotSpring.png": hotSpring,
  "family.png": family,
  "forest.png": forest,
  "sakura.png": sakura,
};

function SearchQuick(props) {
  const classes = useStyles();
  const id = props.match.params.id;
  //搜尋結果hook
  const [searchQuick, setSearchQuick] = useState([]);

  const searchApi = async (id) => {
    await api.get("/api/collection/" + id).then((res) => {
      setSearchQuick(res.data);
    });
  };
  useEffect(() => {
    searchApi(id);
  }, [id]);

  return (
    <>
      <div className={classes.root}>
        <AppBar className={classes.mask} position="static">
          <Link to="/searchPage" className={classes.backArrow}>
            <BackArrow />
          </Link>
          <div className={classes.collectionContent}>
          <div className={classes.title}>
              {searchQuick.name}步道
            </div>
            <span>老少咸宜，生活好去處。</span>
            <img
              src={obj[searchQuick.iconImage]}
              className={classes.iconImg}
              alt={searchQuick.iconImg}
            />
          </div>
          
        </AppBar>

        <Grid className={classes.list}>
          {/* 步道list component */}
          <QuickList data={searchQuick.trails} />
        </Grid>
      </div>
    </>
  );
}

export default SearchQuick;
