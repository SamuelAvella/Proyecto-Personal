/********************************************************************************/
/*                                 JS of index.html                             */
/*                            Author: Samuel Avella Pérez                       */
/*                                    Version: 1.0                              */
/*                                Comment: final project                        */
/********************************************************************************/

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }