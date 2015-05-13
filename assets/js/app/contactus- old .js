 var contactmodule = {
  init: function () {
    this.googleMaps();
    this.chooseCountry();
  },


  chooseCountry: function (){


   
 

    
  },



 
  
  googleMaps: function (){
 
    var getBeijing = new google.maps.LatLng('39.919743','116.456623');
    var getCapeTown = new google.maps.LatLng('-33.892995','18.512124');
    var getDallas = new google.maps.LatLng('33.067431','-96.806803');
    var getDubai = new google.maps.LatLng('25.100659','55.169606');
    var getHongKong = new google.maps.LatLng('22.285818','114.217346');
    var getKualaLumpur = new google.maps.LatLng('3.159724','101.711673');
    var getLondon = new google.maps.LatLng('51.515502','-0.078345');
    var getMumbai = new google.maps.LatLng('19.10478','72.871089');
    var getNewYork = new google.maps.LatLng('40.757193','-73.971294');
    var getSanFrancisco = new google.maps.LatLng('37.788147','-122.405115');
    var getSanPaulo = new google.maps.LatLng('-23.585670','-46.678950');
    var getShanghai = new google.maps.LatLng('31.251983','121.484349');
    var getSingapore = new google.maps.LatLng('1.298829','103.859414');
    var getStPetersburg = new google.maps.LatLng('59.9385128','30.358572');
    var getSydney = new google.maps.LatLng('-33.826442','151.202468');
    var getTokyo = new google.maps.LatLng('35.668654','139.73917');

    var scrollToBeijing = $('#Beijing');
    var scrollToCapeTown = $('#CapeTown');
    var scrollToDallas = $('#Dallas');
    var scrollToDubai = $('#Dubai');
    var scrollToHongKong = $('#HongKong');
    var scrollToKualaLumpur = $('#KualaLumpur');
    var scrollToLondon = $('#London');
    var scrollToMumbai = $('#Mumbai');
    var scrollToNewYork = $('#NewYork');
    var scrollToSanFrancisco = $('#SanFrancisco');
    var scrollToSanPaulo = $('#SanPaulo');
    var scrollToShanghai = $('#Shanghai');
    var scrollToSingapore = $('#Singapore');
    var scrollToStPetersburg = $('#StPetersburg');
    var scrollToSydney = $('#Sydney');
    var scrollToTokyo = $('#Tokyo');


 
    function offsetOfMap(){
      google.maps.Map.prototype.panToWithOffset = function(latlng, offsetX, offsetY) {
        var map = this;
        var ov = new google.maps.OverlayView();
        ov.onAdd = function() {
            var proj = this.getProjection();
            var aPoint = proj.fromLatLngToContainerPixel(latlng);
            aPoint.x = aPoint.x+offsetX;
            aPoint.y = aPoint.y+offsetY;
            map.panTo(proj.fromContainerPixelToLatLng(aPoint));
        }; 
        ov.draw = function() {}; 
        ov.setMap(this); 
      };
    }

    function initializeBeijing() {
      offsetOfMap();
 

      var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 18,
        center: getBeijing,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        zoomControl:false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      map.panToWithOffset(getBeijing, -250, -20);
 

      var infowindow = new google.maps.InfoWindow({
          maxWidth: 360,
          pixelOffset: new google.maps.Size(-250, 160)
      });
      var marker = new google.maps.Marker({
          position: getBeijing,
          map: map,
          title: 'Beijing',
        //  icon: image
      });
      google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);
      });

      google.maps.event.addListener(map, 'idle', function() {
        var data = $('.Beijing .name').html();
        $('#cloned').html(data);
        var allPanels = $('form.form');
        allPanels.slideDown();
        $('.close-form').removeClass('close');
        $('.contact-container').addClass('slide');
        getInTouch();
       });
      google.maps.event.addDomListener(window, 'resize', function() {
           var infowindow = new google.maps.InfoWindow({

                maxWidth: 360,
                pixelOffset: new google.maps.Size(-250, 160)
            });
            offsetOfMap();
            map.panToWithOffset(getLondon, -250, -20);
        });

    }
    function initializeCapeTown() {
      offsetOfMap(); 

      var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 18,
        center: getCapeTown,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        zoomControl:false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      map.panToWithOffset(getCapeTown, -250, -20);
 

      
      var marker = new google.maps.Marker({
          position: getCapeTown,
          map: map,
          title: 'CapeTown',
        //  icon: image
      });
      google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);

      });

      google.maps.event.addListener(map, 'idle', function() {
        var data = $('.CapeTown .name').html();
        $('#cloned').html(data);
        var allPanels = $('form.form');
        allPanels.slideDown();
        $('.close-form').removeClass('close');
        $('.contact-container').addClass('slide');
        getInTouch();
       });
      google.maps.event.addDomListener(window, 'resize', function() {
           var infowindow = new google.maps.InfoWindow({

                maxWidth: 360,
                pixelOffset: new google.maps.Size(-250, 160)
            });
            offsetOfMap();
            map.panToWithOffset(getLondon, -250, -20);
        });

    }
    function initializeDallas() {
      offsetOfMap();
 

      var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 18,
        center: getDallas,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        zoomControl:false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      map.panToWithOffset(getDallas, -250, -20);

 
      
      var marker = new google.maps.Marker({
          position: getDallas,
          map: map,
          title: 'Dallas',
        //  icon: image
      });
      google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);

      });

      google.maps.event.addListener(map, 'idle', function() {
        var data = $('.Dallas .name').html();
        $('#cloned').html(data);
        var allPanels = $('form.form');
        allPanels.slideDown();
        $('.close-form').removeClass('close');
        $('.contact-container').addClass('slide');
        getInTouch();
       });
      google.maps.event.addDomListener(window, 'resize', function() {
           var infowindow = new google.maps.InfoWindow({

                maxWidth: 360,
                pixelOffset: new google.maps.Size(-250, 160)
            });
            offsetOfMap();
            map.panToWithOffset(getLondon, -250, -20);
        });

    }
    function initializeDubai() {
      offsetOfMap();

      var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 18,
        center: getDubai,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        zoomControl:false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      map.panToWithOffset(getDubai, -250, -20);


      
      var marker = new google.maps.Marker({
          position: getDubai,
          map: map,
          title: 'Dubai',
        //  icon: image
      });
      google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);

      });

      google.maps.event.addListener(map, 'idle', function() {
        var data = $('.Dubai .name').html();
        $('#cloned').html(data);
        var allPanels = $('form.form');
        allPanels.slideDown();
        $('.close-form').removeClass('close');
        $('.contact-container').addClass('slide');
        getInTouch();
       });
      google.maps.event.addDomListener(window, 'resize', function() {
           var infowindow = new google.maps.InfoWindow({

                maxWidth: 360,
                pixelOffset: new google.maps.Size(-250, 160)
            });
            offsetOfMap();
            map.panToWithOffset(getLondon, -250, -20);
        });

    }
    function initializeHongKong() {
      offsetOfMap(); 

      var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 18,
        center: getHongKong,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        zoomControl:false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      map.panToWithOffset(getHongKong, -250, -20);
 

      
      var marker = new google.maps.Marker({
          position: getHongKong,
          map: map,
          title: 'HongKong',
        //  icon: image
      });
      google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);

      });

      google.maps.event.addListener(map, 'idle', function() {
        var data = $('.HongKong .name').html();
        $('#cloned').html(data);
        var allPanels = $('form.form');
        allPanels.slideDown();
        $('.close-form').removeClass('close');
        $('.contact-container').addClass('slide');
        getInTouch();
       });
      google.maps.event.addDomListener(window, 'resize', function() {
           var infowindow = new google.maps.InfoWindow({

                maxWidth: 360,
                pixelOffset: new google.maps.Size(-250, 160)
            });
            offsetOfMap();
            map.panToWithOffset(getLondon, -250, -20);
        });

    }
    function initializeKualaLumpur() {
      offsetOfMap();

      var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 18,
        center: getKualaLumpur,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        zoomControl:false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      map.panToWithOffset(getKualaLumpur, -250, -20);

 

      
      var marker = new google.maps.Marker({
          position: getKualaLumpur,
          map: map,
          title: 'Kuala Lumpur',
        //  icon: image
      });
      google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);

      });

      google.maps.event.addListener(map, 'idle', function() {
        var data = $('.KualaLumpur .name').html();
        $('#cloned').html(data);
        var allPanels = $('form.form');
        allPanels.slideDown();
        $('.close-form').removeClass('close');
        $('.contact-container').addClass('slide');
        getInTouch();
       });
      google.maps.event.addDomListener(window, 'resize', function() {
           var infowindow = new google.maps.InfoWindow({

                maxWidth: 360,
                pixelOffset: new google.maps.Size(-250, 160)
            });
            offsetOfMap();
            map.panToWithOffset(getLondon, -250, -20);
        });

    }
    function initializeMumbai() {
      offsetOfMap();
 
      var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 18,
        center: getMumbai,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        zoomControl:false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      map.panToWithOffset(getMumbai, -250, -20);
 

      
      var marker = new google.maps.Marker({
          position: getMumbai,
          map: map,
          title: 'Mumbai',
        //  icon: image
      });
      google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);

      });

      google.maps.event.addListener(map, 'idle', function() {
        var data = $('.Mumbai .name').html();
        $('#cloned').html(data);
        var allPanels = $('form.form');
        allPanels.slideDown();
        $('.close-form').removeClass('close');
        $('.contact-container').addClass('slide');
        getInTouch();
       });
      google.maps.event.addDomListener(window, 'resize', function() {
           var infowindow = new google.maps.InfoWindow({

                maxWidth: 360,
                pixelOffset: new google.maps.Size(-250, 160)
            });
            offsetOfMap();
            map.panToWithOffset(getLondon, -250, -20);
        });

    }
    function initializeNewYork() {
      offsetOfMap();
 

      var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 18,
        center: getNewYork,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        zoomControl:false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      map.panToWithOffset(getNewYork, -250, -20);
 

      
      var marker = new google.maps.Marker({
          position: getNewYork,
          map: map,
          title: 'NewYork',
        //  icon: image
      });
      google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);

      });

      google.maps.event.addListener(map, 'idle', function() {
        var data = $('.NewYork .name').html();
        $('#cloned').html(data);
        var allPanels = $('form.form');
        allPanels.slideDown();
        $('.close-form').removeClass('close');
        $('.contact-container').addClass('slide');
        getInTouch();
       });
      google.maps.event.addDomListener(window, 'resize', function() {
           var infowindow = new google.maps.InfoWindow({

                maxWidth: 360,
                pixelOffset: new google.maps.Size(-250, 160)
            });
            offsetOfMap();
            map.panToWithOffset(getLondon, -250, -20);
        });

    }
    function initializeSanFrancisco() {
      offsetOfMap();

      

      var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 18,
        center: getSanFrancisco,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        zoomControl:false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      map.panToWithOffset(getSanFrancisco, -250, -20);
 
      
      var marker = new google.maps.Marker({
          position: getSanFrancisco,
          map: map,
          title: 'San Francisco',
        //  icon: image
      });
      google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);

      });

      google.maps.event.addListener(map, 'idle', function() {
        var data = $('.SanFrancisco .name').html();
        $('#cloned').html(data);
        var allPanels = $('form.form');
        allPanels.slideDown();
        $('.close-form').removeClass('close');
        $('.contact-container').addClass('slide');
        getInTouch();
       });
      google.maps.event.addDomListener(window, 'resize', function() {
           var infowindow = new google.maps.InfoWindow({

                maxWidth: 360,
                pixelOffset: new google.maps.Size(-250, 160)
            });
            offsetOfMap();
            map.panToWithOffset(getLondon, -250, -20);
        });

    }
    function initializeSanPaulo() {
      offsetOfMap();
 

      var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 18,
        center: getSanPaulo,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        zoomControl:false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      map.panToWithOffset(getSanPaulo, -250, -20);
  
      var marker = new google.maps.Marker({
          position: getSanPaulo,
          map: map,
          title: 'SanPaulo',
        //  icon: image
      });
      google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);

      });

      google.maps.event.addListener(map, 'idle', function() {
        var data = $('.SanPaulo .name').html();
        $('#cloned').html(data);
        var allPanels = $('form.form');
        allPanels.slideDown();
        $('.close-form').removeClass('close');
        $('.contact-container').addClass('slide');
        getInTouch();
       });
      google.maps.event.addDomListener(window, 'resize', function() {
           var infowindow = new google.maps.InfoWindow({

                maxWidth: 360,
                pixelOffset: new google.maps.Size(-250, 160)
            });
            offsetOfMap();
            map.panToWithOffset(getLondon, -250, -20);
        });

    }
    function initializeShanghai() {
      offsetOfMap();
 

      var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 18,
        center: getShanghai,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        zoomControl:false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      map.panToWithOffset(getShanghai, -250, -20);
 

      
      var marker = new google.maps.Marker({
          position: getShanghai,
          map: map,
          title: 'Shanghai',
        //  icon: image
      });
      google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);

      });

      google.maps.event.addListener(map, 'idle', function() {
        var data = $('.Shanghai .name').html();
        $('#cloned').html(data);
        var allPanels = $('form.form');
        allPanels.slideDown();
        $('.close-form').removeClass('close');
        $('.contact-container').addClass('slide');
        getInTouch();
       });
      google.maps.event.addDomListener(window, 'resize', function() {
           var infowindow = new google.maps.InfoWindow({

                maxWidth: 360,
                pixelOffset: new google.maps.Size(-250, 160)
            });
            offsetOfMap();
            map.panToWithOffset(getLondon, -250, -20);
        });

    }
    function initializeSingapore() {
      offsetOfMap();
 

      var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 18,
        center: getSingapore,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        zoomControl:false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      map.panToWithOffset(getSingapore, -250, -20);

 

      
      var marker = new google.maps.Marker({
          position: getSingapore,
          map: map,
          title: 'Singapore',
        //  icon: image
      });
      google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);

      });

      google.maps.event.addListener(map, 'idle', function() {
        var data = $('.Singapore .name').html();
        $('#cloned').html(data);
        var allPanels = $('form.form');
        allPanels.slideDown();
        $('.close-form').removeClass('close');
        $('.contact-container').addClass('slide');
        getInTouch();
       });
      google.maps.event.addDomListener(window, 'resize', function() {
           var infowindow = new google.maps.InfoWindow({

                maxWidth: 360,
                pixelOffset: new google.maps.Size(-250, 160)
            });
            offsetOfMap();
            map.panToWithOffset(getLondon, -250, -20);
        });

    }
    function initializeStPetersburg() {
      offsetOfMap();
 

      var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 18,
        center: getStPetersburg,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        zoomControl:false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      map.panToWithOffset(getStPetersburg, -250, -20);

 
      
      var marker = new google.maps.Marker({
          position: getStPetersburg,
          map: map,
          title: 'StPetersburg',
        //  icon: image
      });
      google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);

      });

      google.maps.event.addListener(map, 'idle', function() {
        var data = $('.StPetersburg .name').html();
        $('#cloned').html(data);
        var allPanels = $('form.form');
        allPanels.slideDown();
        $('.close-form').removeClass('close');
        $('.contact-container').addClass('slide');
        getInTouch();
       });
      google.maps.event.addDomListener(window, 'resize', function() {
           var infowindow = new google.maps.InfoWindow({

                maxWidth: 360,
                pixelOffset: new google.maps.Size(-250, 160)
            });
            offsetOfMap();
            map.panToWithOffset(getLondon, -250, -20);
        });

    }
    function initializeSydney() {
      offsetOfMap();
 
      var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 18,
        center: getSydney,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        zoomControl:false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      map.panToWithOffset(getSydney, -250, -20);

 
           

      
      var marker = new google.maps.Marker({
          position: getSydney,
          map: map,
          title: 'Sydney',
        //  icon: image
      });
      google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);

      });

      google.maps.event.addListener(map, 'idle', function() {
        var data = $('.Sydney .name').html();
        $('#cloned').html(data);
        var allPanels = $('form.form');
        allPanels.slideDown();
        $('.close-form').removeClass('close');
        $('.contact-container').addClass('slide');
        getInTouch();
       });
      google.maps.event.addDomListener(window, 'resize', function() {
           var infowindow = new google.maps.InfoWindow({

                maxWidth: 360,
                pixelOffset: new google.maps.Size(-250, 160)
            });
            offsetOfMap();
            map.panToWithOffset(getLondon, -250, -20);
        });

    }
    function initializeTokyo() {
      offsetOfMap();
 
      var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 18,
        center: getTokyo,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        zoomControl:false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      map.panToWithOffset(getTokyo, -250, -20);
 

      
      var marker = new google.maps.Marker({
          position: getTokyo,
          map: map,
          title: 'Tokyo'
      });
      google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);

      });

      google.maps.event.addListener(map, 'idle', function() {
        var data = $('.Tokyo .name').html();
        $('#cloned').html(data);
        var allPanels = $('form.form');
        allPanels.slideDown();
        $('.close-form').removeClass('close');
        $('.contact-container').addClass('slide');
        getInTouch();
       });
      google.maps.event.addDomListener(window, 'resize', function() {
           var infowindow = new google.maps.InfoWindow({

                maxWidth: 360,
                pixelOffset: new google.maps.Size(-250, 160)
            });
            offsetOfMap();
            map.panToWithOffset(getLondon, -250, -20);
        });

    }
 
    function initializeLondon() {
        offsetOfMap();
   
        var map = new google.maps.Map(document.getElementById('map-canvas'),{
          zoom: 18,
          center: getLondon,
          scrollwheel: false,
          navigationControl: false,
          mapTypeControl: false,
          scaleControl: false,
          draggable: true,
          zoomControl:false,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        map.panToWithOffset(getLondon, -250, -20);
         
        var marker = new google.maps.Marker({
            position: getLondon,
            map: map,
            title: 'London'
           
        });
        google.maps.event.addListener(marker, 'click', function() {
           infowindow.open(map,marker);
    
        });
         
         google.maps.event.addListener(map, 'idle', function() {
          var data = $('.London .name').html();
          $('#cloned').html(data);
          var allPanels = $('form.form');
          allPanels.slideDown();
          $('.close-form').removeClass('close');
          $('.contact-container').addClass('slide');
          getInTouch();
         });

         google.maps.event.addDomListener(window, 'resize', function() {
           var infowindow = new google.maps.InfoWindow({

                maxWidth: 360,
                pixelOffset: new google.maps.Size(-250, 160)
            });
            offsetOfMap();
            map.panToWithOffset(getLondon, -250, -20);
        });
 
    }
 
    var slideMap = $('#map-canvas');
    var body = $('html, body');

    function getInTouch(){
      var form = $('#form');
      $('.getintouch').bind('click', function () {

            body.animate({scrollTop: form.offset().top -163 }, 'slow');
        });
    }
    getInTouch();
    
 
  var $window = $(window);
    var windowsize = $window.width();

    function wrapContent() {
        if (windowsize < 800) {
            $('.pick-country > span').replaceWith(function () {
                return $('<option/>').text($(this).text()).attr({'value': this.id, 'id': this.id});
            });
            $('.pick-country > option').wrapAll('<select class="country-list"></select>');





    $('.country-list').on("change", function (e) {
        e.preventDefault();
        var selection = $(this).val();

        $('.openaddress').removeClass('openaddress');
        $('#contact-form').addClass('active');
        $('#icon-contact span').hide();
       
        $('#addresses').find('address.London').addClass('openaddress');
        slideMap.parent().addClass('open');


        body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');

        return false;
    });


 


 
 
    scrollToLondon.click(function (e) {
      e.preventDefault();
      $('.openaddress').removeClass('openaddress');
      $('#contact-form').addClass('active');
      $('#icon-contact span').hide();
        initializeLondon();
        $('#addresses').find('address.London').addClass('openaddress');
        slideMap.parent().addClass('open');
        body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');
      return false;
    });

    scrollToLondon.on("change", function (e) {
         initializeLondon(); 

    });
 



    scrollToTokyo.click(function (e) {
      e.preventDefault();
      $('.openaddress').removeClass('openaddress');
      $('#contact-form').addClass('active');
      $('#icon-contact span').hide();
        initializeTokyo();
        $('#addresses').find('address.Tokyo').addClass('openaddress');
        slideMap.parent().addClass('open');
        body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');
      return false;
    });



    scrollToTokyo.on("change", function (e) {

      initializeTokyo();
         
    });











            scrollToBeijing.click(function (e) {
              e.preventDefault();
              $('.openaddress').removeClass('openaddress');
              $('#contact-form').addClass('active');
              $('#icon-contact span').hide();
                initializeBeijing();
                $('#addresses').find('address.Beijing').addClass('openaddress');
                slideMap.parent().addClass('open');
                body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');
              return false;
            });
            scrollToCapeTown.click(function (e) {
              e.preventDefault();
              $('.openaddress').removeClass('openaddress');
              $('#contact-form').addClass('active');
              $('#icon-contact span').hide();
                initializeCapeTown();
                $('#addresses').find('address.CapeTown').addClass('openaddress');
                slideMap.parent().addClass('open');
                body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');
              return false;
            });
            scrollToDallas.click(function (e) {
              e.preventDefault();
              $('.openaddress').removeClass('openaddress');
              $('#contact-form').addClass('active');
              $('#icon-contact span').hide();
                initializeDallas();
                $('#addresses').find('address.Dallas').addClass('openaddress');
                slideMap.parent().addClass('open');
                body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');
              return false;
            });
            scrollToDubai.click(function (e) {
              e.preventDefault();
              $('.openaddress').removeClass('openaddress');
              $('#contact-form').addClass('active');
              $('#icon-contact span').hide();
                initializeDubai();
                $('#addresses').find('address.Dubai').addClass('openaddress');
                slideMap.parent().addClass('open');
                body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');
              return false;
            });
            scrollToHongKong.click(function (e) {
              e.preventDefault();
              $('.openaddress').removeClass('openaddress');
              $('#contact-form').addClass('active');
              $('#icon-contact span').hide();
                initializeHongKong();
                $('#addresses').find('address.HongKong').addClass('openaddress');
                slideMap.parent().addClass('open');
                body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');
              return false;
            });
            scrollToKualaLumpur.click(function (e) {
              e.preventDefault();
              $('.openaddress').removeClass('openaddress');
              $('#contact-form').addClass('active');
              $('#icon-contact span').hide();
                initializeKualaLumpur();
                $('#addresses').find('address.KualaLumpur').addClass('openaddress');
                slideMap.parent().addClass('open');
                body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');
              return false;
            });
            scrollToMumbai.click(function (e) {
              e.preventDefault();
              $('.openaddress').removeClass('openaddress');
              $('#contact-form').addClass('active');
              $('#icon-contact span').hide();
                initializeMumbai();
                $('#addresses').find('address.Mumbai').addClass('openaddress');
                slideMap.parent().addClass('open');
                body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');
              return false;
            });
            scrollToNewYork.click(function (e) {
              e.preventDefault();
              $('.openaddress').removeClass('openaddress');
              $('#contact-form').addClass('active');
              $('#icon-contact span').hide();
                initializeNewYork();
                $('#addresses').find('address.NewYork').addClass('openaddress');
                slideMap.parent().addClass('open');
                body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');
              return false;
            });
            scrollToSanFrancisco.click(function (e) {
              e.preventDefault();
              $('.openaddress').removeClass('openaddress');
              $('#contact-form').addClass('active');
              $('#icon-contact span').hide();
                initializeSanFrancisco();
                $('#addresses').find('address.SanFrancisco').addClass('openaddress');
                slideMap.parent().addClass('open');
                body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');
              return false;
            });
            scrollToSanPaulo.click(function (e) {
              e.preventDefault();
              $('.openaddress').removeClass('openaddress');
              $('#contact-form').addClass('active');
              $('#icon-contact span').hide();
                initializeSanPaulo();
                $('#addresses').find('address.SanPaulo').addClass('openaddress');
                slideMap.parent().addClass('open');
                body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');
              return false;
            });
            scrollToShanghai.click(function (e) {
              e.preventDefault();
              $('.openaddress').removeClass('openaddress');
              $('#contact-form').addClass('active');
              $('#icon-contact span').hide();
                initializeShanghai();
                $('#addresses').find('address.Shanghai').addClass('openaddress');
                slideMap.parent().addClass('open');
                body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');
              return false;
            });
            scrollToSingapore.click(function (e) {
              e.preventDefault();
              $('.openaddress').removeClass('openaddress');
              $('#contact-form').addClass('active');
              $('#icon-contact span').hide();
                initializeSingapore();
                $('#addresses').find('address.Singapore').addClass('openaddress');
                slideMap.parent().addClass('open');
                body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');
              return false;
            });
            scrollToStPetersburg.click(function (e) {
              e.preventDefault();
              $('.openaddress').removeClass('openaddress');
              $('#contact-form').addClass('active');
              $('#icon-contact span').hide();
                initializeStPetersburg();
                $('#addresses').find('address.StPetersburg').addClass('openaddress');
                slideMap.parent().addClass('open');
                body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');
              return false;
            });
            scrollToSydney.click(function (e) {
              e.preventDefault();
              $('.openaddress').removeClass('openaddress');
              $('#contact-form').addClass('active');
              $('#icon-contact span').hide();
                initializeSydney();
                $('#addresses').find('address.Sydney').addClass('openaddress');
                slideMap.parent().addClass('open');
                body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');
              return false;
            });


      }
    }
    wrapContent();
    $(window).resize(wrapContent);

    var slideMap = $('#map-canvas');
    var body = $('html, body');








  }
};

$(document).ready(function () {
  contactmodule.init();
});