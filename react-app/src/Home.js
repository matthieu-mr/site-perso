import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MyMenu from './Menu'
import {connect} from 'react-redux';

import SimpleModal from "./components/Modals"



// import CSS
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


// import des icones 
import PersonIcon from '@material-ui/icons/Person';
import DevicesIcon from '@material-ui/icons/Devices';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';


function Home(props) {

  const { classes } = props;
  console.log(" /////// Home ", props.infoVisible)

  useEffect(() => {
    console.log("use home", props.infoVisible)
    },[props.infoVisible]);


  return(
    <div>
    <MyMenu />
    <SimpleModal />

<Grid container className={classes.bodystyle} >
  <Grid item sm={8} className={classes}>

{/* ---------------------  Presentation <Avatar alt="Cindy Baker" src="/images/perso.jpg" /> --------------------- */}
  
  <Card className={classes.card} >
      <CardContent className={classes.cardheader}>
        <Grid container spacing={3}>

            <Grid item sm={8}>
              <Typography variant="subtitle1" color="textSecondary">
              Matthieu Michon
              </Typography>
            </Grid>

            <Grid item sm={4} justify="flex-end" >  
              <img className={classes.pictureheader} src="/perso.jpg" alt="image" />
            </Grid>

        </Grid>
      </CardContent>
    </Card>



{/* ---------------------  Card --------------------- */}

    <Card className={classes.card}>
        <CardHeader className={classes.carditem}
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                 <PersonIcon />
              </Avatar>
            }
            title="Expériences professionnelles"
            
          />

      <CardContent>
        <Typography variant="body" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <Divider variant="middle" />
      <CardActions>
        <Button className={classes.boutoncard}>Découvrir mes expériences</Button>
      </CardActions>
    </Card>


{/* ---------------------  exp web --------------------- */}
    <Card className={classes.card}>
        <CardHeader className={classes.carditem}
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                 <DesktopWindowsIcon />
              </Avatar>
            }
            title="Projet Web"
            
          />

      <CardContent>
        <Typography variant="body" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <Divider variant="middle" />
      <CardActions>
        <Button className={classes.boutoncard}>Découvrir mes expériences</Button>
      </CardActions>
    </Card>



{/* ---------------------  Experience react nativ --------------------- */}
    <Card className={classes.card}>
      <CardHeader className={classes.carditem}
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                 <DevicesIcon />
              </Avatar>
            }
                  title="Shrimp and Chorizo Paella"
                  
                />

      <CardContent>
        <Typography variant="body" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>

      <Divider variant="middle" />

      <CardActions>
        <Button className={classes.boutoncard}>Découvrir mes expériences</Button>
      </CardActions>
    </Card>


  </Grid>
  </Grid>

    </div>

    );
}


const styles = {
  bodystyle:{
  display:"flex",
  flexDirection:"column",
  alignItems:"center",

  },

  cardheader:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-end",
    marginBottom:"50px",
  },
  pictureheader:{
    alignSelf:"flex-end",
    height:200,
  },

  card:{
    marginBottom:"50px",
  },

  bouton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginTop:-30
  },
  text:{
    color:"red",
    background: '#7b1fa2',
  },
  carditem:{
    background: '#7b1fa2',
    color: 'white',
  },
  boutoncard:{
    color: '#7b1fa2',
  },    
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  avatar:{
    background:"#4a0072"
  },
};


Home.propTypes = {
  classes: PropTypes.object.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    isVisible: function(info) { 
      dispatch( {type: 'isVisible'}) 
    },
    
  }
}

function mapStateToProps(state) {
  return { infoVisible: state.modals }
}
  
export default connect(
  mapStateToProps, 
    mapDispatchToProps
)( withStyles(styles)(Home));



//export default withStyles(styles)(Home);