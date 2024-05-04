const menuHome = () => {
  document.getElementById("iframe_pages").setAttribute("src", "home.html");
  document.getElementById("menuHome").style =
    "color:black; background-color:white;";
  document.getElementById("menuJukeBox").style =
    "color:white; background-color:#298eb5;";
  document.getElementById("menuGame").style =
    "color:white; background-color:#298eb5;";
};
const menuJukeBox = () => {
  document.getElementById("iframe_pages").setAttribute("src", "music.html");
  document.getElementById("menuJukeBox").style =
    "color:black; background-color:white;";
  document.getElementById("menuHome").style =
    "color:white; background-color:#298eb5;";
  document.getElementById("menuGame").style =
    "color:white; background-color:#298eb5;";
};

const menuGame = () => {
  document.getElementById("iframe_pages").setAttribute("src", "game.html");
  document.getElementById("menuGame").style =
    "color:black; background-color:white;";
  document.getElementById("menuJukeBox").style =
    "color:white; background-color:#298eb5;";
  document.getElementById("menuHome").style =
    "color:white; background-color:#298eb5;";
};
