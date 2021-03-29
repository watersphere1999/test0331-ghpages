import React, {useState} from 'react';
import Slider from "react-slick";
import {makeStyles, ThemeProvider} from '@material-ui/core/styles';
import fontStyle from '../../assets/jss/fontStyle';
import basicStyle from '../../assets/jss/basicStyle';
import { pathway, pathwayInfo } from '../../data/pathway';
import darkTheme from '../../config/darkTheme';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';

import { Link, useHistory } from 'react-router-dom';
// import Chart from 'react-apexcharts';



    const style = {
        ...fontStyle,
        ...basicStyle,
    };
    
    const useStyles = makeStyles(style)
    const bannerCarousel = { //控制react-slick的properties
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    const pathwayCarousel = { //控制react-slick的properties
        dots: false,
        arrows: true,
        variableWidth: true,
        swipeToSlide: true,
        swipe: true,
        infinite: true,
        speed:300,
    };





    const Pathway = () =>{
        const classes = useStyles();        
        const [auth, setAuth] = React.useState(true);
        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);

        const handleChange = (event) => {
        setAuth(event.target.checked);
        };

        const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
        setAnchorEl(null);
        };

            
        return(
            <ThemeProvider theme = {darkTheme}>
                <div className = {classes.root}>

                    {/* <Slider {...bannerCarousel} className={classes.slider}>
                    {pathwayInfo.album.slice(0, 8).map((img, i) => (
                        <div key={i}>
                        <img src={img} alt={'slider img'} className={classes.sliderImg} />
                        </div>
                    ))}
                    </Slider> */}
                    <div style={{padding: '176px 0 0'}}>

                    </div>
                    <AppBar className = {classes.appBarTransparent}>
                        <Toolbar>
                            <IconButton style={{color: 'inherit'}}>
                                <ArrowBackIcon> </ArrowBackIcon>
                            </IconButton>
                            <span style= {{flexGrow: 1}} /> {/*把剩下的空間全部分配在這個span裡面 */}
                            <IconButton edge="end" color="inherit" aria-label="add to the favorite" onClick={() => {}}>
                                <FavoriteIcon />  {/*這邊要想辦法串收藏 */}
                            </IconButton>        
                            <IconButton edge="end" color="inherit" style = {{marginLeft: '24px',}} aria-label="share article" onClick={() => {}}>
                                <ShareIcon />  {/*這邊要想辦法串第三方分享 */}
                            </IconButton>               
                        </Toolbar>
                    </AppBar>
                    
                    <div style={{display: 'flex',}}>
                        <Typography variant="h6" className={classes.titleXLL} style={{marginLeft: '8px', fontWeight: '900'}} >
                            {pathwayInfo.name}
                        </Typography>
                        <span style= {{flexGrow: 1}} />
                        <Button
                            size="small"
                            variant="outlined"
                            color="secondary"
                            className={classes.locationOnIcon}
                            startIcon={<LocationOnIcon />}
                            style={{marginRight: '16px'}}
                        >
                            {pathwayInfo.distance} km
                        </Button>
                    </div>
                    <Divider style={{height:'8px'}} />
                    <div style={{paddingTop: '8px', paddingBottom: '8px'}}>
                        {pathwayInfo.chips.map((chip,i) =>(
                             <Chip label={chip} key={i} href="#chip" variant="outlined" style={{margin: '8px', marginRight: 0, padding: '6px', fontSize: '14px', fontWeight: '700'}} />
                        ))}
                    </div>
                    <Divider style={{height:'8px'}} />                  
                    <Grid container spacing={0}>
                        <Grid item xs={4} >
                            <div className={classes.hikingInfoLeft}> 海拔 </div>
                        </Grid>
                        <Grid item xs={8} >
                            <div className={classes.hikingInfoRight}> {pathwayInfo.altitude[0]}~{pathwayInfo.altitude[1]} m</div>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={4} >
                            <div className={classes.hikingInfoLeft}> 全長 </div>
                        </Grid>
                        <Grid item xs={8} >
                            <div className={classes.hikingInfoRight}> {pathwayInfo.miles} km </div>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={4} >
                            <div className={classes.hikingInfoLeft}> 分類 </div>
                        </Grid>
                        <Grid item xs={8} >
                            <div className={classes.hikingInfoRight}> {pathwayInfo.class} </div>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={4} >
                            <div className={classes.hikingInfoLeft}> 行程時間 </div>
                        </Grid>
                        <Grid item xs={8} >
                            <div className={classes.hikingInfoRight}> {Math.floor(pathwayInfo.costTime/60)}h {pathwayInfo.costTime % 60} m</div>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={4} >
                            <div className={classes.hikingInfoLeft}> 地區 </div>
                        </Grid>
                        <Grid item xs={8} >
                            <div className={classes.hikingInfoRight}> {pathwayInfo.location} </div>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={4} >
                            <div className={classes.hikingInfoLeft}> 路面狀況 </div>
                        </Grid>
                        <Grid item xs={8} >
                            <div className={classes.hikingInfoRight}> {pathwayInfo.status.map((condition,i)=>(<span key={i}>{condition}、</span>))} </div>
                        </Grid>
                        <Grid item xs={12} style={{marginBottom: '16px'}}>
                            <Divider />
                        </Grid>
                    </Grid>
                    <Divider style={{height:'8px'}} />                  
                    <div >
                        <Typography variant = "h6" style={{margin:'16px 0 16px 16px', fontSize:'16px', fontWeight:'900', lineHeight: '1.5', letterSpacing:'0.5px'}}>登山口</Typography>
                        <Slider {...pathwayCarousel} >
                            {pathwayInfo.trailhead.map((entry, i) => (
                            <div key={i} >
                                <Button variant={'contained'} style={{ backgroundColor: '#abebdc', }} component={Link} to={'/trailhead'} className={classes.defaultButton} disableElevation>{entry.name}</Button>
                            </div>
                            ))}
                        </Slider>
                    </div>
                    <Divider style={{height:'8px'}} />
                    {/* <div className={classes.sectionPaper}>
                        <Typography className={classes.mainTextWeight}>步道雷達圖</Typography>
                        <Chart options={chartSetting.options} series={chartSetting.series} type="radar" height={300} />
                    </div>         */}
                            
                </div>
            </ThemeProvider>
        )



    };


    export default Pathway;
