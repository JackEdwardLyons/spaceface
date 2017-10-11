(function (S) {


  /* Navbar Color Changes 
   * --------------------- */

  // color one
  $('#header4-a, #header4-3, #section-one-btm').waypoint(function () {
    $('#dropdown-menu-0 .navbar').css('background', 'rgb(22, 34, 255)');
  });
  // color two
  $('#header4-4, #header4-5, #section-two-btm').waypoint(function () {
    $('#dropdown-menu-0 .navbar').css('background', 'rgb(34, 214, 43)');
  });
  // color three
  $('#header4-6').waypoint(function () {
    $('#dropdown-menu-0 .navbar').css('background', 'rgb(229, 0, 28)');
  });


  /* Modal Contact Boxes
   * --------------------- */

  addModal('Leo');
  addModal('Tim');
  addModal('Matt');

  function addModal(person) {

    // Get the modal elements 
    var modal = $('#modal' + person);
    var btn = $(".js-show" + person);
    var nav = $('.navbar-fixed-top');
    var close = $('.close-modal');
    var footer = $('#footer1-9');
    var linkText = $('.modal-link__text');
    var hideOnOverlay = $('.js-hide-' + person);

    // When the user clicks on the button, open the modal 
    btn.on("click", function () {
      modal.css("display", "block");
      nav.css('z-index', '0');
      footer.css('z-index', '0');
      $("body").css("overflow", "hidden");
      hideOnOverlay.css('display', 'none');
      linkText.css('display', 'none');
    });

    close.on('click', function () {
      modal.css("display", "none");
      nav.css('z-index', '111');
      $("body").css("overflow", "auto");
      hideOnOverlay.css('display', 'block');
      linkText.css('display', 'block');
    });

    // When the user clicks anywhere outside of the modal, close it
    $(window).on("click", function (event) {
      if (event.target.id == "modal" + person) {
        modal.css("display", "none");
        nav.css('z-index', '111');
        $("body").css("overflow", "auto");
        hideOnOverlay.css('display', 'block');
        linkText.css('display', 'block');
      }
    });
  } // end addModal()


  /* Quote Zoom Effects
   * --------------------- */
  (function () {

    if ( $(window).width() > 1600 ) {
      zoomEffect('.js-zoom-1', 700, 1380, 15);
      zoomEffect('.js-zoom-2', 2900, 4550, 45);
      zoomEffect('.js-zoom-3', 5100, 6700, 70);
    } else {
      zoomEffect('.js-zoom-1', 700, 1380, 15);
      zoomEffect('.js-zoom-2', 1500, 2500, 45);
      zoomEffect('.js-zoom-3', 2600, 3700, 60);
    }
    

    function zoomEffect(element, docMin, docMax, screenDivide) {

      var previousScroll = 0;
      var zoomFont = $(element);
      var docWidth = $(document).width();


      $(window).scroll(function () {

        var currentScroll = $(this).scrollTop();
        var multiplier;

        console.log('scroll: ', currentScroll);

        function checkFontSize() {

          function correctHeadingSize(multiplerSize, fontSize) {
            if (multiplier < multiplerSize) {
              zoomFont.css({
                'font-size': (multiplier) + 'px'
              });
            } else {
              zoomFont.css({
                'font-size': fontSize
              });
            }
          } // end correctHeadingSize()

          if (docWidth > 1300) {
            correctHeadingSize(120, '80px');
          } else if (docWidth > 1100) {
            correctHeadingSize(100, '80px');
          }

        } // end checkFontSize() 

        if (currentScroll > docMin && currentScroll < docMax) {

          zoomFont.css('font-size', '40px');
          multiplier = (currentScroll / screenDivide);

          if (currentScroll > previousScroll) {
            // going down
            checkFontSize();
          } else {
            // going up
            checkFontSize();
          }

          previousScroll = currentScroll;
        }

      });
    } // end zoomEffect() 


    /* 
     * Header Zoom Effect 
     * ------------------- */

    /* Scrolling */
    $(window).scroll(function () {
      var $maxScroll = 200;
      var $maxScale = 2;
      var $scroll = $(window).scrollTop();
      var $x = $scroll / 250 + 1;

      if ($scroll > $maxScroll) $x = $maxScale;

      if ($(window).width() > 1000 && $scroll) {
        $('.hero-image').css({
          transform: 'scale(' + ($x) + ')'
        });
      } else {
        $('.hero-image').css({
          transform: 'scale(1)'
        });
      }

    });

  }()); // end zoom scroll



  /*
   * Srcoll Fix 
   * ----------- */

  $(document).ready(function () {
    $('a[href^="#"]').click(function () {
      var target = $(this.hash);
      if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
      if (target.length == 0) target = $('html');
      $('html, body').animate({
        scrollTop: target.offset().top - 100
      }, 1000);
      return false;
    });
  });


})(jQuery);