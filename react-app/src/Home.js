import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles,makeStyles  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MyMenu from './Menu'
import {connect} from 'react-redux';

import SimpleModal from "./components/Modals"

// import des tabs
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Box from '@material-ui/core/Box';

// import CSS
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

// import des cards
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


// import des icones 
import PersonIcon from '@material-ui/icons/Person';
import DevicesIcon from '@material-ui/icons/Devices';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));






function Home(props) {

  const { classes } = props;
  console.log(" /////// Home ", props.infoVisible)

  useEffect(() => {
    console.log("use home", props.infoVisible)
    },[props.infoVisible]);


   // Partie tabs 
    
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

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
              Après plusieurs années passées en gestion de projet webmarketing,responsable Ux et fait du Growth Hacking, j'ai décidé de me réorienter dans le domaine du développement. 
              J'ai donc intégré la capsule, un bootcamp de développement spécialisé sur le language javascript dans l'objectif 
              d'acquérir les compétences nécessaires au développement d"application web & web Mobile sous React et React Native
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
        Test des tab
        </Typography>

      </CardContent>
      <Divider variant="middle" />
      <CardActions>
      <div className={classes.root}>
            <AppBar position="static">
              <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </div>

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