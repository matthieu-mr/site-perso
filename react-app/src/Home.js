import React,{useEffect,handleClick,handleDelete} from 'react';
import PropTypes from 'prop-types';
import { withStyles,makeStyles  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MyMenu from './Menu'
import {connect} from 'react-redux';

import SimpleModal from "./components/Modals"

import { Link ,Paper} from '@material-ui/core';


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

import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import DoneIcon from '@material-ui/icons/Done';



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
    <div className={classes.body}>
    <MyMenu />
    <SimpleModal />

<Grid container className={classes.bodystyle} >
  <Grid item sm={6} className={classes}>

{/* ---------------------  Presentation  --------------------- */}


<Card className={classes.card} style={{marginTop:10}}>
  <Grid container spacing={4}>
  
    <Grid item sm={8} justify="flex-start" >  
        <CardHeader className={classes.carditem}
            title="Développeur Web & Web Mobile "
          />
        <Typography  style={styles.firstcontent}>
            Matthieu Michon-Rossel <br /> 
            32 ans <br /> 
            Permis B - Motorisé <br /> 
            16 rue Saint Hilaire, 94210, La Varenne Saint Hilaire <br />
          </Typography>

      </Grid>
      <Grid item sm={4} style={{justifyItems:"flex-end"}}>  
        <img className={classes.pictureheader} src="/perso.jpg" alt="image" />
      </Grid>

        <CardContent>
          <Typography component="p" style={styles.content}>
            Après plusieurs années passées en gestion de projet webmarketing,responsable Ux et fait du Growth Hacking, j'ai décidé de me réorienter dans le domaine du développement web & Web Mobile. <br /> 
            J'ai donc intégré la capsule, un bootcamp de développement spécialisé sur le language javascript dans l'objectif 
            d'acquérir les compétences nécessaires au développement d"application web & web Mobile sous React et React Native
          </Typography>
        </CardContent>
    </Grid>

    <Divider variant="middle" />

<Typography component="h2" className={classes.expTitle}> Formations</Typography>

<Grid className={classes.expGrid}>
  <Grid item sm={4}>  
    <Card className={classes.exp}>
    <CardHeader className={classes.carditemExp}
                classes={{
                  subheader:classes.subheader
                }}
            title="Bootcamp"
            subheader="React / React Native / Node.js "
          />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Dates : <br /> 
        Mars à Mai 2020<br /><br />
        Lacapsule
        </Typography>
      </CardContent>

      <CardActions>
      <Link href="https://www.lacapsule.academy/" >
        <Button size="small" color="primary">
        Voir le site de la fomation
        </Button>
      </Link>

      </CardActions>
    </Card>
  </Grid>

  <Grid item sm={4}>  
    <Card className={classes.exp}>
    <CardHeader className={classes.carditemExp}
                classes={{
                  subheader:classes.subheader
                }}
            title="MBA"
            subheader="Digital Marketing & E-Commerce"
          />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Dates : <br />
        Septembre 2013 à Septembre 2014 <br /><br />
        Institut Léonard de Vinci
        </Typography>
      </CardContent>

      <CardActions>
      <Link href="https://www.ilv.fr/formation/master-marketing-digital/" >
        <Button size="small" color="primary">
        Voir le site de la fomation
        </Button>
      </Link>

      </CardActions>
    </Card>
  </Grid>

  <Grid item sm={4} >  
    <Card className={classes.exp}>
    <CardHeader className={classes.carditemExp}
                classes={{
                  subheader:classes.subheader
                }}
            title="Master 2"
            subheader="Management des TIC"
          />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            Dates : <br />
            Septembre 2010 à Septembre 2013 <br /><br />
            IAE Gustave Eiffel
        </Typography>
      </CardContent>

      <CardActions>
      <Link href="https://formations.univ-gustave-eiffel.fr/index.php?id=1941&tx_agof_brochure%5Bbrochure%5D=445&tx_agof_brochure%5Baction%5D=show&tx_agof_brochure%5Bcontroller%5D=Brochure&cHash=a1b94b3a756b1200691d4f6884e04232" >
        <Button size="small" color="primary">
        Voir le site de la fomation
        </Button>
      </Link>

      </CardActions>
    </Card>
  </Grid>
</Grid>

   <Divider variant="middle" />

    <CardActions className={classes.expButton}>
      <Typography className={classes.boutoncard}>En savoir plus : </Typography>

      <Link href="https://www.linkedin.com/in/matthieumichon/" >
        <Avatar src="/linkedin.png" alt="image" />
      </Link>
      <Link href="https://github.com/matthieu-mr/" >
        <Avatar src="/github.png" alt="image" />
      </Link>
        <Link href="https://www.instagram.com/matthieumichonr/" >
      <Avatar src="/instagram.png" alt="image" />
        </Link>
      <Link href="https://twitter.com/MatthieuMichon" >
        <Avatar src="/twitter.png" alt="image" />
      </Link>
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
            title="Projet Web - Autour de Wordpress" 
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

body:{
  backgroundColor:"#eceff1"
},

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

  subheader:{
    color:"white"
  },

  card:{
    marginTop:"50px",
  },


  carditem:{
    background: '#7b1fa2',
    color: 'white',

  },

  carditemExp:{
backgroundColor:"#873ba1"
  },

  expGrid:{
    display:"flex",
    marginBottom:"15px"
  },

  expTitle:{
    fontSize:"20px",
    margin:"15px"

  }, 
  exp:{
    margin:"15px",
    marginBottom:"10px",

  },

  expButton:{
    marginBottom: 15,
     marginTop : 15
  },


  content: {
    marginLeft:'20px',
    marginRight:"20px",
    marginBottom:"20px",
    
  },

  degreeCard:{
    margin:"5%",
  },

  degreeTitle:{
    fontSize: "15px"
  },

  firstcontent:{
    fontSize:"20px",
    marginLeft:'20px',
    marginTop:"30px",
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