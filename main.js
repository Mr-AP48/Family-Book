var reasons = [" Amey ",
  "   Ajay",
  " Rohini",
];
var images = ["Amey Pathak.png",
  "Ajay Pathak.jpeg",
  "Rohini Pathak.jpeg",
];
var i = 0;

function next() {
  document.getElementById("img1").src = images[i];
  document.getElementById("1stp").innerHTML = reasons[i];
  i++;
  if (i == 5) {
    i = 0
  };
}