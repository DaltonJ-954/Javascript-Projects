var K = ("Tech Academy") //This is an example of a variable
document.write (K);

function getValue(a) { 
    return a; 
  } 
   
  var x = 1, y = 2,  
  z =  
  x + y  
  + getValue( (function () { 
      return x + y; 
  })() ); 