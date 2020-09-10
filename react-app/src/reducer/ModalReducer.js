export default function(visible = false, action) {


    if(action.type === 'isVisible') {
      var newVisible = !visible 
      
      return newVisible;
    
    } else {
      return visible;
    }
    
  }