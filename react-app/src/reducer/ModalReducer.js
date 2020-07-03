export default function(visible = false, action) {


    if(action.type === 'isVisible') {
      var newVisible = !visible 
      console.log("reducer --->", newVisible)
      return newVisible;
    
    } else {
      return visible;
    }
    
  }