import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from '@material-ui/core/Divider';
import usericon from "../../asset/img/hpic3202.jpg";
import "./sidebar.scoped.scss";
import Avatar from "@material-ui/core/Avatar";

import Tooltip from "@material-ui/core/Tooltip";
import axios from "axios";
import { Link } from "react-router-dom";
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
const useStyles = makeStyles({
  list: {
    width: "353px",
    fontFamily: "NotoSansCJKtc",
  },
  fullList: {
    width: "auto",
  },
  iconButton: {
    padding: 0,
    minHeight: 0,
    minWidth: 0,
    margin: 0,
  },
  avater: {
    height: "64px",
    width: "64px",
    marginTop: "16px",
    margin: "0 42px 16px 16px",
  },
  name: {
    margin: "16px 59px 16px 16px",
    fontWeight: "bold",
    fontSize: "18px",
  },
  mail: {
    color: "#919191",
    fontFamily: "Roboto",
    margin: "16px 154px 16px 16px",
    fontSize: "14px",
    lineHeight: "1.43",
  },
  scrim: {
    padding: "10%",
    
    borderRadius: "4px",
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: 1.5,
    height: "48px",
    "&:hover": {
      backgroundColor: "rgba(0, 208, 76, 0.05)",
      color: "#00d04c",
    },
  },
  link: {
    color: "#000000",
    textDecoration: "none",
    "&:hover": {
      color: "#00d04c",
    },
  },
  icon:{
    color:"black",
    
   fontSize:"24px",
  },
  text: {
    margin: "0 0 0 32px",
  },
  tangle: {
    width: "100%",
    height: "1px",

    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
  sion: {
    height: "48px",
  },
  version: {
    fontSize: "14px",
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: "15%",
    width: "323px",
  },
  versiont: {
    marginLeft: "50%",
    textAlign: "right",

    color: "#919191",
  },
  log: {
    color: "#007aff",
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "1.5",
    marginLeft: "15%",
  },
});
const demoapi = axios.create({
  //測試 api
  baseURL: "http://09da54f0b81b.ngrok.io",
  headers: {
    "X-Secure-Code": "12345678",
  },
});

export default function Sidebar(props) {
  const classes = useStyles();
  const [user, setuser] = useState([]);
  const [state, setState] = useState(false);
  const [anchor] = useState("left");
  const id = "2";
  const userApi = async (id) => {
    await demoapi.get("/api/user/" + id).then((res) => {
      setuser(res.data);
    });
  };
  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown") return;
    setState(open);
  };
  useEffect(() => {
    userApi(id);
  }, [id]);

  return (
    <>
      <div className={classes.list} role="presentation">
        <Avatar className={classes.avater} src={user.image} />
        <Grid className={classes.name}>{user.name}</Grid>

        <Grid className={classes.mail}>{user.email}</Grid>
        <Divider />
        <List component="nav" aria-label="main mailbox folders" >
          <ListItem button className={classes.scrim}>
            <ListItemIcon  >
            <PermIdentityOutlinedIcon className={classes.icon}/>
            </ListItemIcon>
            <ListItemText primary="個人檔案" />
          </ListItem>
          <ListItem button className={classes.scrim}>
            <ListItemIcon >
          < LockOutlinedIcon className={classes.icon}/>
            </ListItemIcon >
            <ListItemText primary="隱私權政策" />
          </ListItem>
          <ListItem button className={classes.scrim}>
            <ListItemIcon className={classes.icon}>
            <InfoOutlinedIcon className={classes.icon}/> 
            </ListItemIcon>
            <ListItemText primary="關於我們" />
          </ListItem>
        </List>
        
        <Divider />
        
        <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="版本" />
          <ListItemText primary="1.0.1" />
        </ListItem>
        </List>
       <Divider />
        <Grid className={classes.log}>登出</Grid>
      </div>
    </>
  );
}
