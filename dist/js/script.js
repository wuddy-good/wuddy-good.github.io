document.addEventListener('DOMContentLoaded', function() {

    // Acordion

    const accordionBtn = document.querySelector('.accordion-btn');
    const accordionContent = document.querySelector('.accordion-content');
  
    accordionBtn.addEventListener('click', function() {
      setTimeout(function() {
        accordionContent.classList.toggle('active');
      }, 200);
    });
    const menu = document.querySelector('.nav'),
  menuItem = document.querySelectorAll('.nav__item'),
  hamburger = document.querySelector('.hamburger'),
  facebook = document.querySelector(".nav-social_link")
  body = document.querySelector('body');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('nav_active');
    facebook.classList.toggle("nav-social_link_active")
    body.classList.toggle('overflow-hidden'); // Added line to toggle body class
  });

  // Hamburger

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('nav_active');
      body.classList.toggle('overflow-hidden'); // Added line to toggle body class
    });
  });

  // Video
  // const videoPresentation = document.querySelector(".responsibility-reasons-item-video_object");
  // if (document.location.pathname == "/responsibility.html") {
    const videoBtn = document.querySelector("#video-story-btn");
    const videoBtnIcon = document.querySelector(".responsibility-reasons-item-video_img");
    const videoFile = document.querySelector("#video-story");
    const videoOverlay = document.querySelector(".responsibility-reasons-item-video_overlay");
    const videoPresentation = document.querySelector(".responsibility-reasons-item-video_object");
    
    videoBtn.addEventListener("click", function () {
        videoPresentation.classList.add("responsibility-reasons-item-video_object_active");
        function toggleOverlay(event) {
            if (event.type === "mouseleave") {
                videoOverlay.classList.add("hidden");
            } else {
                videoOverlay.classList.remove("hidden");
            }
        }
    
        if (videoFile.paused) {
            videoFile.play();
            videoBtnIcon.src = "icons/stop.svg";
    
            videoOverlay.onmouseleave = toggleOverlay;
            videoOverlay.onmouseenter = toggleOverlay;
        } else {
            videoFile.pause();
            videoBtnIcon.src = "icons/icons.png";
    
            videoOverlay.onmouseleave = null;
            videoOverlay.onmouseenter = null;
        }
    });
  }
);
console.log(document.location.pathname)