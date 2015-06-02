 var main = {
  init: function () {
    this.carousels();
    this.twitter();
    this.playVideos();
    this.setupLazyIsotope();
    this.resourceFilter();
  },

  twitter: function (){

    function twitterfix() {
      if(typeof $("#twitter-widget-0").contents().find(".load-more").html() == 'undefined') {
          setTimeout(twitterfix, 500);
          }
      else {
          var head = $("#twitter-widget-0").contents().find("head");
          var images = $("#twitter-widget-0").contents().find("li.h-entry.tweet");
          images.append('<a href="https://twitter.com/ICLP_Loyalty" target="_blank"><img src="../assets/images/twitter.png" alt="twitter" class="twitter-logo"></a>');
          head.append('<style>.follow-button{color:#000!important;}.timeline-header{background:#fff; border-radius:0px;}.timeline-header h1 a{color:#000!important;}.ic-mask{display:none;}ol.h-feed{max-width: 1170px;display:table;margin:auto;padding:60px 0 0 0}li.h-entry.tweet .e-entry-title{font-size:17px!important;line-height:1.5em!important;}li.h-entry.tweet{display:table-cell;font-size:17px!important;line-height:1.5em!important; position:relative;width:40%; padding:30px 5% 10px 5%;margin:0!important;color:#616365;}@media (max-width: 800px){li.h-entry.tweet{display:none;}li.h-entry.tweet:first-child{display:block;width: 80%; padding: 30px 0% 10px 0%; /* margin: 0!important; */ color: #616365; text-align: center; margin: auto!important;}}li.h-entry.tweet .header{display:none;}.retweet-credit{display:block;text-align:center;margin:auto;}li.h-entry.tweet:hover{color:#45a9c6;}.tweet .e-entry-title{text-align:center;display:block;}p.e-entry-title{ margin:0!important;}.u-photo{display:none!important;}li.h-entry.tweet img.twitter-logo{position:absolute;top:-13px;left: 46%;}.p-name{display:none;}span.p-nickname,.u-url,.expand{display:none;}</style>');
          }
    }
    twitterfix();

  },


  playVideos: function (){


     (function($) {
        $.fn.videoLoop = function (options) {

       function changeVideoSrc(vidObj,vidEl){
           vidEl.html("");
           vidObj.media.forEach(function(obj){
               vidEl.append($("<source>").attr("src",obj.src).attr("type",obj.format));
           });
       }

        var video = this,
        videoEl = video[0],
        selVideoIdx = 0;

        options = options || {};

        var playlist = options.playlist || [],
        poster = options.poster || "http://placehold.it/1024x768/FFFFFF/FFFFFF";

      if (playlist.length > 1) {
        var firstvid = playlist[selVideoIdx % playlist.length];
        changeVideoSrc(firstvid,video);
        video.attr('poster', poster);
        video.attr('autoload', true);
        video.attr('autoplay', true);
        video.attr('preload', false);
        selVideoIdx++;

        video.on('loadedmetadata', function (){
            videoEl.currentTime = 0.5;
            videoEl.play();
        }).bind('ended', function () {
            var currentvid = playlist[selVideoIdx % playlist.length];
            changeVideoSrc(currentvid,video);
            videoEl.loop = true;
            videoEl.load();
            selVideoIdx++;
          });
        }
      };

      var video1 = {};
      video1.title = 'start';
      video1.media = [{'format':'video/webm','src':'../assets/video-start/HOMEPAGE_Walk_In_v01_(Converted).webm'},{'format':'video/mp4','src':'../assets/video-start/HOMEPAGE_Walk_In_v01_(Converted).mp4'},{'format':'video/ogv','src':'../assets/video-start/HOMEPAGE_Walk_In_v01_(Converted).ogv'}];

      var video2 = {};
      video2.title = 'loop';
      video2.media = [{'format':'video/webm','src':'../assets/video-loop/HOMEPAGE_Loop_v01_(Converted).webm'},{'format':'video/mp4','src':'../assets/video-loop/HOMEPAGE_Loop_v01_(Converted).mp4'},{'format':'video/ogv','src':'../assets/video-loop/HOMEPAGE_Loop_v01_(Converted).ogv'}];

      var data = {};
      data.playlist = [video1,video2];
      data.poster = "../assets/video-loop/Screen-Shot.jpg"

      $('#start').videoLoop(data);
    }(jQuery));
  },


  carousels: function (){

    $(function(){
      $('#myCarousel').carousel({
        interval: false
      });

      $("#myCarousel").swiperight(function() {
        $(this).carousel('prev');
      });
      $("#myCarousel").swipeleft(function() {
        $(this).carousel('next');
      });

      $('#heroCarousel').carousel({
        interval: false
      });
      $("#heroCarousel").swiperight(function() {
        $(this).carousel('prev');
      });
      $("#heroCarousel").swipeleft(function() {
        $(this).carousel('next');
      });

      /* SLIDE ON CLICK */

      $('.carousel-linked-nav > li > a').on('click', function() {

        $('.banner-inner').addClass('hide');

          var item = Number($(this).attr('href').substring(1));
          $('#heroCarousel').carousel(item - 1);

          // remove current active class
          $('.carousel-linked-nav .active').removeClass('active');

          // add active class to just clicked on item
          $(this).parent().addClass('active');

          $('.ie9 #heroCarousel').addClass('show');


          $('#heroCarousel .item').one('transitionend.loadcontent.open webkitTransitionEnd.loadcontent.open MSTransitionEnd.open', function () {
              $('#heroCarousel').addClass('show');
          });

          return false;
      });

      //first item on the carousel needs this click
        $('.carousel-linked-nav > .first > a').on('click', function() {

            if($('.carousel-inner .item:first').hasClass('active')) {
              $('#heroCarousel').addClass('show');
            }
            else{
              $('#heroCarousel .item').one('transitionend.loadcontent.open webkitTransitionEnd.loadcontent.open MSTransitionEnd.open', function () {
                $('#heroCarousel').addClass('show');
              });
            }

        });



      $('.close-carousel').on('click', function(){
        $('#heroCarousel').removeClass('show');
        $('.banner-inner.hide').removeClass('hide');
      });

      $('#heroCarousel').bind('slid', function() {

          // remove active class
          $('.carousel-linked-nav .active').removeClass('active');

          // get index of currently active item
          var idx = $('#heroCarousel .item.active').index();

          // select currently active item and add active class
          $('.carousel-linked-nav li:eq(' + idx + ')').addClass('active');
      });

    });
  },


  resourceFilter: function() {
    var $filterToggle,
        $filterTabs,
        $tagListHandle,
        $allTagLists,
        $selectedTags;

    $filterToggle = $('.js-toggle-filter-state');
    $filterTabs = $('#filter-tabs');
    $allTagLists = $('#filter-tag-pane');
    $selectedTags = $('#selected-filter-tags');


    // Setup Filter Toggle
    $filterToggle.on('click', function(){
        $filterTabs.toggleClass('hidden');
        $allTagLists.toggleClass('hidden');
    })

    // Setup Selectable Filter Tags
    $tagListHandle = $('#filter-tag-pane .js-selectable').selectable({
        class: 'selected',
        onSelected: function(el) {


        },
        onChange: function(data) {
          var tagID,
              tagName,
              selectedTagIDs = [];

          $selectedTags.find('li').remove();

          $(data.selected).each(function(){
            tagID = $(this).attr('data-tag-id');
            tagName = $(this).find('.tag-name').text();

            selectedTagIDs.push(tagID);

            $selectedTags.append('<li class="label" data-tag-id="' + tagID + '"><span class="tag-name">' + tagName + '</span></li>');
          });

          data.selected = selectedTagIDs;


          // Update the hidden input field with selected tag ids
          $('#selected-filter-tag-ids').val(selectedTagIDs.toString());

          // Call the Ajax function to load filtered content

          // loadFilteredContent();


          // Append the selected ID's to the UL after the hash
          // if (data.selected.length) {
          //   document.location.hash = '?' + $.param({filterid: selectedTagIDs.toString()});
          // }
          // else {
          //   document.location.hash = '';
          // }


        }
      });


    // Setup Selected Tags
    $($selectedTags).on('click', 'li', function(){
      var selectedTag = this;
      var selectedTagID;

      selectedTagID = $(selectedTag).attr('data-tag-id');
      $allTagLists.find('li[data-tag-id="' + selectedTagID + '"]').removeClass('selected');

      $tagListHandle.onChange();
    });
  },


  setupLazyIsotope: function(){

    var $container = $('.isotope-grid').isotope({
          itemSelector: '.isotope-item',
          percentPosition: true,
          layoutMode: 'masonry',
          masonry: {
              columnWidth: '.grid-sizer',
              gutter: '.gutter-sizer'
          }
      });


    var bLazy = new Blazy({
        success: function(ele){
          $container.isotope('layout');
        },

        breakpoints: [
            {
                width: 480 // max-width
                , src: 'data-src-small'
            },
            {
                  width: 1024 // max-width
                , src: 'data-src-medium'
            }
        ],
        offset: 200,

    });
  }
};



$(document).ready(function () {
  main.init();
});
