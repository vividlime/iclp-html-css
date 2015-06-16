
// Added by Jayson Hunter - June 2015. Yes they're on the global scope which is bad I know.
var $isotopeContainer,
    $blazy,
    $viewMoreButton,
    pageID = 1,
    initialLoad = true;

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
        this.playnewvideos();
        this.setupLazyLoad();
        this.setupIsotope();
        this.setupContentFilters();
        this.populateAjaxData(true);
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

        if (video) {
            video.play();

            video.addEventListener('ended',function(){
                //window.location = 'http://www.google.com';
              var video1 = document.getElementById('video1');
              var video2 = document.getElementById('video2');

              video1.style.display='none';

              video2.style.visibility='visible';
              video2.play();

            });
        }

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

        $('.banner-inner').addClass('hide-banner');

          var item = Number($(this).attr('href').substring(1));
          $('#heroCarousel').carousel(item - 1);

          // remove current active class
          $('.carousel-linked-nav .active').removeClass('active');

          // add active class to just clicked on item
          $(this).parent().addClass('active');

          $('.ie9 #heroCarousel').addClass('show-carousel');


          $('#heroCarousel .item').one('transitionend.loadcontent.open webkitTransitionEnd.loadcontent.open MSTransitionEnd.open', function () {
              $('#heroCarousel').addClass('show-carousel');
          });

          return false;
      });

      //first item on the carousel needs this click
        $('.carousel-linked-nav > .first > a').on('click', function() {

            if($('.carousel-inner .item:first').hasClass('active')) {
              $('#heroCarousel').addClass('show-carousel');
            }
            else{
              $('#heroCarousel .item').one('transitionend.loadcontent.open webkitTransitionEnd.loadcontent.open MSTransitionEnd.open', function () {
                $('#heroCarousel').addClass('show-carousel');
              });
            }

        });



      $('.close-carousel').on('click', function(){
        $('#heroCarousel').removeClass('show-carousel');
        $('.banner-inner').removeClass('hide-banner');
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




    // Nav Tabs (Bootstrap) Content Filter - Originally added for the Resources page.
    // Added by Jayson Hunter May 2015
    setupContentFilters: function(){
        var $contentFilter,
            $filterTabs,
            $tagListHandle,
            $allTagLists,
            $selectedTags,
            selectedTagIDs;


        // Look for a content filter
        $contentFilter = $('.content-filter');

        // If a content filter is found
        if($contentFilter.length) {

          $filterTabs = $('#filter-tabs');
          $allTagLists = $('#filter-tag-pane');
          $selectedTags = $('#selected-filter-tags');


          // Get the filter id's from the url if there are any
          selectedTagIDs = $.urlParam('filterid');

          // If any filter id's found
          if (selectedTagIDs) {
            selectedTagIDs = decodeURIComponent(selectedTagIDs).split(",");

              // Select the relevant tags in the filter bar
              for (i=0; i < selectedTagIDs.length; i++) {
                  var tagID = selectedTagIDs[i];
                  $allTagLists.find('li[data-tag-id="' + tagID + '"]').addClass('selected');
              };
          };


          // Setup the filter tags so they're selectable (uses selectable.js)
          $tagListHandle = $('#filter-tag-pane .js-selectable').selectable({
              class: 'selected',
              onSelected: function(el) {

              },

              // When a tab tag has been clicked (selected/deselected)
              // THIS EVENT IS CALLED AT LEAST ONCE WHEN THE PAGE LOADS
              onChange: function(data) {
                  var tagID,
                      tagName,
                      urlParams = {};

                  selectedTagIDs = [];


                  // Remove all the items from the "Selected Tags" list
                  $selectedTags.find('li').remove();

                  // Now go through all the selected filter tags
                  $(data.selected).each(function(){
                      tagID = $(this).attr('data-tag-id');
                      tagName = $(this).find('.tag-name').text();

                      selectedTagIDs.push(tagID);

                      // Build up the "Selected Tags" list
                      $selectedTags.append('<li class="label" data-tag-id="' + tagID + '"><span class="tag-name">' + tagName + '</span></li>');
                  });

                  // This data object belongs to the selectable.js object, $tagListHandle.
                  data.selected = selectedTagIDs;

                  $('#selected-filter-tag-ids').val(selectedTagIDs.toString());


                  urlParams.page = 1;

                  // Update page URL hash
                  if (selectedTagIDs.length) {
                    urlParams.filterid = selectedTagIDs.toString();
                  };

                  main.updateLocationHash($.param(urlParams));


                  // Don't load ajax data on first load as it's done in the Init script up top
                  if (initialLoad) {
                    initialLoad = false;
                  }
                  else{
                    main.populateAjaxData(true);
                  };
              }
          });


          // Bind some functionality to the "Selected Tags" list items when they're clicked
          $($selectedTags).on('click', 'li', function(){
              var selectedTag = this;
              var selectedTagID;

              // Get the data-tag-id attribute from the clicked item
              selectedTagID = $(selectedTag).attr('data-tag-id');

              // Locate the "Tab Tag" with the same attribute, and remove the selected class
              $allTagLists.find('li[data-tag-id="' + selectedTagID + '"]').removeClass('selected');

              // Call the onChange event (above) of these selectable items to update
              // the "Selected Tags" and fire the ajax call.
              $tagListHandle.onChange();
          });

        }

    },


    // This locates the ajax url to call
    // Added by Jayson Hunter June 2015
    getAjaxURL: function(){
      var ajaxURL;

      ajaxURL = $('.js-ajax-data-container').attr('data-ajax-url');

      return ajaxURL;
    },


    // Set up a Promise, call the ajax url and return the data
    // Added by Jayson Hunter June 2015
    getAjaxData: function(ajaxURL, params) {
      var dfd = new $.Deferred();

      if(ajaxURL.length) {
        // Show the loading spinner image
        $('.ajax-loader').removeClass('hidden');

        // Now get the data using parameters
        $.get(ajaxURL + '?' + params, function(data){
            // Once done, hide the ajax loader
            $('.ajax-loader').addClass('hidden');
            return dfd.resolve(data);
        }).
        fail(function(){
          $('.ajax-loader').addClass('hidden');
          return dfd.resolve("");
        });
      };

      return dfd.promise();

    },

    // Responsible for getting the data, adding it to the page, updating the url hash
    // and toggling the view more button.
    // Added by Jayson Hunter June 2015
    populateAjaxData: function(removeCurrentItems){
      var ajaxURL,
          filterIDs,
          urlParams = {};

      ajaxURL = main.getAjaxURL();


      // Only process ajax data if there's an ajax url
      if(ajaxURL && ajaxURL.length) {

        // Get the page ID and filter tags from the URL hash (if present)
        urlParams.page = $.urlParam('page') || pageID;
        filterIDs = $.urlParam('filterid');

        if (filterIDs != null){
          filterIDs = decodeURIComponent(filterIDs);
          urlParams.filterid = filterIDs;
        };


        $.when(main.getAjaxData(ajaxURL, $.param(urlParams)))
        .then(function(data){

          // Update isotope content with new data items
          main.updateIsotopeContent(data, removeCurrentItems, main.reLayout);

          main.updateLocationHash($.param(urlParams));

          // console.log('Data length is ' + data.trim().length);
          // If no data is returned, then hide the view more button
          if(data.trim().length) {
            // console.log(data);
            main.toggleViewMore();
          }
          else {
            $viewMoreButton.addClass('hidden');
          }

        });
      };
    },


    // Toggle View More button
    // Hide "view more" button if items are from the last page in Umbraco.
    // Items must have class 'js-is-last-page' class to hide the view more button.
    // Added by Jayson Hunter June 2015
    toggleViewMore: function(){

        setTimeout(function(){ // Put a slight timeout as the toggle was firing too quickly
          if ( $('.js-last-page-item').length > 0 ) {
            $viewMoreButton.addClass('hidden');
          }

          // Else show it
          else {
              $viewMoreButton.removeClass('hidden');
          };

        }, 500);

    },


    // Set up the View More button functionality
    // Added by Jayson Hunter June 2015
    setupViewMoreButtons: function(){
        var ajaxURL,
            ajaxData,
            filterIDs,
            urlParams = {};

        $viewMoreButton = $('.js-view-more-btn');

        if($viewMoreButton) {
            // Get the url to use in the ajax call for new data
            ajaxURL = main.getAjaxURL();


            // If an ajax url is present
            if(ajaxURL && ajaxURL.length) {
                $viewMoreButton.on('click', function(){

                    // Hide the view more button
                    $viewMoreButton.addClass('hidden');

                    // Get the page ID from the URL hash
                    pageID = $.urlParam('page') || pageID;

                    // Increment the page ID
                    pageID++;

                    urlParams.page = pageID;


                    // Get the filterid parameter if present
                    filterIDs = $.urlParam('filterid');

                    if (filterIDs != null){
                      filterIDs = decodeURIComponent(filterIDs);
                      urlParams.filterid = filterIDs.toString();
                    };

                    // Update hte url hash and call populate page with ajax data
                    main.updateLocationHash($.param(urlParams));
                    main.populateAjaxData(false);

                });
            };
        };

    },


    // Update the page hash location
    // Added by Jayson Hunter June 2015
    updateLocationHash: function(params) {
      document.location.hash = '?' + params;
    },





    // This accepts the data returned from the ajax call, then either appends
    // the data to the existing isotope container (view more), or replaces
    // it with the new data E.g. Resources Content Filter.
    // Added by Jayson Hunter June 2015

    updateIsotopeContent: function(ajaxData, removeCurrentItems, callback) {
        var $currentItems;

        // Turn the data into DOM elements
        ajaxData = $.parseHTML(ajaxData);

        // Remove existing isotope items?
        if(removeCurrentItems) {
            $currentItems = $isotopeContainer.isotope('getItemElements');
            $isotopeContainer.isotope( 'remove',$currentItems);
        }

        // Append new data to existing Isotope object, then layout these items
        $isotopeContainer
            .append(ajaxData)
            .isotope('appended', ajaxData )
            .isotope('layout');

        // Once all the items have been appended and laid out, make a call to a callback function
        // to finish. Currently it's to lazy load the images for these new isotope items.
        callback();
    },


    // Lazy Load images functionality
    // Added by Jayson Hunter May 2015
    setupLazyLoad: function(){

        $blazy = new Blazy({
            selector: '.b-lazy',
            success: function(ele){
                // When each image loads, layout isotope items
                $isotopeContainer.isotope('layout');
            },

            breakpoints: [
                {
                    width: 480, // max-width
                    src: 'data-src-small'
                },
                {
                    width: 1024, // max-width
                    src: 'data-src-medium'
                }
            ],
             offset: 200, // The number of pixels below the fold to trigger the image load
        });
    },



    // Fire the isotope layout and lazy load again
    // Added by Jayson Hunter June 2015
    reLayout: function(){
      // Add a small timeout as some images weren't loading without it.
      setTimeout(function(){

        // Layout Isotope items
        $isotopeContainer.isotope('layout');

        // Lazy load new images
        $blazy.revalidate

        // Tell Sharethis to activate and show any new ShareThis buttons
        if (window.stButtons){stButtons.locateElements();}

      }, 500);
    },



    // Implement the Isotope layout engine
    // Added by Jayson Hunter May 2015
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
