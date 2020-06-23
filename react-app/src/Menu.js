import React, {View} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import {Redirect } from 'react-router-dom'



function MyMenu() {
  const classes = styles();

  let handleClick =()=> {
   //event.preventDefault();
 
    
    console.info('You clicked a breadcrumb.');
  }
  
  

  return (
    <div className={styles.menu}>

    
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
                <WhatshotIcon className={classes.icon} />
                Experiences
            </Link>
            <Typography color="textPrimary" className={classes.link}>
                <GrainIcon className={classes.icon} />
                Projets
            </Typography>
            </Breadcrumbs>
    </div>
    
  );
}


const styles = makeStyles((theme) => ({

  menu:{
    backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    marginTop:"500"
  },
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },

}));


export default MyMenu