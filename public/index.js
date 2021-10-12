window.onscroll = () => {
  const aprop = document.querySelectorAll("[id=nav-links]");
  const aiden = document.querySelector("h1");
  const nav = document.querySelector("nav");
  const icons = document.querySelectorAll("[id=icons]");
  console.log(aprop);
  var vertical_position = 0;
  if (this.scrollY) vertical_position = this.scrollY;
  else if (document.documentElement.clientHeight)
    //ie
    vertical_position = document.documentElement.scrollTop;
  else if (document.body)
    //ie quirks
    vertical_position = document.body.scrollTop;
  let greeting_div = document.getElementById("greeting");
  greeting_div.style.top = vertical_position + 200 + "px";
  /////////////// changes nav to black
  if (this.scrollY <= window.innerHeight - 2) {
    nav.style.backgroundColor = "transparent";
    aiden.className = "";
    for (let i = 0; i < aprop.length; i++) {
      aprop[i].className = "";
      icons[i].className = "";
    }
  } else {
    nav.style.backgroundColor = "black";
    aiden.className = "scroll";
    for (let i = 0; i < aprop.length; i++) {
      aprop[i].className = "scroll";
      icons[i].className = "invert";
    }
  }
};
$(".owl-carousel").owlCarousel({
  center: false,
  loop: false,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 3,
      nav: false,
    },
    600: {
      items: 4,
      nav: false,
    },
    1000: {
      items: 6,
      nav: false,
    },
  },
});
