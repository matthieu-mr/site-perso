import React from 'react';
import PropTypes from 'prop-types';
import { withStyles  } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import {connect} from 'react-redux';


// Modal 
import ModalForm from "./components/Modals"


//css
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';

// import des icones 
import PersonIcon from '@material-ui/icons/Person';
import MailOutlineIcon from '@material-ui/icons/MailOutline';



function MyMenu(props) {
  const { classes } = props;


 // -------------------------------------------------------------------------------------------------
  let handleClick =()=> {
   //event.preventDefault();

  //  console.info('You clicked a breadcrumb.');
  }
  

  let showModal = () => {
    props.isVisible()
  }



  return (
    <div className={classes.menu}>


<Grid container className={classes.bodystyle} >
  <Grid item sm={8} className={classes}>

    
            <Breadcrumbs aria-label="breadcrumb" separator="-" >
            <Link 
              color="inherit" 
              href="/" 
              onClick={handleClick} 
              className={classes.link}>
            <HomeIcon className={classes.icon} />
                Accueil
            </Link>
            <Link
                color="inherit"
                href="/experiences"
                onClick={handleClick}
                className={classes.link}
            >
                <PersonIcon  className={classes.icon} />
                Experiences
            </Link>
            <Link
                color="inherit"
                href="/experiences"
                onClick={handleClick}
                className={classes.link}
            >
                <PersonIcon  className={classes.icon} />
                Projet Web
            </Link>
            <Link
                color="inherit"
                href="/experiences"
                onClick={handleClick}
                className={classes.link}
            >
                <PersonIcon  className={classes.icon} />
                Projet React & React NNativ
            </Link>


  </Breadcrumbs>
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
  menu:{
    background: '#7b1fa2',
    marginTop:"500",
    padding: 30,
    color:"white",
    
  },
  link: {
    display: 'flex',
    color:"white"
  },
  icon: {
    marginRight: 5,
    marginLeft:5,
    width: 20,
    height: 20,
    color:"white"
  },


};



MyMenu.propTypes = {
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
)( withStyles(styles)(MyMenu));



//export default withStyles(styles)(MyMenu);


//export default MyMenu