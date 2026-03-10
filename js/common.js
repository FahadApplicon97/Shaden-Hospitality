(function ($) {
  "use strict";

  const $documentOn = $(document);
  const $windowOn = $(window);

  $documentOn.ready(function () {
    /* ================================
       Mobile Menu Js Start
    ================================ */

    $("#mobile-menu").meanmenu({
      meanMenuContainer: ".mobile-menu",
      meanScreenWidth: "1199",
      meanExpand: ['<i class="far fa-plus"></i>'],
    });

    /* ================================
       Nice Select Js Start
    ================================ */

    if ($(".single-select").length) {
      $(".single-select").niceSelect();
    }

    /* ================================
       GT Room Slider Js Start
    ================================ */

    if ($(".room-slider").length > 0) {
      const gtRoomSlider = new Swiper(".gt-room-slider", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".array-prev",
          prevEl: ".array-next",
        },
        breakpoints: {
          1699: {
            slidesPerView: 5,
          },
          1399: {
            slidesPerView: 4.5,
          },
          1199: {
            slidesPerView: 4,
          },
          991: {
            slidesPerView: 3,
          },
          767: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 1.5,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    if ($(".gt-room-explore-slider").length > 0) {
      const gtRoomExploreSlider = new Swiper(".gt-room-explore-slider", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".array-prev",
          prevEl: ".array-next",
        },
        breakpoints: {
          1199: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 1,
          },
          767: {
            slidesPerView: 1,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    if ($(".room-slider-3").length > 0) {
      const gtRoomSlider3 = new Swiper(".room-slider-3", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".array-prev",
          prevEl: ".array-next",
        },
        breakpoints: {
          1199: {
            slidesPerView: 1.8,
          },
          991: {
            slidesPerView: 1,
          },
          767: {
            slidesPerView: 1,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    /* ================================
        Instagram Slider Js Start
    ================================ */

    if ($(".instagram-slider").length > 0) {
      const gtInstagramSlider = new Swiper(".gt-instagram-slider", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".array-prev",
          prevEl: ".array-next",
        },
        breakpoints: {
          1399: {
            slidesPerView: 6,
          },
          1199: {
            slidesPerView: 4,
          },
          991: {
            slidesPerView: 3,
          },
          767: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    if ($(".gt-instagram-slider-2").length > 0) {
      const gtInstagramSlider2 = new Swiper(".gt-instagram-slider-2", {
        spaceBetween: 0,
        speed: 1300,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".array-prev",
          prevEl: ".array-next",
        },
        breakpoints: {
          1399: {
            slidesPerView: 6,
          },
          1199: {
            slidesPerView: 4,
          },
          991: {
            slidesPerView: 3,
          },
          767: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    /* ================================
       Service Slider Js Start
    ================================ */

    if ($(".service-image-slider").length > 0) {
      const serviceImageSlider = new Swiper(".service-image-slider", {
        spaceBetween: 0,
        speed: 1300,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".array-prev",
          prevEl: ".array-next",
        },
        pagination: {
          el: ".dot",
          clickable: true,
        },
      });
    }

    /* ================================
       GT Special Offer Slider Js Start
    ================================ */

    if ($(".gt-special-offer-slider").length > 0) {
      const gtSpecialOfferSlider = new Swiper(".gt-special-offer-slider", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".array-prev",
          prevEl: ".array-next",
        },
        breakpoints: {
          1199: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    /* ================================
       GT Testimonial Slider Js Start
    ================================ */

    if ($(".gt-testimonial-slider").length > 0) {
      const gtTestimonialSlider = new Swiper(".gt-testimonial-slider", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".array-prev",
          prevEl: ".array-next",
        },
        pagination: {
          el: ".dot",
          clickable: true,
        },
      });
    }

    /* ================================
       Parallaxie Js Start
    ================================ */

    if ($(".parallaxie").length && $(window).width() > 991) {
      if ($(window).width() > 768) {
        $(".parallaxie").parallaxie({
          speed: 0.55,
          offset: 0,
        });
      }
    }

    /* ================================
      Faq Custom Js Start
    ================================ */

    document.addEventListener("DOMContentLoaded", function () {
      const items = document.querySelectorAll(".faq-item");

      items.forEach((item) => {
        item.addEventListener("mouseenter", function () {
          document
            .querySelector(".faq-item.active")
            ?.classList.remove("active");
          this.classList.add("active");
        });
      });
    });

    /* ================================
       Mouse Cursor Animation Js Start
    ================================ */

    if ($(".mouseCursor").length > 0) {
      function itCursor() {
        var myCursor = jQuery(".mouseCursor");
        if (myCursor.length) {
          if ($("body")) {
            const e = document.querySelector(".cursor-inner"),
              t = document.querySelector(".cursor-outer");
            let n,
              i = 0,
              o = !1;
            ((window.onmousemove = function (s) {
              (o ||
                (t.style.transform =
                  "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                (e.style.transform =
                  "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                (n = s.clientY),
                (i = s.clientX));
            }),
              $("body").on(
                "mouseenter",
                "button, a, .cursor-pointer",
                function () {
                  (e.classList.add("cursor-hover"),
                    t.classList.add("cursor-hover"));
                },
              ),
              $("body").on(
                "mouseleave",
                "button, a, .cursor-pointer",
                function () {
                  ($(this).is("a", "button") &&
                    $(this).closest(".cursor-pointer").length) ||
                    (e.classList.remove("cursor-hover"),
                    t.classList.remove("cursor-hover"));
                },
              ),
              (e.style.visibility = "visible"),
              (t.style.visibility = "visible"));
          }
        }
      }
      itCursor();
    }

    /* ================================
       Back To Top Button Js Start
    ================================ */

    $windowOn.on("scroll", function () {
      if ($(this).scrollTop() > 20) {
        $("#scroll-to-top").addClass("show");
      } else {
        $("#scroll-to-top").removeClass("show");
      }
    });

    $documentOn.on("click", "#scroll-to-top", function () {
      $("html, body").animate({ scrollTop: 0 }, 800);
      return false;
    });
  }); // End Document Ready Function
})(jQuery); // End jQuery
