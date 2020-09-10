import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles  } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import {connect} from 'react-redux';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// Modal 
import ModalForm from "./components/Modals"


//css
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';

// import des icones 
import PersonIcon from '@material-ui/icons/Person';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function MyComponent() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return matches;
}


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

  // menu responsive
  
  const [isMobile,setIsMobile] = useState(true)

// detection mobile 


let affichageMenu

console.log("function", MyComponent())


if (MyComponent()==true){
affichageMenu = (
<Grid container className={classes.bodystyle} >
  <Grid item sm={8} className={classes}>
            <Breadcrumbs aria-label="breadcrumb" separator="-" >

            <Link
                color="inherit"
                href="#appli"
                onClick={handleClick}
                className={classes.link}
            >
                <PersonIcon  className={classes.icon} />
                Applications Mobiles
            </Link>
            <Link
                color="inherit"
                href="#web"
                onClick={handleClick}
                className={classes.link}
            >
                <PersonIcon  className={classes.icon} />
                Projets Web
            </Link>
            <Link
                color="inherit"
                href="#wordpress"
                onClick={handleClick}
                className={classes.link}
            >
                <PersonIcon  className={classes.icon} />
                Projets Wordpress
            </Link>
       </Breadcrumbs>
    </Grid>
  </Grid>
  )
}else {
  
affichageMenu = (
  <Grid container className={classes.bodystyle} >
    <Grid item sm={8} className={classes}>
              <Breadcrumbs aria-label="breadcrumb" separator="-" >
  
              <Link
                  color="inherit"
                  href="#appli"
                  onClick={handleClick}
                  className={classes.link}
              >
                  <PersonIcon  className={classes.icon} />
                  Applications Mobiles
              </Link>

         </Breadcrumbs>
      </Grid>
    </Grid>
    )

}



return (
<div className={classes.menu}>
{affichageMenu}
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