import React, { useState,useEffect } from 'react';
import {connect} from 'react-redux';
import { withStyles  } from '@material-ui/core/styles';

// import CSS

import { Link ,Paper} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';

import CircularProgress from '@material-ui/core/CircularProgress';



// import des cards
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


function Projet(props) {
const { classes } = props;
const [listExp, setListExt] = useState()



  return (
    <div>     
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


    </div>


  );
}



const styles = {

    body:{
      backgroundColor:"#eceff1"
    },
        
      subheader:{
        color:"white"
      },

      carditem:{
        background: '#7b1fa2',
        color: 'white',
    
      },
    
      carditemExp:{
    backgroundColor:"#873ba1",

      },
    
  expGrid:{
    display:"flex",
    marginBottom:"15px"
  },

      exp:{
        margin:"15px",
        marginBottom:"10px",    
      },

      progress:{
          display:"flex",
          margin:"auto",
         
      }
    };
    


/*
    ExpTab.propTypes = {
        classes: PropTypes.object.isRequired,
      };
      
*/
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
  )( withStyles(styles)(Projet));
  
  