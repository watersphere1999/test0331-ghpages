import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import axios from "axios";
import {
    makeStyles,
} from "@material-ui/core/styles";
// Import Swiper React components
// Import Swiper styles
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Navigation from "../../components/Bottom/Navigation";
import PathwayDistance from "../../components/PathwayCard/PathwayDistance";
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { ReactComponent as Map } from '../../asset/img/map.svg';
//for GPS dialog
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
//Custom the Button theme
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from "@material-ui/core/styles"
import { blue } from '@material-ui/core/colors';
// for GPS location
import useGeolocation from "react-hook-geolocation";

import { pathway, pathwayFamily, pathwayFavorite } from 'data/pathway';

const theme = createMuiTheme({
    palette: {
        secondary: blue,
    },
});
const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: "NotoSansCJKtc",
        flexGrow: 1,
        width: "100%",
    },
    appbar: {
        width: "-webkit-fill-available",
        height: "56px",
        backgroundColor: "#3c5754"
    },
    tabs: {
        width: "-webkit-fill-available",
        height: "48px",
        margin: "12px 0 0",
        backgroundColor: "#3c5754"
    },
    listItem: {
        height: "48px",
        margin: "20px 20px 20px",
        fontSize: "20px"
    },
    title: {
        fontFamily: "PingFangTC",
        width: "-webkit-fill-available",
        padding: "17px 0 0 16px",
        fontSize: "18px"
    },
    mapBox: {
        width: 210,
        margin: '123px auto',
        textAlign: 'center',
        fontSize: 16,
    },
    DialogBtn: {
        color: '#007aff',
        fontSize: '14px'
    }
}));

const api = axios.create({
    baseURL: "https://go-hiking-backend-laravel.herokuapp.com/",
    headers: {
        "X-Secure-Code": "12345678",
    },
});

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const classes = useStyles();

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography component={'span'} className={classes.listItem}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function NearByPathway() {
    const [gpsSetting, setGpsSetting] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(true);
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [searchMaple, setSearchMaple] = useState([]);
    const [searchChallenge, setSearchChallenge] = useState([]);
    const [searchSpring, setSearchSpring] = useState([]);
    const [searchFamily, setSearchFamily] = useState([]);

    const geolocation = useGeolocation();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleSetting = () => {
        setOpenDialog(false);
        setGpsSetting(true);
    };
    const handleCancel = () => {
        setOpenDialog(false);
    };

    let lat = geolocation.latitude;
    let lng = geolocation.longitude;
    // let loc = lat.concat(',', lng);
    console.log(lat, lng);
    //call trails and set trails data in search and id is category
    const initial = async () => {
        await axios.get('https://go-hiking-backend-laravel.herokuapp.com/api/collection/1')
            .then((response) => {
                console.log(response.data.trails);
                setSearchMaple(response.data.trails);
            });
        await axios.get('https://go-hiking-backend-laravel.herokuapp.com/api/collection/11')
            .then((response) => {
                console.log(response.data.trails);
                setSearchChallenge(response.data.trails);
            });
        await axios.get('https://go-hiking-backend-laravel.herokuapp.com/api/collection/21')
            .then((response) => {
                console.log(response.data.trails);
                setSearchSpring(response.data.trails);
            });
        await axios.get('https://go-hiking-backend-laravel.herokuapp.com/api/collection/31')
            .then((response) => {
                console.log(response.data.trails);
                setSearchFamily(response.data.trails);
            });
        console.log('======success========', searchChallenge);
    }

    const firstUpdate = useRef(true);
    useLayoutEffect(() => {
        if (!firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        console.log('prepare to initial!');
        initial();
    }, []);

    useEffect(() => {
        console.log('searchChallenge:    ', searchMaple)
    }, [searchFamily])

    return (
        <>
            <div className={classes.root}>
                <AppBar className={classes.appbar} position="static">
                    <Typography className={classes.title}>
                        附近步道
                    </Typography>
                    <Tabs
                        className={classes.tabs}
                        value={value}
                        onChange={handleChange}
                        variant="fullWidth"
                        aria-label="collection tabs"
                    >
                        <Tab label={<span style={{ color: '#ffffff' }}>賞楓</span>} {...a11yProps(0)} />
                        <Tab label={<span style={{ color: '#ffffff' }}>挑戰</span>} {...a11yProps(1)} />
                        <Tab label={<span style={{ color: '#ffffff' }}>溫泉</span>} {...a11yProps(2)} />
                        <Tab label={<span style={{ color: '#ffffff' }}>親子</span>} {...a11yProps(3)} />
                    </Tabs>
                </AppBar>
                {gpsSetting ?
                    <>
                        <TabPanel value={value} index={0}>
                            {pathway.suggest.map((path, i) => (
                                <PathwayDistance
                                    favorite={false}
                                    avatar={path.img}
                                    title={path.pathTitle}
                                    location={path.pathLocation}
                                    miles={path.pathMiles}
                                    yourlng={lng}
                                    yourlat={lat}
                                    longitude={path.longitude}
                                    latitude={path.latitude}
                                    key={i}
                                />
                            ))}
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            {searchChallenge.map((path, i) => (
                                <PathwayDistance
                                    favorite={false}
                                    avatar={path.coverImage}
                                    title={path.title}
                                    location={path.location}
                                    miles={path.distance}
                                    yourlng={lng}
                                    yourlat={lat}
                                    longitude={path.longitude}
                                    latitude={path.latitude}
                                    key={i}
                                />
                            ))}
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            {searchSpring.map((path, i) => (
                                <PathwayDistance
                                    favorite={false}
                                    avatar={path.coverImage}
                                    title={path.title}
                                    location={path.location}
                                    miles={path.distance}
                                    yourlng={lng}
                                    yourlat={lat}
                                    longitude={path.longitude}
                                    latitude={path.latitude}
                                    key={i}
                                />
                            ))}
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            {searchFamily.map((path, i) => (
                                <PathwayDistance
                                    favorite={false}
                                    avatar={path.coverImage}
                                    title={path.title}
                                    location={path.location}
                                    miles={path.distance}
                                    yourlng={lng}
                                    yourlat={lat}
                                    longitude={path.longitude}
                                    latitude={path.latitude}
                                    key={i}
                                />
                            ))}
                        </TabPanel>
                    </>
                    :
                    <div >
                        <div className={classes.mapBox}>
                            <Map /><br />GPS未開啓<br />請至『設定』並開啟位置設定
                        </div>
                    </div>
                }
                <Navigation dfValue={2}/>
                <Dialog
                    fullWidth
                    open={openDialog}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">GPS 未開啟</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">請至『設定』並開啟位置設定。</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <ThemeProvider theme={theme}>
                            <Button color="secondary" onClick={handleCancel}>
                                取消
                        </Button>
                            <Button color="secondary" onClick={handleSetting}>
                                設定
                        </Button>
                        </ThemeProvider>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    );
}

export default NearByPathway;