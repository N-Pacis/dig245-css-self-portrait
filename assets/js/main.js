
/* javascript */

var bauhaus = `

Staaatliches Bauhaus (1919-1933)

      ..-""T-..
    ,'__   |   '.
   /   N|  |     !
  :     '  |      :
  [      __|      ]
  :      _I       :
   !   ___I      /
    '.  N]     ,'
      "-"!..--"

`;

console.log(bauhaus);

document.addEventListener("mousemove", (event) => {
  let mouseX = event.clientX;
  let mouseY = event.clientY;
  document.getElementById("coordinates").innerHTML = "X = " + mouseX + ", " + "Y = " + mouseY;
});

console.log("Used "+document.querySelectorAll("div").length+" Elemements!!!");

