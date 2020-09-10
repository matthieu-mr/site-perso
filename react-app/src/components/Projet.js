import React from 'react';
import {connect} from 'react-redux';
import { withStyles  } from '@material-ui/core/styles';

// import CSS

import { Link ,Paper} from '@material-ui/core';

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

// import list
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';




function Projet(props) {
const { classes } = props;


let objectifs = "type de projet : " + props.objectif

let git_front
let git_back
let lien
let icon 

switch (props.icon){
  case "wordpress" : 
    icon = "/wordpress.png"
    break ;
  case "site" : 
    icon = "/web.png"
    break ;
  case "appli" : 
    icon ="/playstore.png"
    break ;
}



if (props.front !== "false"){
  git_front = (
  <Link href={props.front} >
    <ListItem>
      <ListItemAvatar>
        <Avatar src="/git_front.png" alt="image" />
        </ListItemAvatar>
      <ListItemText  primary ="Lien Github" secondary="front-office" />
    </ListItem>
  </Link>

  )
}


if (props.back !== "false"){
  git_back = (
    <Link href={props.back} >
    <ListItem>
      <ListItemAvatar>
        <Avatar src="/github.png" alt="image" />
        </ListItemAvatar>
      <ListItemText  primary ="Lien Github" secondary="back-office" />
    </ListItem>
  </Link>
  )
}

if (props.lien !== "false"){
  lien = (
    <Link href={props.lien} >
    <ListItem>
      <ListItemAvatar>
        <Avatar src={icon} alt="image" />
        </ListItemAvatar>
      <ListItemText  primary ={props.type} secondary="Lien Direct" />
    </ListItem>
  </Link>
  )
}


if(props.lien =="false" && props.back =="false" && props.front =="false") {
  lien = (
    <Typography variant="body2" component="p">
    Aucun lien disponible
    </Typography>
  )
}



  return (

  <Grid item  xs={12} sm={4}   container
        direction="row"
        justify="space-evenly"
        alignItems="stretch"> 

   <Card className={classes.exp}>
      <CardHeader className={classes.carditemExp}
        classes={{
        subheader:classes.subheader
        }}
      title={props.name}
      />
    <CardContent className={classes.content}>
    
    <Typography variant="body2" component="p">
      {props.description}
    </Typography>

    <Typography variant="body2" color="textSecondary" component="p" className={classes.secondary}>
      {props.techno} <br />
      {objectifs}
    </Typography>
    
    </CardContent>
    
    <Divider />
    
        <CardActions>
          <List>                         
            {git_front}
            {git_back}
            {lien}
          </List>

      </CardActions>
    </Card>
  </Grid>



  );
}



const styles = {

        
      subheader:{
        color:"white"
      },

    
      carditemExp:{
    backgroundColor:"#d1c4e9",
    height:"75px"

      },
    
      exp:{
        margin:"15px",
        marginBottom:"10px",    
      },

      link:{
        display:"flex",
      },

      secondary:{
        marginTop:"15px"
      },
      content:{
        height:"22%",
      },


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
  
  