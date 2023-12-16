/********************************************************************************/
/*                                 JS of index.html                             */
/*                            Author: Samuel Avella Pérez                       */
/*                                    Version: 1.0                              */
/*                                Comment: final project                        */
/********************************************************************************/

/******NAV****** */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

/*****STARTING BTN******/