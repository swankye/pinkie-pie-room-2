let clicks = 0;
let password = true;

function openModal() {
  // https://www.w3schools.com/howto/howto_css_modals.asp
  // https://www.w3schools.com/css/css_positioning.asp
  // essentially you have a second page that is "position: fixed" filling up the screen, but it is in "display: none" so you can't see it!
  document.getElementById("myModal").style.display = "flex";
}

function hideModal() {
  document.getElementById("myModal").style.display = "none";
}

function nextEscapeRoomPage() {
  window.location.href = "https://rtqj9s.csb.app/";
}

function dash() {
  document.getElementById("my_song").volume = 0.2;
  document.getElementById("my_song").play();
  //document.getElementById("first").classList.add("clicked");
  clicks++;
  if (clicks == 1) {
    console.log("correct click");
  } else {
    console.log("wrong click");
    password = false;
  }
  console.log(clicks);

  //check if the password is correct
  if (clicks == 5 && password == true) {
    console.log("YOU ESCAPED");
  } else if (clicks == 5 && password == false) {
    console.log("WRONG");
    clicks = 0;
    password = true;
  }
}
function rarity() {
  document.getElementById("my_song").volume = 0.2;
  document.getElementById("my_song").play();
  clicks++;
  if (clicks == 2) {
    console.log("correct click");
  } else {
    console.log("wrong click");
    password = false;
  }
  console.log(clicks);

  //check if the password is correct
  if (clicks == 5 && password == true) {
    console.log("YOU ESCAPED");
  } else if (clicks == 5 && password == false) {
    console.log("WRONG");
    clicks = 0;
    password = true;
  }
}
function apple() {
  document.getElementById("my_song").volume = 0.2;
  document.getElementById("my_song").play();
  clicks++;
  if (clicks == 3) {
    console.log("correct click");
  } else {
    console.log("wrong click");
    password = false;
  }
  console.log(clicks);

  //check if the password is correct
  if (clicks == 5 && password == true) {
    console.log("YOU ESCAPED");
  } else if (clicks == 5 && password == false) {
    console.log("WRONG");
    clicks = 0;
    password = true;
  }
}
function shy() {
  document.getElementById("my_song").volume = 0.2;
  document.getElementById("my_song").play();
  clicks++;
  if (clicks == 4) {
    console.log("correct click");
  } else {
    console.log("wrong click");
    password = false;
  }
  console.log(clicks);

  //check if the password is correct
  if (clicks == 5 && password == true) {
    console.log("YOU ESCAPED");
  } else if (clicks == 5 && password == false) {
    console.log("WRONG");
    clicks = 0;
    password = true;
  }
}
function twilight() {
  document.getElementById("my_song").volume = 0.2;
  document.getElementById("my_song").play();
  clicks++;
  if (clicks == 5) {
    console.log("correct click");
  } else {
    console.log("wrong click");
    password = false;
  }
  console.log(clicks);

  //check if the password is correct
  if (clicks == 5 && password == true) {
    console.log("YOU ESCAPED");
    window.location.href =
      "https://jordojumbo.github.io/JeffTheKiller-EscapeRoom3/";
  } else if (clicks == 5 && password == false) {
    console.log("WRONG");
    clicks = 0;
    password = true;
  }
}

function wrongclick() {
  document.getElementById("my_song").volume = 0.2;
  document.getElementById("my_song").play();
  clicks++;
  console.log("wrong click");
  password = false;

  //check if the password is correct
  if (clicks == 5 && password == true) {
    console.log("YOU ESCAPED");
  } else if (clicks == 5 && password == false) {
    console.log("WRONG");
    clicks = 0;
    password = true;
    document.getElementById("myModal").style.display = "none";
  }
}

function clickObject(e) {
  e.classList.add(e.id);
}

const dark = document.createElement("div");
dark.id = "darkness";
dark.classList.add("flash-off");
document.body.appendChild(dark);

var hasmatch = false;

function clickmatch(e) {
  if (hasmatch == false) {
    hasmatch = true;

    dark.classList.remove("flash-off");

    const light = document.createElement("div");
    light.classList.add("flashlight", "flash-on");
    document.body.appendChild(light);

    const cursorDot = document.createElement("div");
    cursorDot.id = "cursorDot";
    document.body.appendChild(cursorDot);

    e.remove();
  }
}
