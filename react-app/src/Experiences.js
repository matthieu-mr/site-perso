import React, {View,useEffect, useState} from 'react';

//CSS
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CircularProgress from '@material-ui/core/CircularProgress';
import logo from './logo.svg';
import CardContent from '@material-ui/core/CardContent';
import { withStyles  } from '@material-ui/core/styles';
import './App.css';

// import components
import SimpleModal from "./components/Modals"
import MyMenu from './Menu'



function Experiences(props) {
  const { classes } = props;

const [exp,setExp] = useState()


  useEffect(() => {
    async function recupDonnée(){
        var requestBDD = await fetch(`/exp-pro`)
        var listExpRaw = await requestBDD.json()
        setExp(listExpRaw.result)
      }
    recupDonnée()
  },[]);

  let Affichage = (
    <div  style={styles.progress}>
      <CircularProgress color="secondary" />
    </div> 
  )

if (exp){
  Affichage = exp.map((item,i)=>{
    let logo = `/${item.logo}`

    let summary = item.summary.map((item,i)=>{
      
      return (
        <li key={i} style={styles.liste}> {item} </li>
      )
    })

   return ( 
    <div>
  
    <ListItem alignItems="flex-start" style={styles.listeExp}>
      <ListItemAvatar>
          <Avatar alt="Travis Howard" src={logo} />
        </ListItemAvatar>
        <Grid
        >
        <Grid container item
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          style={styles.gridTitle}
          >
        <p style={styles.title}>{item.position} </p><p style={styles.title2}> - {item.name} </p>
        
        </Grid>
     
        <Grid item>
          <p style={styles.date}>{item.startDate} - {item.endDate} </p>
        </Grid>

        <Grid  item
          direction="row" wrap="nowrap"
          style={styles.gridListe}
          >
            <ul> 

             {summary}
          </ul> 
        </Grid>
     </Grid>
   </ListItem>
   <Divider />
   </div>
   )
  })
}



return(
  <div className={classes.body} >
   <MyMenu />
  <SimpleModal />

  <Grid container className={classes.bodystyle} >
    <Grid item xs={12}  >
      <Card className={classes.card} style={{marginTop:20}}>
          {Affichage}
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
  
  progress:{
    backgroundColor:"#eceff1",
    margin:"auto",
  },
  listeExp:{
backgroundColor:"white"
  },
  body:{
    backgroundColor:"#eceff1"
  },
  gridTitle:{
    marginTop:"-10px",
  },
  title:{
    fontSize:"20px",
    padding:"1px",
  },
  title2:{
    fontSize:"20px",
    paddingLeft:"10px",
  },
  date:{
    fontSize:"15px",
    marginTop:"-10px"
  },
  gridListe:{
    marginBottom:"20px"
  },

}




export default withStyles(styles)( Experiences);
