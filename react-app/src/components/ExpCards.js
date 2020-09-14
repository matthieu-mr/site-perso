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


function ExpTab(props) {
const { classes } = props;
const [listExp, setListExt] = useState()

    useEffect(() => {
        async function recupDonnée(){
            var requestBDD = await fetch(`/experiences`)
            var listExp = await requestBDD.json()
            setListExt(listExp.result)
          }
        recupDonnée()
    },[]);


    let Affichage = (
        <div className={classes.progress}>
    <CircularProgress color="#eceff1" />
        </div>
        
    )
    if(listExp){
        Affichage = (
            listExp.map((item)=>{
             let lien = `${item.lien}`
                return (
                  <Grid item  xs={12} md={4}   container
                  direction="row"
                  justify="space-evenly"
                  alignItems="stretch"> 
                    <Card className={classes.exp}>
                    <CardHeader className={classes.carditemExp}
                                classes={{
                                subheader:classes.subheader
                                }}
                            title={item.diplôme}
                            subheader={item.type}
                        />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Dates : <br />
                        {item.date}<br /><br />
                        {item.nom}
                        </Typography>
                    </CardContent>

                    <Divider />
                
                    <CardActions>
                    <Link href={lien}>
                        <Button size="small" color="red">
                        Voir le site de la fomation
                        </Button>
                    </Link>
                
                    </CardActions>
                    </Card>
                    </Grid>
                
                )
            })
        )  
    }


  return (
<Grid container spacing={2}   alignItems="stretch">
    {Affichage}
</Grid>


  );
}



const styles = {

      subheader:{
        color:"white"
      },

      carditem:{
        background: '#7b1fa2',
        color: 'white',
    
      },
    
      carditemExp:{
        backgroundColor:"#d1c4e9",


      },
    
  expGrid:{
    
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
    



    ExpTab.propTypes = {
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
  )( withStyles(styles)(ExpTab));
  
  