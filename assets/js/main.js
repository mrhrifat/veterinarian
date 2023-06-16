$(document).ready(function () {
  //Navbar
  let nav_offset_top = $(".header").height() - 450;

  function navbarFixed() {
    if ($(".header").length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();

        if (scroll >= nav_offset_top) {
          $(".header .main").addClass("nav_fixed");
        } else {
          $(".header .main").removeClass("nav_fixed");
        }
      });
    }
  }
  navbarFixed();

  // Wow
  new WOW().init();
  const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
    const target = document.querySelector(qSelector);
    let startTimestamp = null;
    let animationStarted = false;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      target.innerText = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const startAnimation = () => {
      if (!animationStarted) {
        animationStarted = true;
        window.requestAnimationFrame(step);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold value as per your requirement
    );

    observer.observe(target);
  };

  counterAnim("#count1", 100, 34793, 1000);
  counterAnim("#count2", 500, 45382, 1500);
  counterAnim("#count3", 200, 54672, 2000);
});
