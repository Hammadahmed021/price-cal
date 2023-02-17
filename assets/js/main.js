feather.replace();

$(function () {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 5,
    margin: 10,
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1200: {
        items: 5,
      },
    },
  });
});

var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});

// video popup

$(document).ready(function () {
  $(".vid-slider .vid").on("click", function () {
    // get required DOM Elements
    var iframe_src = $(this).children("iframe").attr("src"),
      iframe = $(".video-popup"),
      iframe_video = $(".video-popup iframe"),
      close_btn = $(".close-video img");
    iframe_src = iframe_src + "?autoplay=1&rel=0"; // for autoplaying the popup video

    // change the video source with the clicked one
    $(iframe_video).attr("src", iframe_src);
    $(iframe).fadeIn().addClass("show-video");

    // remove the video overlay when clicking outside the video
    $(document).on("click", function (e) {
      if ($(iframe).is(e.target) || $(close_btn).is(e.target)) {
        $(iframe).removeClass("show-video");
        $(iframe_video).attr("src", "");
      }
    });
  });
});

// contact us

$(document).ready(function () {
  $(".contact-slider .cntct a").on("click", function () {
    // get required DOM Elements
    (iframe = $(".contact-popup ")), (close_btn = $(".close-video img"));

    // change the video source with the clicked one
    $(iframe).fadeIn().addClass("show-video");

    // remove the video overlay when clicking outside the video
    $(document).on("click", function (e) {
      if ($(close_btn).is(e.target)) {
        $(iframe).removeClass("show-video");
      }
    });
  });
});

// ----------
(function () {
  // Opt-in to Bootstrap functionality
  // Create variables
  var optionsList = document.getElementById("reason-list"),
    allTargets = $(".option-target"),
    currentOption,
    currentTarget;
  // Create Hide and Show Functionality
  function hideShowTargets() {
    allTargets.each(function () {
      this.classList.add("hidden");
    });
    currentOption = optionsList.value;
    currentTarget = document.getElementById(currentOption);
    if (currentTarget) {
      currentTarget.classList.remove("hidden");
    }
  }
  // Add event listener
  optionsList.addEventListener("change", hideShowTargets);
})();

// newsletter form
$(document).ready(function () {
  //Fade in delay for the background overlay (control timing here)
  $("#bkgOverlay").delay(4800).fadeIn(400);
  //Fade in delay for the popup (control timing here)
  $("#delayedPopup").delay(5000).fadeIn(400);

  //Hide dialouge and background when the user clicks the close button
  $("#btnClose img").click(function (e) {
    HideDialog();
    e.preventDefault();
  });
});
//Controls how the modal popup is closed with the close button
function HideDialog() {
  $("#bkgOverlay").fadeOut(400);
  $("#delayedPopup").fadeOut(300);
}

$(" .video__button").on("click", function () {
  if (!$("#video-player").length) {
    var video =
      '<iframe id="video-player" src="' +
      $(".video__placeholder").attr("data-video") +
      '" frameborder="0" allowfullscreen wmode="opaque " autoplay;></iframe>';
    $(video).insertAfter($(".video__placeholder"));
    $(".video__button").addClass("is-playing");
  } else {
    $(".video__button").removeClass("is-playing");
    $("#video-player").remove();
  }
});
