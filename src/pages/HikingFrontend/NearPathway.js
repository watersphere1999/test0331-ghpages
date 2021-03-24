import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const style = {

}
const useStyles = makeStyles(style);

function a11yProps(index) { // Material-ui official example code 
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const NearPathway = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [gpsSetting, setGpsSetting] = React.useState(false);


    const handleChange = (event, newValue) => { // Material-ui official example code
        setValue(newValue);
      };

    return(
        <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        附近步道
                    </Typography>
                </Toolbar>
                <Tabs value={value} variant = "fullWidth" onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="賞楓" {...a11yProps(0)} />
                    <Tab label="挑戰" {...a11yProps(1)} />
                    <Tab label="溫泉" {...a11yProps(2)} />
                    <Tab label="親子" {...a11yProps(3)} />
                </Tabs>
        </AppBar> 
       
    )
};

export default NearPathway;