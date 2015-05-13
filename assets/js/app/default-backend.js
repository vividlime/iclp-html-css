 var module = {
  init: function () {
    this.slideMenuNavigation();
    this.scrollToTop();
    this.accordianContactForm();
    this.parallax();
    this.loadContent();
    this.whatwedoVideo();
  },

 
  loadContent: function (){
      
      function headerHiddenPannel (){
 
        $('.cta a').on('click', function(e){
          e.preventDefault();
            if ($(this).hasClass('Contact-form')) {

               
                if ($(this).hasClass('selected')) {
                  $('.Contact-div').removeClass('open');
                  $(this).removeClass('selected');
                }
                // if not already selected
                else {
                  // remove selected and open classes from all others
                  $('.cta a').removeClass('selected');
                  $('.section').removeClass('open');
                  // apply selected and open classes to this
                  $('.Contact-div').addClass('open');
                  $(this).addClass('selected');
                }

                $('.header-close').bind('click', function(e) {
                  e.preventDefault();
                  $('.Contact-div').removeClass('open');
                    
                  $('body').find('a.Contact-form.selected').removeClass('selected');
                });
            } 

            else if ($(this).hasClass('Search')) {
 
                if ($(this).hasClass('selected')) {
                  $('.Search-div').removeClass('open');
                  $(this).removeClass('selected');
                }
                else {
                  $('.cta a').removeClass('selected');
                  $('.section').removeClass('open');
                  $('.Search-div').addClass('open');
                  $(this).addClass('selected');
                }
                $('.header-close').bind('click', function(e) {
                  e.preventDefault();
                  $('.Search-div').removeClass('open');
                    
                  $('body').find('a.Search.selected').removeClass('selected');
                });
            }
        });  
      }
      headerHiddenPannel();
      if ($(window).width() <= 320) {
         $('a.Contact-form').click(function (){
            $('html,body').animate({scrollTop: $('#contact-form').offset().top }, 800);
          return false;
        });

      } 
  },

  scrollToTop: function (){

    var body = $("body,html");
    var scrollToTop = $("a.scrolltotop");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
         scrollToTop.fadeIn();
        } else {
         scrollToTop.fadeOut();
        }
      });
      
    // scroll body to 0px on click
    scrollToTop.click(function () {
      body.animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  },

  whatwedoVideo: function (){

    if ($('#whatwedo').is(':visible')) {
  
      $('.video-content').on('click', function(){

      $('html,body').animate({scrollTop: $(this).offset().top -63 }, 800);
      
      $('video').get(0).play();

  

        $(this).parent().toggleClass('active');
             
 

      });
      $('video').bind("ended", function() {
         $('.active').removeClass('active');
         this.currentTime = 0;
      });
 
    }
  },

  accordianContactForm: function (){

    var allPanels = $('form.form');
    var content = $(this).find('.form');
    var buttonH2 = $(this).find('.close-form');
    var buttonIcon = $(this).find('h2.contact');

    
    $('.close-form').on('click', function () {
        allPanels.slideUp();
        $(this).toggleClass('on');
        return false;
    });
    
    if ($('#home').is(':visible')) {
      $('h2.contact').removeClass('contact').addClass('contacthome');
    };

    if ($('#contact-us').is(':visible')) {
      $('h2.contact').removeClass('contact').addClass('contacthome');
    };
  
    $('h2.contact').on('click', function (){
      $('html,body').animate({scrollTop: $(this).offset().top -138 }, 800);
      allPanels.slideToggle();
      $('.close-form').toggleClass('on');
      $('.contact-container').toggleClass('toggled');
    });

      $('#home #form').css({
        display: 'block'
      });

       $('#contact-us #form').css({
        display: 'block'
      });
  },

  parallax: function (){
    $(window).bind('scroll', function (e) {
      parallaxScroll();
    });

    function parallaxScroll() {
      var scrolled = $(window).scrollTop();
        $('.theme > img').css('top', (0 - (scrolled * .2)) + 'px');
      }
  },

  slideMenuNavigation: function() {
  
    var $window = $(window);
    var $pane = $('#menu');

    function checkHeight() {
      var height = parseInt($("#menu").height());
        var windowsize = $window.height();
    
          $("#menu").height($(".navigation").height());
          
    }
    checkHeight();
    $(window).resize(checkHeight);
 
    $('#sidebar-toggle').on('click', function() {

      $(this).toggleClass('active');
      var toggle_el = $(this).data('toggle');
      $(toggle_el).toggleClass('open-sidebar');
      $('body').toggleClass('open-sidebar');


      if ($('.open-sidebar').is(':visible')) {
        $('.close-menu').bind('click', function () {
          $('body').removeClass('open-sidebar');
        });
      }
    });
  }

};

$(document).ready(function () {
  module.init();
}); 