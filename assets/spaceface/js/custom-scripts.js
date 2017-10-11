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
      var modal         = $('#modal' + person);
      var btn           = $(".js-show" + person);
      var nav           = $('.navbar-fixed-top');
      var close         = $('.close-modal');
      var footer        = $('#footer1-9');
      var linkText      = $('.modal-link__text');
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

    updateZoom = function(index, element) {
      var $header = $(element),
          distanceFromTopOfViewport = Math.min(100, Math.abs( ($header.offset().top - 100) - $(document).scrollTop()));
          // console.log( 'header: ',  Math.abs($header.offset().top - $(document).scrollTop()), 'dist from vp:', distanceFromTopOfViewport)
          // console.log('header offset: ', $header.offset().top)
      
          if ( $(window).width() > 765 ) {
            if (navigator.userAgent.indexOf("Firefox") > 0) {
              $header.css({
                transform: 'scale(' + (2 - distanceFromTopOfViewport / 300) + ')'
              });
            } else {
              $header.css({
                zoom: 2.5 - distanceFromTopOfViewport / 300
              });
            }
          } else {
            $header.css({ zoom: 1 });
          }
      
    };
  
    $(document).ready(function () {
        $(".js-zoom").each(updateZoom);
    });
        
    $(document).scroll(function () {
        $(".js-zoom").each(updateZoom);
    });


    /* 
      * Header Zoom Effect 
      * ------------------- */

    /* Scrolling */
    $(window).scroll(function () {
      var $maxScroll = 200; 
      var $maxScale  = 2;
      var $scroll    = $(window).scrollTop();
      var $x         = $scroll / 250 + 1;

      if ( $scroll > $maxScroll) $x = $maxScale;

      if ( $(window).width() > 1200 && $scroll ) {
        $('.hero-image').css({
          transform: 'scale(' + ( $x ) + ')'
        });
      } else {
        $('.hero-image').css({
          transform: 'scale(1)'
        });
      }

    });
  
      
    /*
    * Srcoll Fix 
    * ----------- */

    $(document).ready(function() {
      $('a[href^="#"]').click(function() {
          var target = $(this.hash);
          if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
          if (target.length == 0) target = $('html');
          $('html, body').animate({ scrollTop: target.offset().top - 200 }, 1000);
          return false;
      });
    });
  
  
  })(jQuery);