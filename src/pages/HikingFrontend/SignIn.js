import React from "react";
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AndroidIcon from '@material-ui/icons/Android';
import FacebookIcon from '@material-ui/icons/Facebook';
import AppleIcon from '@material-ui/icons/Apple';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Page from 'material-ui-shell/lib/containers/Page';
import { Link as RouterLink} from "react-router-dom";
import { useHistory } from "react-router-dom";
import { MemoryRouter as Router } from 'react-router';
import bg from '../../asset/img/sample.jpg';
import GoogleLogin from "react-google-login";
import axios from "axios";
import FacebookLogin from 'react-facebook-login';
import googleIcon from '.../../asset/img/google-icon.svg';

const useStyles = makeStyles((theme)=> ({
  container: {
    display:'flex',
    flexDirection: 'column',  // flexDirection:'column' 使button strech 開來
    // width:'411px',
    width: '100%',
    // height: '736px',
    height: '100%',
  },
  root:{
    maxheight: '600',
    width: '100%',
    margin: '0',
    padding: '0',
    overflowX: 'hidden',
    objectFit: 'cover',
  },
  google:{
    margin: 'auto', 
  },
  facebook:{
    // root:{
    //   backgroundColor: "#4267b2",
    // },
    display: 'flex',
    backgroundColor: "#4267b2",
    letterSpacing: 2,
    color: "#ffffff",
    width: '92%',
    height: '44px',
    marginBottom: '16px',
    margin: 'auto', 
    
  },
  newFacebook:{
    width: '92%',
    height: '44px',  
    borderRadius: '4px',
    background: '#4267b2',
    color: '#ffffff',
    border: '0px transparent',
    letterSpacing: 2,  
    marginBottom: '16px',
    margin: 'auto', 
    display: 'flex',
    fontSize: '13.5px',
    padding: '13px 0px 0px',
    justifyContent: 'center',
    shadowRadius: '15',
  }
}));

const ColorButton1 = withStyles(() => ({
  root: {
    display: 'flex',
    backgroundColor: "#ffffff",
    letterSpacing: 1.6,
    color: "#000000",
    width: '92%',
    height: '44px',
    marginBottom: '16px',
    margin: 'auto', 
    fontWeight: '500',  
  },
}))(Button);

const ColorButton2 = withStyles(() => ({
  root: {
    display: 'flex',
    backgroundColor: "#4267b2",
    letterSpacing: 2,
    color: "#ffffff",
    width: '92%',
    height: '44px',
    marginBottom: '16px',
    margin: 'auto',  
    
  },
}))(Button);

const ColorButton3 = withStyles(() => ({
  root: {
    display: 'flex',
    backgroundColor: "#000000",
    letterSpacing: 2,
    color: "#ffffff",    
    width: '92%',
    height: '44px',
    marginBottom: '16px',
    margin: 'auto',     
  },
}))(Button);

const ColorButton4 = withStyles(() => ({
  root: {
    display: 'flex',
    backgroundColor: "#ffffff",
    letterSpacing: 1.6,
    color: "#000000",
    width: '92%',
    height: '44px',
    margin: 'auto', 
    fontWeight: '500',  
  },
}))(Button);

const testTheme = createMuiTheme({
  palette: {
    primary:{
      main: '#b000ff',
      contrastText: '#ffffff',
    }
  }
});

// var windowObjectReference;

// async function openGooglePopup(){
//   windowObjectReference = await window.open('https://gohiking-server.herokuapp.com/auth/google/', '_blank', 'width= 350, height = 450', 'resizable = 0');
//   // console.log(windowObjectReference)
// }




export default function ImgMediaCard() {
  const classes = useStyles();
  let history = useHistory();
  function GoToLogin1_1() {
    history.push("/login1_1");
  }

  const responseGoogle = async(response) => {
    console.log(response);
    var data = {
      'email': response.profileObj.email,
      'name': response.profileObj.name,
      'id': response.profileObj.googleId,
      'avatar': response.profileObj.imageUrl,
    }
    console.log('response: ' + data);
    await axios.post('https://gohiking-server.herokuapp.com/api/auth/google/callback', data).then(function(response2){
      console.log('second response: '+ JSON.stringify(response2));
      console.log('second response token: '+ response2.data.token);
      localStorage.setItem('token', response2.data.token);
      history.push('/home');
    })
    .catch(function (error) {
      console.log('error: '+ error);
      
    })
  };

  const responseFacebook = async(response) => {
    console.log('response: ' + JSON.stringify(response))
    var data = {
      'email': response.email,
      'name': response.name,
      'id': response.id,
      'avatar': response.picture.data.url,
    }
    console.log('data' + JSON.stringify(data));
    await axios.post('https://gohiking-server.herokuapp.com/api/auth/google/callback', data).then(function(response2){
      console.log('second response: '+ JSON.stringify(response2));
      console.log('second response token: '+ response2.data.token);
      localStorage.setItem('token', response2.data.token);
      history.push('/home');
    })
    .catch(function (error){
      console.log('error: '+ error);
    })
  }

  const componentClicked =()=>console.log("clicked!")
  const state={
      isLoggedIn:false,
      userID:'',
      name:'',
      email:'',
      picture:''

  }

  return (   
         
      <div className= {classes.container} style={{objectFit: "cover"}}>
        <div style={{
          width: '100vw',
          height: 381,
          overflow: 'hidden',
        }}>
          <img src={bg} alt={'bg'} style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }} />
        </div>
        <div style={{margin: "16.5px 16px 0px",}}>
          <GoogleLogin
            clientId="184500302467-kn257cjsh71fconchpf7dmd52qmdvkkg.apps.googleusercontent.com"
            render={renderProps => (
              <ColorButton1 className = {classes.google} onClick={renderProps.onClick} disabled={renderProps.disabled} variant = "contained" startIcon={<img src = {googleIcon} style={{height: '18px', weight: '18px'}}/>}>透過Google登入</ColorButton1>
            )}
            buttonText="使用 Google 登入"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
          <FacebookLogin
            appId="1311202525878900"
            autoLoad={false}
            onClick={componentClicked}
            callback={responseFacebook}
            fields="name,email,picture"
            cssClass = {classes.newFacebook}
            textButton= "透過FACEBOOK登入"
            icon = {<FacebookIcon style={{color: "#ffffff", marginRight: "5px",fontSize : "24px", paddingBottom: "4px"}}/>}
            />
          {/* <ColorButton2 className = {classes.facebook} variant = "contained" startIcon={<FacebookIcon fontSize = "small" style={{color: "#ffffff", }}/>}>
            透過Facebook登入
          </ColorButton2> */}
          <ColorButton3 variant = "contained" startIcon={<AppleIcon style={{color: "#ffffff"}}/>}>
            透過Apple ID登入
          </ColorButton3>
          <ColorButton4 variant = "contained" onClick = {GoToLogin1_1} startIcon={<MailOutlineIcon style={{color: "#000000"}}/>}>
            透過Mail登入
          </ColorButton4>
        </div>
          <ThemeProvider theme = {testTheme}>
            <div style={{margin: "24px 0px 0px 0px"}}></div>
          </ThemeProvider>
          <Typography variant="body2" component="p" style={{color: "black", direction: "column", textAlign: "center"}}>
            還不是會員嗎? <RouterLink to="/signup" style={{color: '#000000'}}>註冊新帳號</RouterLink>
          </Typography>
          <Button variant = "outlined" component={RouterLink} to="/home" style={{color: "#00d04c", fontWeight:"700" , borderColor: "#00d04c", width:"182px", height: "40px", margin: "auto",marginTop: '16px' }}>
            直接使用
          </Button>
            
      </div>
  );
}

// href="https://gohiking-server.herokuapp.com/auth/google/" target="_blank"
// 1311202525878900