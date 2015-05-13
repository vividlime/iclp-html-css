 var contactmodule = {
  init: function () {
    this.googleMaps();
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
          infowindow.open(close,marker);
          pixelOffset: new google.maps.Size(-250, 160)
      });
      //var image = 'assets/images/marker-red.png';
      var marker = new google.maps.Marker({
          position: getBeijing,
          map: map,
          title: 'Beijing',
        //  icon: image
      });
      google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);
      });
      infowindow.open(map,marker);

      google.maps.event.addListener(map, 'idle', function() {
        var data = $('#clone').html();
        $('#cloned').html(data);
        var allPanels = $('form.form');
        allPanels.slideDown();
        $('.close-form').removeClass('close');
        $('.contact-container').addClass('slide');
        getInTouch();
       });
      google.maps.event.addDomListener(window, 'resize', function() {
           var infowindow = new google.maps.InfoWindow({
                content: contentString,
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


      var contentString ='<address class="address"> '+
          '<span class="town">CapeTown</span>'+
          '<p class="marker">Century Falls Office Park, Block E, Canal Close, Century City 7400, Cape Town, South Africa </p> '+
          '<a href="mailto:capetown@iclployalty.com" class="email">capetown@iclployalty.com</a> '+
          '<div class="direct-contact">'+
          '<h3 class="name" id="clone">Amy Stafford</h3>'+
          '<p class="title">Marketing &amp; Business Development Coordinator</p>'+
          '<p class="tel">+(971) 4 436 4854</p>'+
          '<button class="button getintouch">GET IN TOUCH</button>'+
          '</div>'+
          '</address>';

      var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 360,
          pixelOffset: new google.maps.Size(-250, 160)
      });
      //var image = 'assets/images/marker-red.png';
      var marker = new google.maps.Marker({
          position: getCapeTown,
          map: map,
          title: 'CapeTown',
        //  icon: image
      });
      google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);

      });
      infowindow.open(map,marker);

      google.maps.event.addListener(map, 'idle', function() {
        var data = $('#clone').html();
        $('#cloned').html(data);
        var allPanels = $('form.form');
        allPanels.slideDown();
        $('.close-form').removeClass('close');
        $('.contact-container').addClass('slide');
        getInTouch();
       });
      google.maps.event.addDomListener(window, 'resize', function() {
           var infowindow = new google.maps.InfoWindow({
                content: contentString,
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


      var contentString ='<address class="address"> '+
        '<span class="town">Dallas</span>'+
        '<p class="marker">5204 Tennyson Parkway, Suite 500, Plano, TX 75024, USA </p> '+
        '<a href="mailto:dallas@iclployalty.com" class="email">dallas@iclployalty.com</a> '+
        '<div class="direct-contact">'+
        '<h3 class="name" id="clone">Gabe McElwaine</h3>'+
        '<p class="title">Business Development</p>'+
        '<p class="tel">+1 917-808-6469</p>'+
        '<button class="button getintouch">GET IN TOUCH</button>'+
        '</div>'+
        '</address>';

      var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 360,
          pixelOffset: new google.maps.Size(-250, 160)
      });
      //var image = 'assets/images/marker-red.png';
      var marker = new google.maps.Marker({
          position: getDallas,
          map: map,
          title: 'Dallas',
        //  icon: image
      });
      google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);

      });
      infowindow.open(map,marker);

      google.maps.event.addListener(map, 'idle', function() {
        var data = $('#clone').html();
        $('#cloned').html(data);
        var allPanels = $('form.form');
        allPanels.slideDown();
        $('.close-form').removeClass('close');
        $('.contact-container').addClass('slide');
        getInTouch();
       });
      google.maps.event.addDomListener(window, 'resize', function() {
           var infowindow = new google.maps.InfoWindow({
                content: contentString,
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


      var contentString ='<address class="address"> '+
        '<span class="town">Dubai</span>'+
        '<p class="marker">Office 3204, Tower A, Business Central Towers, Dubai Media City, Sheikh Zayed Road, Dubai, UAE </p> '+
        '<a href="mailto:loyalty@iclp-dubai.com" class="email">loyalty@iclp-dubai.com</a> '+
        '<div class="direct-contact">'+
        '<h3 class="name" id="clone">Dina El-Zaharna</h3>'+
        '<p class="title">Business Development Manager</p>'+
        '<p class="tel">+(971) 4436 4859</p>'+
        '<button class="button getintouch">GET IN TOUCH</button>'+
        '</div>'+
        '</address>';

      var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 360,
          pixelOffset: new google.maps.Size(-250, 160)
      });
      //var image = 'assets/images/marker-red.png';
      var marker = new google.maps.Marker({
          position: getDubai,
          map: map,
          title: 'Dubai',
        //  icon: image
      });
      google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);

      });
      infowindow.open(map,marker);

      google.maps.event.addListener(map, 'idle', function() {
        var data = $('#clone').html();
        $('#cloned').html(data);
        var allPanels = $('form.form');
        allPanels.slideDown();
        $('.close-form').removeClass('close');
        $('.contact-container').addClass('slide');
        getInTouch();
       });
      google.maps.event.addDomListener(window, 'resize', function() {
           var infowindow = new google.maps.InfoWindow({
                content: contentString,
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


      var contentString ='<address class="address"> '+
        '<span class="town">Hong Kong</span>'+
        '<p class="marker">Suites 1209-1214, 12/F, Cityplaza One, 1111 Kings Road, Taikoo Shing, Hong Kong </p> '+
        '<a href="mailto:hongkong@iclployalty.com" class="email">hongkong@iclployalty.com</a> '+
        '<div class="direct-contact">'+
        '<h3 class="name" id="clone">Sophie Fung</h3>'+
        '<p class="title">Business Development Manager</p>'+
        '<p class="tel">+(852) 2803 8178</p>'+
        '<button class="button getintouch">GET IN TOUCH</button>'+
        '</div>'+
        '</address>';

      var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 360,
          pixelOffset: new google.maps.Size(-250, 160)
      });
      //var image = 'assets/images/marker-red.png';
      var marker = new google.maps.Marker({
          position: getHongKong,
          map: map,
          title: 'HongKong',
        //  icon: image
      });
      google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);

      });
      infowindow.open(map,marker);

      google.maps.event.addListener(map, 'idle', function() {
        var data = $('#clone').html();
        $('#cloned').html(data);
        var allPanels = $('form.form');
        allPanels.slideDown();
        $('.close-form').removeClass('close');
        $('.contact-container').addClass('slide');
        getInTouch();
       });
      google.maps.event.addDomListener(window, 'resize', function() {
           var infowindow = new google.maps.InfoWindow({
                content: contentString,
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


      var contentString ='<address class="address"> '+
        '<span class="town">Kuala Lumpur</span>'+
          '<p class="marker">Plaza 138, Suite 18.03 <br>18th Floor, 138 Jalan Ampang <br>50450 Kuala Lumpur <br>Malaysia </p> '+
          '<a href="mailto:kualalumpur@iclployalty.com" class="email">kualalumpur@iclployalty.com</a> '+
          '<div class="direct-contact">'+
          '<h3 class="name" id="clone">Bruno Tay</h3>'+
          '<p class="title">Country Manager</p>'+
          '<p class="tel">+65 6416 6333</p>'+
          '<button class="button getintouch">GET IN TOUCH</button>'+
          '</div>'+
          '</address>';

      var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 360,
          pixelOffset: new google.maps.Size(-250, 160)
      });
      //var image = 'assets/images/marker-red.png';
      var marker = new google.maps.Marker({
          position: getKualaLumpur,
          map: map,
          title: 'Kuala Lumpur',
        //  icon: image
      });
      google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);

      });
      infowindow.open(map,marker);

      google.maps.event.addListener(map, 'idle', function() {
        var data = $('#clone').html();
        $('#cloned').html(data);
        var allPanels = $('form.form');
        allPanels.slideDown();
        $('.close-form').removeClass('close');
        $('.contact-container').addClass('slide');
        getInTouch();
       });
      google.maps.event.addDomListener(window, 'resize', function() {
           var infowindow = new google.maps.InfoWindow({
                content: contentString,
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


      var contentString ='<address class="address"> '+
        '<span class="town">Mumbai</span>'+
          '<p class="marker">501-505 Ascot Centre, 5th Floor, Sahar Road, Andheri East, Mumbai 400099, India </p> '+
          '<p class="tel">+91 22 61342230</p> '+
          '<a href="mailto:india@iclployalty.com" class="email">india@iclployalty.com</a>'+
          '<div class="direct-contact">'+
          '<h3 class="name" id="clone">Rahul Mukkath</h3>'+
          '<p class="title">Business Development Director</p>'+
          '<p class="tel">+91 (22) 6134 2218</p>'+
          '<button class="button getintouch">GET IN TOUCH</button>'+
          '</div>'+
          '</address>';

      var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 360,
          pixelOffset: new google.maps.Size(-250, 160)
      });
      //var image = 'assets/images/marker-red.png';
      var marker = new google.maps.Marker({
          position: getMumbai,
          map: map,
          title: 'Mumbai',
        //  icon: image
      });
      google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);

      });
      infowindow.open(map,marker);

      google.maps.event.addListener(map, 'idle', function() {
        var data = $('#clone').html();
        $('#cloned').html(data);
        var allPanels = $('form.form');
        allPanels.slideDown();
        $('.close-form').removeClass('close');
        $('.contact-container').addClass('slide');
        getInTouch();
       });
      google.maps.event.addDomListener(window, 'resize', function() {
           var infowindow = new google.maps.InfoWindow({
                content: contentString,
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


      var contentString ='<address class="address"> '+
        '<span class="town">NewYork</span>'+
          '<p class="marker">575 Lexington Avenue Suite 4036, New York NY 10022 USA </p> '+
          '<a href="mailto:ny@iclployalty.com" class="email">ny@iclployalty.com</a> '+
          '<div class="direct-contact">'+
          '<h3 class="name" id="clone">Gabe McElwaine</h3>'+
          '<p class="title">Business Development</p>'+
          '<p class="tel">+1 917-808-6469</p>'+
          '<button class="button getintouch">GET IN TOUCH</button>'+
          '</div>'+
          '</address>';

      var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 360,
          pixelOffset: new google.maps.Size(-250, 160)
      });
      //var image = 'assets/images/marker-red.png';
      var marker = new google.maps.Marker({
          position: getNewYork,
          map: map,
          title: 'Bergamo',
        //  icon: image
      });
      google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);

      });
      infowindow.open(map,marker);

      google.maps.event.addListener(map, 'idle', function() {
        var data = $('#clone').html();
        $('#cloned').html(data);
        var allPanels = $('form.form');
        allPanels.slideDown();
        $('.close-form').removeClass('close');
        $('.contact-container').addClass('slide');
        getInTouch();
       });
      google.maps.event.addDomListener(window, 'resize', function() {
           var infowindow = new google.maps.InfoWindow({
                content: contentString,
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


      var contentString ='<address class="address"> '+
        '<span class="town">SanFrancisco</span>'+
        '<p class="marker">111 Maiden Lane, Suite 600,<br> San Francisco,<br> CA 94108, USA </p> '+
        '<a href="mailto:sfo@iclployalty.com" class="email">sfo@iclployalty.com</a> '+
        '<div class="direct-contact">'+
        '<h3 class="name" id="clone">Gabe McElwaine</h3>'+
        '<p class="title">Business Development</p>'+
        '<p class="tel">+(1) 917-808-6469</p>'+
        '<button class="button getintouch">GET IN TOUCH</button>'+
        '</div>'+
        '</address>';

      var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 360,
          pixelOffset: new google.maps.Size(-250, 160)
      });
      //var image = 'assets/images/marker-red.png';
      var marker = new google.maps.Marker({
          position: getSanFrancisco,
          map: map,
          title: 'San Francisco',
        //  icon: image
      });
      google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);

      });
      infowindow.open(map,marker);

      google.maps.event.addListener(map, 'idle', function() {
        var data = $('#clone').html();
        $('#cloned').html(data);
        var allPanels = $('form.form');
        allPanels.slideDown();
        $('.close-form').removeClass('close');
        $('.contact-container').addClass('slide');
        getInTouch();
       });
      google.maps.event.addDomListener(window, 'resize', function() {
           var infowindow = new google.maps.InfoWindow({
                content: contentString,
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


      var contentString ='<address class="address"> '+
        '<span class="town">SanPaulo</span>'+
          '<p class="marker">Rua Joaquim Floriano, 940–cj.31, Itaim Bibi, São Paulo, SP 04534-004, Brasil </p> '+
          '<p class="tel">+(55) 11 2338 4004</p> '+
          '<a href="mailto:saopaulo@iclployalty.com" class="email">saopaulo@iclployalty.com</a>'+
          '<div class="direct-contact">'+
          '<h3 class="name" id="clone">Felipe Oliveira</h3>'+
          '<p class="title">Business Development Manager</p>'+
          '<p class="tel">+(55) 11 2338 4004</p>'+
          '<button class="button getintouch">GET IN TOUCH</button>'+
          '</div>'+
          '</address>';

      var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 360,
          pixelOffset: new google.maps.Size(-250, 160)
      });
      //var image = 'assets/images/marker-red.png';
      var marker = new google.maps.Marker({
          position: getSanPaulo,
          map: map,
          title: 'SanPaulo',
        //  icon: image
      });
      google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);

      });
      infowindow.open(map,marker);

      google.maps.event.addListener(map, 'idle', function() {
        var data = $('#clone').html();
        $('#cloned').html(data);
        var allPanels = $('form.form');
        allPanels.slideDown();
        $('.close-form').removeClass('close');
        $('.contact-container').addClass('slide');
        getInTouch();
       });
      google.maps.event.addDomListener(window, 'resize', function() {
           var infowindow = new google.maps.InfoWindow({
                content: contentString,
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


      var contentString ='<address class="address"> '+
        '<span class="town">Shanghai</span>'+
          '<p class="marker">Suite 2002, 1350 North Sichuan Road, Li Tong Plaza, Shanghai, 200080, PR China </p> '+
          '<p class="tel">+(86) 21 2606 4300</p> '+
          '<a href="mailto:shanghai@iclployalty.com" class="email">shanghai@iclployalty.com</a> '+
          '<div class="direct-contact">'+
          '<h3 class="name" id="clone">Chloe Liu</h3>'+
          '<p class="title">Business Development</p>'+
          '<p class="tel">+(86) 159 2144 5990</p>'+
          '<button class="button getintouch">GET IN TOUCH</button>'+
          '</div>'+
          '</address>';

      var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 360,
          pixelOffset: new google.maps.Size(-250, 160)
      });
      //var image = 'assets/images/marker-red.png';
      var marker = new google.maps.Marker({
          position: getShanghai,
          map: map,
          title: 'Shanghai',
        //  icon: image
      });
      google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);

      });
      infowindow.open(map,marker);

      google.maps.event.addListener(map, 'idle', function() {
        var data = $('#clone').html();
        $('#cloned').html(data);
        var allPanels = $('form.form');
        allPanels.slideDown();
        $('.close-form').removeClass('close');
        $('.contact-container').addClass('slide');
        getInTouch();
       });
      google.maps.event.addDomListener(window, 'resize', function() {
           var infowindow = new google.maps.InfoWindow({
                content: contentString,
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


      var contentString ='<address class="address"> '+
        '<span class="town">Singapore</span>'+
          '<p class="marker">152 Beach Road, #23-02/04 Gateway East, Singapore 189721 </p> '+
          '<a href="mailto:singapore@iclployalty.com" class="email">singapore@iclployalty.com</a> '+
          '<div class="direct-contact">'+
          '<h3 class="name" id="clone">Bruno Tay</h3>'+
          '<p class="title">Country Manager</p>'+
          '<p class="tel">+65 6416 6333</p>'+
          '<button class="button getintouch">GET IN TOUCH</button>'+
          '</div>'+
          '</address>';

      var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 360,
          pixelOffset: new google.maps.Size(-250, 160)
      });
      //var image = 'assets/images/marker-red.png';
      var marker = new google.maps.Marker({
          position: getSingapore,
          map: map,
          title: 'Singapore',
        //  icon: image
      });
      google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);

      });
      infowindow.open(map,marker);

      google.maps.event.addListener(map, 'idle', function() {
        var data = $('#clone').html();
        $('#cloned').html(data);
        var allPanels = $('form.form');
        allPanels.slideDown();
        $('.close-form').removeClass('close');
        $('.contact-container').addClass('slide');
        getInTouch();
       });
      google.maps.event.addDomListener(window, 'resize', function() {
           var infowindow = new google.maps.InfoWindow({
                content: contentString,
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


      var contentString ='<address class="address"> '+
        '<span class="town">St Petersburg</span>'+
          '<p class="marker">Vosstaniya St, Bld. 30/7 A Office 11 H,&nbsp;Saint-Petersburg, 191014 Russia </p> '+
          '<a href="mailto:stpetersburg@iclployalty.com" class="email">stpetersburg@iclployalty.com</a> '+
          '<div class="direct-contact">'+
          '<h3 class="name" id="clone">Amy Stafford</h3>'+
          '<p class="title">Marketing &amp; Business Development Coordinator</p>'+
          '<p class="tel">+(971) 4 436 4854</p>'+
          '<button class="button getintouch">GET IN TOUCH</button>'+
          '</div>'+
          '</address>';

      var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 360,
          pixelOffset: new google.maps.Size(-250, 160)
      });
      //var image = 'assets/images/marker-red.png';
      var marker = new google.maps.Marker({
          position: getStPetersburg,
          map: map,
          title: 'StPetersburg',
        //  icon: image
      });
      google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);

      });
      infowindow.open(map,marker);

      google.maps.event.addListener(map, 'idle', function() {
        var data = $('#clone').html();
        $('#cloned').html(data);
        var allPanels = $('form.form');
        allPanels.slideDown();
        $('.close-form').removeClass('close');
        $('.contact-container').addClass('slide');
        getInTouch();
       });
      google.maps.event.addDomListener(window, 'resize', function() {
           var infowindow = new google.maps.InfoWindow({
                content: contentString,
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


      var contentString ='<address class="address"> '+
        '<span class="town">Sydney</span>'+
          '<p class="marker">62 Alexander Street, Crows Nest, NSW 2065, Australia </p> '+
          '<a href="mailto:sydney@iclployalty.com" class="email">sydney@iclployalty.com</a> '+
          '<div class="direct-contact">'+
          '<h3 class="name" id="clone">Pip Davis</h3>'+
          '<p class="title">Director, Business Development</p>'+
          '<p class="tel">+61 (2) 9463 3300</p>'+
          '<button class="button getintouch">GET IN TOUCH</button>'+
          '</div>'+
          '</address>';
           

      var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 360,
          pixelOffset: new google.maps.Size(-250, 160)
      });
      //var image = 'assets/images/marker-red.png';
      var marker = new google.maps.Marker({
          position: getSydney,
          map: map,
          title: 'Sydney',
        //  icon: image
      });
      google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);

      });
      infowindow.open(map,marker);

      google.maps.event.addListener(map, 'idle', function() {
        var data = $('#clone').html();
        $('#cloned').html(data);
        var allPanels = $('form.form');
        allPanels.slideDown();
        $('.close-form').removeClass('close');
        $('.contact-container').addClass('slide');
        getInTouch();
       });
      google.maps.event.addDomListener(window, 'resize', function() {
           var infowindow = new google.maps.InfoWindow({
                content: contentString,
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


      var contentString ='<address class="address"> '+
        '<span class="town">Tokyo</span>'+
          '<p class="marker">Akasaka Hillside 5th Floor, 2-20-13 Akasaka Minato-ku Tokyo 107-0052, Japan </p> '+
          '<a href="mailto:tokyo@iclployalty.com" class="email">tokyo@iclployalty.com</a> '+
          '<div class="direct-contact">'+
          '<h3 class="name" id="clone">Junko Iguchi</h3>'+
          '<p class="title">Senior Account Manager</p>'+
          '<p class="tel">+ (81) 3 6234 4661</p>'+
          '<button class="button getintouch">GET IN TOUCH</button>'+
          '</div>'+
          '</address>';


      var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 360,
          pixelOffset: new google.maps.Size(-250, 160)
      });
      var marker = new google.maps.Marker({
          position: getTokyo,
          map: map,
          title: 'Tokyo'
      });
      google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);

      });
      infowindow.open(map,marker);

      google.maps.event.addListener(map, 'idle', function() {
        var data = $('#clone').html();
        $('#cloned').html(data);
        var allPanels = $('form.form');
        allPanels.slideDown();
        $('.close-form').removeClass('close');
        $('.contact-container').addClass('slide');
        getInTouch();
       });
      google.maps.event.addDomListener(window, 'resize', function() {
           var infowindow = new google.maps.InfoWindow({
                content: contentString,
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
        
 
        var contentString ='<address class="address"> '+
          '<span class="town">London</span>'+
          '<p class="marker">Cutlers Exchange, 123 Houndsditch, London, EC3A 7BU, United Kingdom </p> '+
          '<a href="mailto:info@iclployalty.com" class="email">info@iclployalty.com</a> '+
          '<div class="direct-contact">'+
          '<h3 class="name" id="clone">Hannah Dwyer</h3>'+
          '<p class="title">Business Development Director</p>'+
          '<p class="tel">+(44) 20 3725 0197</p>'+
          '<button class="button getintouch">GET IN TOUCH</button>'+
          '</div>'+
          '</address>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 360,
            pixelOffset: new google.maps.Size(-250, 160)
        });
        var marker = new google.maps.Marker({
            position: getLondon,
            map: map,
            title: 'London'
           
        });
        google.maps.event.addListener(marker, 'click', function() {
           infowindow.open(map,marker);
    
        });
        infowindow.open(map,marker);

         google.maps.event.addListener(map, 'idle', function() {
          var data = $('#clone').html();
          $('#cloned').html(data);
          var allPanels = $('form.form');
          allPanels.slideDown();
          $('.close-form').removeClass('close');
          $('.contact-container').addClass('slide');
          getInTouch();
         });

         google.maps.event.addDomListener(window, 'resize', function() {
           var infowindow = new google.maps.InfoWindow({
                content: contentString,
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

    
 
 
    scrollToLondon.on("click", function (e) {
      e.preventDefault();

      $('#contact-form').addClass('active');
      $('#icon-contact span').hide();
        initializeLondon();
        slideMap.parent().addClass('open');
        body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');

      return false;
    });
    scrollToTokyo.click(function (e) {
      e.preventDefault();
      $('#contact-form').addClass('active');
      $('#icon-contact span').hide();
        initializeTokyo();
        slideMap.parent().addClass('open');
        body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');
      return false;
    });
    scrollToBeijing.click(function (e) {
      e.preventDefault();
      $('#contact-form').addClass('active');
      $('#icon-contact span').hide();
        initializeBeijing();
        slideMap.parent().addClass('open');
        body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');
      return false;
    });
    scrollToCapeTown.click(function (e) {
      e.preventDefault();

      $('#contact-form').addClass('active');
      $('#icon-contact span').hide();
        initializeCapeTown();
        slideMap.parent().addClass('open');
        body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');
      return false;
    });
    scrollToDallas.click(function (e) {
      e.preventDefault();

      $('#contact-form').addClass('active');
      $('#icon-contact span').hide();
        initializeDallas();
        slideMap.parent().addClass('open');
        body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');
      return false;
    });
    scrollToDubai.click(function (e) {
      e.preventDefault();

      $('#contact-form').addClass('active');
      $('#icon-contact span').hide();
        initializeDubai();
        slideMap.parent().addClass('open');
        body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');
      return false;
    });
    scrollToHongKong.click(function (e) {
      e.preventDefault();

      $('#contact-form').addClass('active');
      $('#icon-contact span').hide();
        initializeHongKong();
        slideMap.parent().addClass('open');
        body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');
      return false;
    });
    scrollToKualaLumpur.click(function (e) {
      e.preventDefault();

      $('#contact-form').addClass('active');
      $('#icon-contact span').hide();
        initializeKualaLumpur();
        slideMap.parent().addClass('open');
        body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');
      return false;
    });
    scrollToMumbai.click(function (e) {
      e.preventDefault();

      $('#contact-form').addClass('active');
      $('#icon-contact span').hide();
        initializeMumbai();
        slideMap.parent().addClass('open');
        body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');
      return false;
    });
    scrollToNewYork.click(function (e) {
      e.preventDefault();

      $('#contact-form').addClass('active');
      $('#icon-contact span').hide();
        initializeNewYork();
        slideMap.parent().addClass('open');
        body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');
      return false;
    });
    scrollToSanFrancisco.click(function (e) {
      e.preventDefault();

      $('#contact-form').addClass('active');
      $('#icon-contact span').hide();
        initializeSanFrancisco();
        slideMap.parent().addClass('open');
        body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');
      return false;
    });
    scrollToSanPaulo.click(function (e) {
      e.preventDefault();

      $('#contact-form').addClass('active');
      $('#icon-contact span').hide();
        initializeSanPaulo();
        slideMap.parent().addClass('open');
        body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');
      return false;
    });
    scrollToShanghai.click(function (e) {
      e.preventDefault();

      $('#contact-form').addClass('active');
      $('#icon-contact span').hide();
        initializeShanghai();
        slideMap.parent().addClass('open');
        body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');
      return false;
    });
    scrollToSingapore.click(function (e) {
      e.preventDefault();

      $('#contact-form').addClass('active');
      $('#icon-contact span').hide();
        initializeSingapore();
        slideMap.parent().addClass('open');
        body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');
      return false;
    });
    scrollToStPetersburg.click(function (e) {
      e.preventDefault();

      $('#contact-form').addClass('active');
      $('#icon-contact span').hide();
        initializeStPetersburg();
        slideMap.parent().addClass('open');
        body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');
      return false;
    });
    scrollToSydney.click(function (e) {
      e.preventDefault();

      $('#contact-form').addClass('active');
      $('#icon-contact span').hide();
        initializeSydney();
        slideMap.parent().addClass('open');
        body.animate({scrollTop: slideMap.offset().top -63 }, 'slow');
      return false;
    });
  }
};

$(document).ready(function () {
  contactmodule.init();
});