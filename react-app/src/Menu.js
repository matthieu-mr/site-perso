import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles  } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// Modal 
import ModalForm from "./components/Modals"

// list menu mobile
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


//css
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';

// import des icones 
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';

import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import WebIcon from '@material-ui/icons/Web';

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
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const StyledMenu = withStyles({
    paper: {
      border: '1px solid #7b1fa2',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: "#4a0072",
        textDecoration:"none",
       
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);



// detection mobile 


let affichageMenu




if (MyComponent()==true){
affichageMenu = (
  
<div className={classes.menu}>
<Grid container className={classes.bodystyle} >
  <Grid item sm={8} className={classes}>
            <Breadcrumbs aria-label="breadcrumb" separator="-" >

            <Link
                color="inherit"
                to="/"
                onClick={handleClick}
                className={classes.link}
            >
                <HomeIcon  className={classes.icon} />
               Acceuil
            </Link>
            <Link
                color="inherit"
                to="/#appli"
                onClick={handleClick}
                className={classes.link}
            >
                <DesktopMacIcon  className={classes.icon} />
                Projets 
            </Link>
           
            <Link
                color="inherit"
                to="/experiences"
                onClick={handleClick}
                className={classes.link}
            >
                
                <WebIcon  className={classes.icon} />
                Experiences professionnelles 
            </Link>

            <Button className={classes.dlButton} variant="contained" color="primary" href="\CV-Matthieu Michon Rossel.pdf">
              Telecharger mon CV
            </Button>

       </Breadcrumbs>
    </Grid>
  </Grid>
  </div>
  )
}else {


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



affichageMenu = (

  <Grid className={classes.menuMobile}>
    <div>
      <Button className={classes.boutonMobile}
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        onClick={handleClick}
      >
          <MenuIcon  className={classes.icon} />
      </Button>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
    <Link to="/" className={classes.link}> 
   
        <StyledMenuItem>
          <ListItemIcon>
            <PhoneIphoneIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Accueil"                       
                          classes={{
                            primary:classes.primary
                          }}/>
        </StyledMenuItem>
    </Link>

    <Link to="/#web"  className={classes.link}>  
  
        <StyledMenuItem>
          <ListItemIcon>
            <DesktopMacIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Projets"                          
                           classes={{
                            primary:classes.primary
                          }}/>
        </StyledMenuItem>
    </Link>

    <Link to="/experiences"  className={classes.link} >
        
        <StyledMenuItem >
        
          <ListItemIcon>
            <WebIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Experiences Professionnelles"
                                    classes={{
                                      primary:classes.primary
                                    }}/> 
          </StyledMenuItem>
        </Link>
      </StyledMenu>

      <Button className={classes.dlButtonMobile } variant="contained" color="primary" href="\CV-Matthieu Michon Rossel.pdf">
              Telecharger mon CV
            </Button>
    </div>

    </Grid>
    )

}



return (
  <div>
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
dlButton:{
  backgroundColor:"#4a0072",
},

menuMobile:{
  background: '#7b1fa2',
  marginTop:"500",
  color:"white",
  paddingTop:"5px",
  paddingBottom:"5px",
},


boutonMobile:{
  background: '#7b1fa2',
  height:"35px",
  marginTop:"5px",
},

dlButtonMobile:{
  marginLeft:"15px",
  backgroundColor:"#4a0072",
  height:"35px",
  marginTop:"5px",
},
primary:{
  color:"#4a0072",
  textDecoration: "none"

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