import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles  } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
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
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';


//css
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';

// import des icones 
import PersonIcon from '@material-ui/icons/Person';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MenuIcon from '@material-ui/icons/Menu';



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
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);



// detection mobile 


let affichageMenu

console.log("function", MyComponent())


if (MyComponent()==true){
affichageMenu = (
  
<div className={classes.menu}>
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
                <MenuIcon  className={classes.icon} />
                Projets Wordpress
            </Link>
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

  <Grid >
    <div>
      <Button className={classes.menuMobile}
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
        <StyledMenuItem>
        <Link
                color="inherit"
                href="#wordpress"
            >
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </Link>
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <InboxIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </StyledMenuItem>
      </StyledMenu>
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

  menuMobile:{
    background: '#7b1fa2',

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