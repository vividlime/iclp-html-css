
// Added by Jayson Hunter - June 2015. Yes they're on the global scope which is bad I know.
var $isotopeContainer,
    $blazy,
    $viewMoreButton;

    // Function to get parameters from the url
    $.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);

        if (results==null){
            return null;
        }
        else{
            return results[1] || 0;
        }
  };


// Module pattern
var main = {

    init: function () {
        this.carousels();
        this.twitter();
        this.playvideos();
        // this.playnewvideos();
        this.setupLazyLoad();
        this.setupIsotope();
        this.setupContentFilters();
        this.setupViewMoreButtons();
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


    // Copied from Umbraco Live Code
    playnewvideos: function (){

        var video = document.getElementById('video1');
        video.play();

        video.addEventListener('ended',function(){
          //window.location = 'http://www.google.com';
        var video1 = document.getElementById('video1');
        var video2 = document.getElementById('video2');

        video1.style.display='none';

        video2.style.visibility='visible';
        video2.play();

        });
    },



    // Copied from Umbraco Live Code
    playvideos: function (){

     (function($) {
        $.fn.videoLoop = function (options) {

       function changeVideoSrc(vidObj,vidEl){
           vidEl.html("");
           vidObj.media.forEach(function(obj){
               //console.log(obj);
               vidEl.append($("<source>").attr("src",obj.src).attr("type",obj.format));
           });
       }

        var video = this,
        videoEl = video[0],
        selVideoIdx = 0;

        options = options || {};

        var playlist = options.playlist || [],
        poster = options.poster || "http://placehold.it/1440x900/45a9c6/45a9c6";

      if (playlist.length > 1) {
        var firstvid = playlist[selVideoIdx % playlist.length];
        changeVideoSrc(firstvid,video);
        video.attr('poster', poster);
        video.attr('autoload', true);
        video.attr('autoplay', true);
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
      video1.media = [{'format':'video/webm','src':'http://iclp-2015.vividlimecreative.com/assets/video-start/HOMEPAGE_Walk_In_v01_(Converted).webm'},{'format':'video/mp4','src':'http://iclp-2015.vividlimecreative.com/assets/video-start/HOMEPAGE_Walk_In_v01_(Converted).mp4'},{'format':'video/ogv','src':'http://iclp-2015.vividlimecreative.com/assets/video-start/HOMEPAGE_Walk_In_v01_(Converted).ogv'}];

      var video2 = {};
      video2.title = 'loop';
      video2.media = [{'format':'video/webm','src':'http://iclp-2015.vividlimecreative.com/assets/video-loop/HOMEPAGE_Loop_v01_(Converted).webm'},{'format':'video/mp4','src':'http://iclp-2015.vividlimecreative.com/assets/video-loop/HOMEPAGE_Loop_v01_(Converted).mp4'},{'format':'video/ogv','src':'http://iclp-2015.vividlimecreative.com/assets/video-loop/HOMEPAGE_Loop_v01_(Converted).ogv'}];

      var data = {};
      data.playlist = [video1,video2];
      data.poster = "http://iclp-2015.vividlimecreative.com/assets/video-loop/Screen-Shot.jpg"

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




  // Nav Tabs Content Filter - Added by Jayson Hunter May 2015
  setupContentFilters: function(){
    var ajaxURL,
        $filterToggle,
        $filterTabs,
        $tagListHandle,
        $allTagLists,
        $selectedTags,
        selectedTagIDs,
        urlHashTagIDs = [];


    ajaxURL = $('.content-items').attr('data-ajaxurl');

    $filterToggle = $('.js-toggle-filter-state');
    $filterTabs = $('#filter-tabs');
    $allTagLists = $('#filter-tag-pane');
    $selectedTags = $('#selected-filter-tags');



    // Setup Filter Toggle Button (mobile only)
    $filterToggle.on('click', function(){
      $filterTabs.toggleClass('hidden');
      $allTagLists.toggleClass('hidden');
    });


    // Get the url filter variable and any tag id's
    urlHashTagIDs = decodeURIComponent($.urlParam('filterid')).split(",");

    // Go through the IDs in the url and select the respective tags
    if(urlHashTagIDs.length) {
        for (i=0; i < urlHashTagIDs.length; i++) {
          var tagID = urlHashTagIDs[i];
          $allTagLists.find('li[data-tag-id="' + tagID + '"]').addClass('selected');
        };
    };


    // Setup Selectable Filter Tags (uses selectable.js)
    $tagListHandle = $('#filter-tag-pane .js-selectable').selectable({
        class: 'selected',
        onSelected: function(el) {

        },

        // When a tab tag has been clicked
        onChange: function(data) {
            var tagID,
                tagName;

            selectedTagIDs = [];

            // Remove all the items from the "Selected Tags" list
            $selectedTags.find('li').remove();

            // Now go through all the selected tab tags
            $(data.selected).each(function(){
                tagID = $(this).attr('data-tag-id');
                tagName = $(this).find('.tag-name').text();

                selectedTagIDs.push(tagID);


                // Build up the Selected Tags list again
                $selectedTags.append('<li class="label" data-tag-id="' + tagID + '"><span class="tag-name">' + tagName + '</span></li>');
            });

            // This data object belongs to the selectable.js object, $tagListHandle.
            data.selected = selectedTagIDs;

            $('#selected-filter-tag-ids').val(selectedTagIDs.toString());

            // Update page URL hash
            if (selectedTagIDs.length) {
                document.location.hash = '?' + $.param({filterid: selectedTagIDs.toString()});
            }
            else {
                document.location.hash = '';

                // if(flagStatus.length) {

                // }
                // else {
                //     location.reload();
                // }
            };


            // Filter the content with the selected tags
            $.get(ajaxURL + '?page='+ '' +'&'+ selectedTagIDs.toString(), function(data){
                main.updateAjaxContent(data, true, main.revalidateBlazy);
            });
        }
    });


    // Bind the "Selected Tags" click event

    $($selectedTags).on('click', 'li', function(){
    var selectedTag = this;
    var selectedTagID;

    // Get the data-tag-id attribute from the clicked item
    selectedTagID = $(selectedTag).attr('data-tag-id');

    // Locate the "Tab Tag" with the same attribute, and remove the selected class
    $allTagLists.find('li[data-tag-id="' + selectedTagID + '"]').removeClass('selected');

    // Call the onChange event
    $tagListHandle.onChange();

    });

  },


  // View More button - Added by Jayson Hunter June 2015
  setupViewMoreButtons: function(){

      var ajaxURL,
          ajaxData;


      $viewMoreButton = $('.js-view-more-btn');

      main.toggleViewMore();


      // Get the url to use in the ajax call for new data
      ajaxURL = $('.content-items').attr('data-ajaxurl');


      if(ajaxURL.length) {
        $viewMoreButton.on('click', function(){

          $viewMoreButton.addClass('hidden');
          $('.ajax-loader').removeClass('hidden');

          setTimeout(function(){

          var viewMoreItems = $.get(ajaxURL, function(data){

            $('.ajax-loader').addClass('hidden');

            // Update content with new data items
            main.updateAjaxContent(data, false, main.revalidateBlazy);

          });

          }, 1000);


        });

      };

  },



  // Toggle View More button - Added by Jayson Hunter June 2015
  toggleViewMore: function(){

    // Hide "view more" button if items are from the last page in Umbraco
    if ( $('.js-last-page-item').length > 0 ) {
      $viewMoreButton.addClass('hidden');
    }

    // Else show it
    else {
      $viewMoreButton.removeClass('hidden');
    };
  },



  joesCode: function(){
    // ========================
        // Start Joes Code

        // Update the hidden input field with selected tag ids
        $('#selected-filter-tag-ids').val(selectedTagIDs.toString());

        var selectedTag = selectedTagIDs.toString();
        $('#selectedCountry').val(selectedTagIDs.toString());

        // Append the selected ID's to the UL after the hash
        var flagStatus = document.getElementById('flagStatus').value;

        if (selectedTag.length) {
            document.location.hash = '?' + $.param({filterid: selectedTagIDs.toString()});

            $(".content-items").html('');
            //$('.articles-footer').html('');
            document.getElementById('flagStatus').value = '';
            var selectedTagAdded = document.getElementById('selectedCountry').value;

            $("div.pageNavigation").replaceWith("<a class='button rodeo-dust-lighter text-bold w-full js-view-more-btn'>VIEW MORE</a>");
         // We show the loading image while we're getting our data.
            $("a.js-view-more-btn").replaceWith("<img class='loading' src='/media/imgs/loader.gif' alt='loading...' />");

            loadCountRecallAjax = 2;
            var selectedTag = document.getElementById('selectedCountry').value;


            // Get filtered data set
            $.get('RecallAjaxGetAllResources?page='+ '' +'&'+ selectedTag, function (data) {

              // Convert returned data into Object
              data = $.parseHTML(data);

              // When everything is loaded we don't need this image anymore
              $("img.loading").remove();

              // Delete all existing Isotope items
              $currentItems = $isotopeContainer.isotope('getItemElements');
              $isotopeContainer.isotope( 'remove',$currentItems);

              // Append new data to existing Isotope object
              $isotopeContainer.append(data).isotope('appended', data );

              // Layout items
              $isotopeContainerisotope( 'layout');

              // Lazy load all new images, which in turn calls Isotope layout
              $blazy.revalidate();

                $isotopeContainer
                    // .html(data) // We insert the data we requested in to the div
                    // .hide() // We make it visible again in the slideDown
                    // .appendTo($('ul.content-items')) // Yes we do
                    .slideDown(250, function () { // two and a half second slide down
                      //loadCountRecallAjax++;
                      initRecallAjax();
                    });
            });

        }
        else {
            document.location.hash = '';
            //$(".resource-download-items").html('');

            if(flagStatus.length) {

            }
            else {
                location.reload();
            }
        }

        // Call the Ajax function to load filtered content

        // loadFilteredContent();


        // Append the selected ID's to the UL after the hash
        // if (data.selected.length) {
        //   document.location.hash = '?' + $.param({filterid: selectedTagIDs.toString()});
        // }
        // else {
        //   document.location.hash = '';
        // }

        // End Joes code
        // ========================
      },



  // Added by Jayson Hunter June 2015 for the Resources page
  updateAjaxContent: function(ajaxData, removeCurrentItems, callback) {
      var $currentItems;

      ajaxData = $.parseHTML(ajaxData);

      if(removeCurrentItems) {
        // Delete all existing Isotope items
        $currentItems = $isotopeContainer.isotope('getItemElements');
        $isotopeContainer.isotope( 'remove',$currentItems);
      }

      // Append new data to existing Isotope object
      $isotopeContainer
        .append(ajaxData)
        .isotope('appended', ajaxData )
        .isotope('layout');

      main.toggleViewMore();

      callback();
  },




  // Lazy Load images functionality - Added by Jayson Hunter May 2015 for the Resources page
    setupLazyLoad: function(){

        $blazy = new Blazy({
            success: function(ele){
                // When each image loads, layout isotope items
                $isotopeContainer.isotope('layout');
                console.log('LAyout from blazy');
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
             offset: 200, // The number of pixels below the fold to trigger the image load
        });
    },



    // Fire the lazy load again - Added by Jayson Hunter June 2015 for the Resources page
    revalidateBlazy: function(){
      // Add a small timeout as some images weren't loading without it.
      setTimeout(function(){
        $blazy.revalidate();
      }, 500);
    },



    // Implement the Isotope layout engine - Added by Jayson Hunter May 2015 for the Resources page
    setupIsotope: function(){

        $isotopeContainer = $('.isotope-grid').isotope({
            itemSelector: '.isotope-item',
            percentPosition: true,
            layoutMode: 'masonry',
            masonry: {
              columnWidth: '.grid-sizer',
              gutter: '.gutter-sizer'
            }
        });
    }

};


// Initialise all functionality when document loads
$(document).ready(function () {
    main.init();
});
