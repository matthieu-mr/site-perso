import React,{useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles  } from '@material-ui/core/styles';
import {connect} from 'react-redux';


// import components
import SimpleModal from "./components/Modals"
import ExpCards from "./components/ExpCards"
import MyMenu from './Menu'
import Projet from './components/Projet'
// import CSS

import { Link } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
// import des icones 
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';


// import des cards
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


// import des icones 

import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';


function Home(props) {

  const { classes } = props;

// data for all projects

const [listProject,setListProject] = useState([])

useEffect(() => {
  async function recupDonnée(){
      var requestBDD = await fetch(`/projets`)
      var listProjetRaw = await requestBDD.json()
      setListProject(listProjetRaw.result)
    }
  recupDonnée()
},[]);


var projetWordpress = listProject.map (function(item,i){
  if(item.type_projet =="Site Wordpress" ){
   return <Projet key={i} icon="wordpress" type ={item.type_projet} name={item.nom} description={item.description} techno ={item.techno} objectif={item.objectifs} front={item.lien_git_front} back={item.lien_git_back} lien={item.lien_perso} />
  }
})

var web = listProject.map (function(item,i){
  if(item.type_projet =="Site internet" ){
   return <Projet key={i} icon="site" type ={item.type_projet} name={item.nom} description={item.description} techno ={item.techno} objectif={item.objectifs} front={item.lien_git_front} back={item.lien_git_back} lien={item.lien_perso} />
  }
})


var appli = listProject.map (function(item,i){
  if(item.type_projet =="Application Mobile" ){
   return <Projet key={i} icon="appli"  type ={item.type_projet} name={item.nom} description={item.description} techno ={item.techno} objectif={item.objectifs} front={item.lien_git_front} back={item.lien_git_back} lien={item.lien_perso} />
  }
})


  return(
    <div className={classes.body} xs={12}>
      <div className={classes.menuSticky}>
      <MyMenu />

      </div>
  
    <SimpleModal />

<Grid container className={classes.bodystyle} >
  <Grid item xs={12} sm={6} className={classes}>

{/* ---------------------  Presentation  --------------------- */}


<Card className={classes.card} style={{marginTop:20}}>
  <Grid container spacing={4}>
    <Grid item xs={12} sm={8} >  
        <CardHeader className={classes.carditem}
            title="Développeur Web & Web Mobile "
          />
        <Typography  style={styles.firstcontent}>
            Matthieu Michon-Rossel <br /> 
            <a href="tel:+33618199252"  className={classes.lien} > <PhoneAndroidIcon /> Téléphone : 06 18 19 92 52</a>  <br /> 
            <a href="mailto:m.michon.rossel@gmail.com"   className={classes.lien}> <MailOutlineIcon /> Mail :  m.michon.rossel@gmail.com</a>  <br /> 
            32 ans <br /> 
            Permis B - Motorisé <br /> 
            16 rue Saint Hilaire, 94210, La Varenne Saint Hilaire <br />
          </Typography>

      </Grid>
      <Grid item sm={4}>  
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

        <ExpCards />

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
<Card className={classes.card}  id="appli">
        <CardHeader className={classes.carditem}
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                 <DesktopWindowsIcon />
              </Avatar>
            }
            title="Applications Mobiles" 
          />

      
        {appli}
      
    </Card>





{/* ---------------------  exp web --------------------- */}
    <Card className={classes.card}  id="web">
        <CardHeader className={classes.carditem}
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                 <DesktopWindowsIcon />
              </Avatar>
            }
            title="Projets Web - React - Node.js / express" 
          />

    
        {web}
       
    </Card>


{/* ---------------------  exp wordpress --------------------- */}
<Card className={classes.card} id="wordpress">
        <CardHeader className={classes.carditem}
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                 <DesktopWindowsIcon />
              </Avatar>
            }
            title="Projets Web - Autour de Wordpress" 
          />

    
        {projetWordpress}
    
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
root: {
  flexGrow: 1,
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
    display:"flex",
    width:"70%",
    margin:"auto"
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