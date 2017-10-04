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


    
    /*
     * CSS Hack for modal 
     * ------------------- */

     
  
  
  
    updateZoom = function(index, element) {
      var $header = $(element),
          distanceFromTopOfViewport = Math.min(100, Math.abs( ($header.offset().top - 100) - $(document).scrollTop()));
          console.log( 'header: ',  Math.abs($header.offset().top - $(document).scrollTop()), 'dist from vp:', distanceFromTopOfViewport)
          console.log('header offset: ', $header.offset().top)
      
      $header.css({
          zoom: 2.5 - distanceFromTopOfViewport / 300
      });
    };
  
    $(document).ready(function () {
        $(".js-zoom").each(updateZoom);
    });
        
    $(document).scroll(function () {
        $(".js-zoom").each(updateZoom);
    });
  
  
    // /* Quote Zoom Effects
    //  * --------------------- */
    // (function () {
  
    //   zoomEffect('.js-zoom-1', 700, 1380, 15);
    //   zoomEffect('.js-zoom-2', 2800, 3550, 20);
    //   zoomEffect('.js-zoom-3', 4100, 4700, 30);
  
    //   function zoomEffect(element, docMin, docMax, screenDivide) {
  
    //     var previousScroll = 0;
    //     var zoomFont = $(element);
    //     var docWidth = $(document).width();
  
    //     $(window).scroll(function () {
  
    //       var currentScroll = $(this).scrollTop();
    //       var multiplier;
  
    //       console.log('scroll: ', currentScroll);
  
    //       if (currentScroll > docMin && currentScroll < docMax) {
  
    //         zoomFont.css('font-size', '40px');
    //         multiplier = (currentScroll / screenDivide);
  
    //         function checkFontSize() {
  
    //           function correctHeadingSize(multiplerSize, fontSize) {
    //             if (multiplier < multiplerSize) {
    //               zoomFont.css({
    //                 'font-size': (multiplier) + 'px'
    //               });
    //             } else {
    //               zoomFont.css({
    //                 'font-size': fontSize
    //               });
    //             }
    //           } // end correctHeadingSize()
  
    //           if (docWidth > 1300) {
    //             correctHeadingSize(120, '80px');
    //           } else if (docWidth > 1100) {
    //             correctHeadingSize(100, '80px');
    //           }
  
    //         } // end checkFontSize() 
  
    //         if (currentScroll > previousScroll) {
    //           // going down
    //           checkFontSize();
    //         } else {
    //           // going up
    //           checkFontSize();
    //         }
  
    //         previousScroll = currentScroll;
    //       }
  
    //     });
    //   } // end zoomEffect() 
    // }()); // end zoom scroll
  
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

      if ( $(window).width() > 1000 && $scroll ) {
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
     * Scroll Fix 
     * ----------- */
  
    $(document).ready(function() {
      console.log( $(window).width() )
      $('a[href^="#"]').click(function() {
          var target = $(this.hash);
          if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
          if (target.length == 0) target = $('html');
          
          if ( $(window).width() > 1900) {
            
            $('html, body').animate({ scrollTop: target.offset().top - 340 }, 1000);
          } else {
            $('html, body').animate({ scrollTop: target.offset().top - 100 }, 1000);
          }
         
          return false;
      });
    });
  
  
  })(jQuery);