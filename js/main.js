// // menu start
// var menu = document.getElementById("menu");
// var menuBtn = document.getElementById("menuBtn");
// var moreBtn = document.getElementById("moreBtn");
// var body = document.body;
// menuBtn.onclick = function () {
//   menu.classList.toggle("active");
//   menuBtn.classList.toggle("active");
//   body.classList.toggle("active");
// };
// window.onclick = function (event) {
//   if (event.target == menu) {
//     menu.classList.remove("active");
//     menuBtn.classList.remove("active");
//     body.classList.remove("active");
//   }
// };
// moreBtn.onclick = function () {
//   moreBtn.classList.toggle("active");
// };
// // menu end

// if (window.innerWidth < 1024) {
//   mobileOnlySlider();
// }
// function resizeListener(e) {
//   if (window.innerWidth < 1024) {
//     $(".slider").addClass("sliderMob");
//     if (!$(".slider").hasClass("slick-initialized")) {
//       mobileOnlySlider();
//     }
//   } else {
//     $(".slider").removeClass("sliderMob");
//     if ($(".slider").hasClass("slick-initialized")) {
//       $(".slider").slick("unslick");
//     }
//   }
// }
// resizeListener();
// $(window).resize(resizeListener);

// // scroll start
// // let header = document.getElementById("header");
// // function scrollFunc() {
// //   if (window.pageYOffset >= 50) {
// //     header.classList.add("sticky");
// //     langBtn.classList.remove("active");
// //     langCont.classList.remove("active");
// //   } else {
// //     header.classList.remove("sticky");
// //   }
// // }
// // const links = document.querySelectorAll(".links");
// // const sections = document.querySelectorAll(".anchor");
// // function changeLinkState() {
// //   let index = sections.length;
// //   while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
// //   links.forEach((link) => link.classList.remove("active"));
// //   links[index]?.classList.add("active");
// // }
// // links.forEach((e) => {
// //   onLinkClick(e);
// // });
// // function onLinkClick(linkItem) {
// //   linkItem.addEventListener("click", function () {
// //     menu.classList.remove("active");
// //     menuBtn.classList.remove("active");
// //     body.classList.remove("active");
// //   });
// // }
// // function onLinkClick(linkItem) {
// //   linkItem.addEventListener("click", function () {
// //     menu.classList.remove("active");
// //     menuBtn.classList.remove("active");
// //     body.classList.remove("active");
// //   });
// // }
// // window.onscroll = function () {
// //   changeLinkState();
// //   scrollFunc();
// // };
// // // scroll end



// // tab start
// const tabBtn = document.querySelectorAll(".tabBtn");
// const tabEvent = document.querySelectorAll(".tabEvent");
// tabBtn.forEach((e) => {
//   onTabClick(tabBtn, tabEvent, e);
// });
// function onTabClick(tabBtns, tabItems, item) {
//   item.addEventListener("click", function (e) {
//     let currentBtn = item;
//     let tabId = currentBtn.getAttribute("data-tab");
//     let currentTab = document.querySelector(tabId);
//     if (currentBtn.classList.contains("active")) {
//       console.log("now active");
//       const faq = currentBtn.parentElement.querySelector(".tabEvent");
//       if (faq) {
//         faq.classList.remove("active");
//         currentBtn.classList.remove("active");
//       }
//     } else if (!currentBtn.classList.contains("active")) {
//       tabBtns.forEach(function (item) {
//         item.classList.remove("active");
//       });
//       tabItems.forEach(function (item) {
//         item.classList.remove("active");
//       });
//       currentBtn.classList.add("active");
//       currentTab.classList.add("active");
//     }
//     if ($(".slider").hasClass("sliderMob")) {
//       $(".slider").slick("refresh");
//     }
//   });
// }
// tab end
// // wow start
// var wow = new WOW({
//   boxClass: "wow",
//   animateClass: "animated",
//   offset: 0,
//   mobile: true,
//   live: true,
//   scrollContainer: null,
//   resetAnimation: true,
// });
// wow.init();
// // wow end

var timeleft = 11;

var redeemBtn = document.getElementById("redeemBtn");
var qr = document.getElementById("qr");
var downloadTimer = null
const countdownFunction = function(){
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    redeemBtn.classList.remove("active");
    qr.classList.remove("active");
    timeleft = 11
  } else {
    document.getElementById("countdown").innerHTML = timeleft;
  }
  
}

redeemBtn.onclick = function () {
  redeemBtn.classList.toggle("active");
  qr.classList.toggle("active");
  countdownFunction()

   downloadTimer = setInterval(countdownFunction, 1000);
};
