function convertFromRGB(){
    try {
        //Get value from input field
        var r = parseInt(document.getElementById("red").value);
        var g = parseInt(document.getElementById("green").value);
        var b = parseInt(document.getElementById("blue").value);

        if(r > 1 || b > 1 || g > 1){
            alert("Please enter values between 0.0 and 1.0");
            return;
        }

        if(r > -1 && b > -1 && g > -1){
            alert(rbgToρɣβL(r, g, b));
        }else{
            alert("Please enter valid numbers");
        }
        
    } catch (error) {
        console.error(error);
        alert("Something went wrong!");
    }
 }

 function rbgToρɣβL(r, g, b){
     //returns result in ρɣβL
     return "The result of the conversion is '--'";
 }

 function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
