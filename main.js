function opensign() {
  var opensign = document.querySelector(".modal-login");
  opensign.classList.toggle("open-sign");

  var clossecontentbutton = document.querySelector(".contentbutton");
  clossecontentbutton.classList.remove("opencontentbutton2");

  var closeGioiThieu = document.querySelector(".footer");
  closeGioiThieu.classList.remove("opengioithieuf8");

  var closeGioiThieu = document.querySelector(".footer");
  closeGioiThieu.classList.remove("opengioithieuf8");
}

function closesign() {
  var closesign = document.querySelector(".modal-login");
  closesign.classList.remove("open-sign");
}

// ////////////////////////////////////////////////

function openlogin1() {
  var openlogin1 = document.querySelector(".login-1");
  openlogin1.classList.toggle("open-login1");

  var closelogin2 = document.querySelector(".login-2");
  closelogin2.classList.remove("open-login2");
}

function closelogin1() {
  var closelogin1 = document.querySelector(".login-1");
  closelogin1.classList.remove("open-login1");
}

// /////////////////////////////////////

function openlogin2() {
  var closelogin2 = document.querySelector(".login-2");
  closelogin2.classList.toggle("open-login2");

  var closelogin1 = document.querySelector(".login-1");
  closelogin1.classList.remove("open-login1");
}

function closelogin2() {
  var closelogin2 = document.querySelector(".login-2");
  closelogin2.classList.remove("open-login2");
}

function user() {
  // var clickuser = document.querySelector(".homepage");
  // clickuser.classList.toggle("view-profile");
  var clickuserr = document.querySelector(".profile");
  clickuserr.classList.toggle("view-profiler");
}

function remove() {
  var clickuserr = document.querySelector(".profile");

  clickuserr.classList.remove("view-profiler");
}

var i = 0,
  text;
text = " Cà phê là người bạn không thể thiếu trong cuộc sống !";
function typing() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 70);
  }
}
typing();

// slider- slick

$(document).ready(function () {
  $(".main-slider").slick({
    slidesToShow: 3,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    autoplay: true,
    autoplaySpeed: 3500,
    Infinity: true,
  });
});

$(document).ready(function () {
  $(".main-slider-khu-vuc").slick({
    slidesToShow: 4,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    autoplay: true,
    autoplaySpeed: 3500,
    Infinity: true,
  });
});
