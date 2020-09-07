import React, { useState,Text } from 'react';

import {connect} from 'react-redux';



function Tab() {

  return (
    <Text> ici les tabs </Text>
  );
}

function mapDispatchToProps(dispatch) {
    return {
      isVisible: function(info) { 
        dispatch( {type: 'isVisible'}) 
      },
      
    }
  }


  const styles = {

    body:{
      backgroundColor:"#eceff1"
    },
    
    };
    


  
  function mapStateToProps(state) {
    return { infoVisible: state.modals }
  }
    
  export default connect(
    mapStateToProps, 
      mapDispatchToProps
  )(Tab);
  
  