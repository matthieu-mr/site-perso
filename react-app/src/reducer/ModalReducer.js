export default function(visible = true, action) {


    if(action.type == 'isVisible') {
      var newVisible = !visible 

     // ok -  console.log("action reducer-------->", newVisible)
      return newVisible;
    
    } else {
      return visible;
    }
    
  }