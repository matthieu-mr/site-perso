import React, { useState } from 'react';
import {

  withStyles,
  makeStyles,

} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

//css
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

// import des icones 
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';


const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: "#4a0072",
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: "#4a0072",
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: "#4a0072",
      },
      '&:hover fieldset': {
        borderColor: "#4a0072",
      },
      '&.Mui-focused fieldset': {
        borderColor: "#4a0072",
      },
    },
  },
})(TextField);





const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  fab:{
    marginLeft:"80%",
    marginRight:"20%",
    position:"fixed",
    marginTop:"-35px",
    fontSize:"150px",
    height:"70px",
    width:"70px",
    background:"#4a0072",
    '&:hover': {
      background: '#c158dc',
    },
    

  },
  root: {
    '& > *': {
      margin: theme.spacing(1),

    },
    
  },
  lien:{
    color: '#4a0072',
    textDecoration:"none",
    margin:15,
    display:"flex"

  }

}));

function SimpleModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [phone,setPhone] = useState('');
  const [mail,setMail] = useState('');
  const [info,setInfo] = useState('');
  const [name,setName] = useState('')


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  let sendForm =async ()=>{


    var requestBDD = await fetch(`/sendmail`,{
      method:"POST",
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body:`mail=${mail}&info=${info}&phone=${phone}`
    })
    var listActivityRaw = await requestBDD.json()

  }

  return (
    <div>

      <Fab color="primary" aria-label="add" className={classes.fab} onClick={handleOpen} >
                  <MailOutlineIcon />
      </Fab>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >



        <Fade in={open}>
        
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Me contacter :</h2>

            <a href="tel:+33618199252"  className={classes.lien} > <PhoneAndroidIcon /> Téléphone : 06 18 19 92 52</a>
            <a href="mailto:m.michon.rossel@gmail.com"   className={classes.lien}> <MailOutlineIcon /> Mail :  m.michon.rossel@gmail.com</a>

            <h2 id="transition-modal-title">Contact via formulaire :</h2>
            <form className={classes.root} noValidate autoComplete="on">
              
            <CssTextField
                className={classes.margin}
                label="Vos Nom & prénom"
                id="standard-basic"
                onChange={(e)=> setName(e.target.value)}
                fullWidth
              />


              <CssTextField
                className={classes.margin}
                label="Votre téléphone"
                id="custom-css-outlined-input"
                onChange={(e)=> setPhone(e.target.value)}
                fullWidth
              />

              
              <CssTextField
                className={classes.margin}
                label="Votre Email"
                id="custom-css-outlined-input"
                onChange={(e)=> setMail(e.target.value)}
                fullWidth
              />

                            
              <CssTextField
                className={classes.margin}
                label="Autres informations"
                id="custom-css-outlined-input"
                onChange={(e)=> setInfo(e.target.value)}
                fullWidth
                multiline
              />
  

                <Button 
                  variant="contained"
                  color="primary"
                  className={classes.fab}
                  endIcon={<SendIcon/>}
                  onClick={sendForm}
                >
                 Envoyer
            </Button>




           </form>


          </div>
        </Fade>
      </Modal>
    </div>
  );
}

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
  )(SimpleModal);
  
  