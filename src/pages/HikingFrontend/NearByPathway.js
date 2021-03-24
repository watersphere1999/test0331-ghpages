import React from "react";
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
import PathwayDistance from "../../components/Lists/PathwayDistance";
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { ReactComponent as Map } from '../../asset/img/map.svg';
//for GPS dialog
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { pathway, pathwayFamily, pathwayFavorite } from 'data/pathway';
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
        margin: "20px 0 0",
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
    }
}));

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
                    <Typography className={classes.listItem}>{children}</Typography>
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

const NearByPathway = () => {
    const [gpsSetting, setGpsSetting] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(true);
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
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
                                    pathLink={path.pathLink}
                                    favorite={false}
                                    key={i}
                                    avatar={path.img}
                                    avatarAlt={path.pathTitle}
                                    title={path.pathTitle}
                                    location={path.pathLocation}
                                    miles={path.pathMiles}
                                />
                            ))}
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            {pathwayFamily.suggest.map((path, i) => (
                                <PathwayDistance
                                    pathLink={path.pathLink}
                                    favorite={false}
                                    key={i}
                                    avatar={path.img}
                                    avatarAlt={path.pathTitle}
                                    title={path.pathTitle}
                                    location={path.pathLocation}
                                    miles={path.pathMiles}
                                />
                            ))}
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            {pathwayFavorite.suggest.map((path, i) => (
                                <PathwayDistance
                                    pathLink={path.pathLink}
                                    favorite={false}
                                    key={i}
                                    avatar={path.img}
                                    avatarAlt={path.pathTitle}
                                    title={path.pathTitle}
                                    location={path.pathLocation}
                                    miles={path.pathMiles}
                                />
                            ))}
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            Page Four for Testing
                        </TabPanel>
                    </>
                    :
                    <div >
                        <div className={classes.mapBox}>
                            <Map /><br />GPS未開啓<br />請至『設定』並開啟位置設定
                        </div>
                    </div>
                }
                <Navigation />
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
                        <Button onClick={handleCancel}>
                            取消
                        </Button>
                        <Button onClick={handleSetting} autoFocus>
                            設定
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    );
}

export default NearByPathway;