/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function() {

  // external links should open in a new tab
  var host = location.hostname
  var allLinks = document.querySelectorAll('a')
  for (var i = 0; i < allLinks.length; ++i) {
    if (allLinks[i].hostname !== host && allLinks[i].hostname !== '') {
      allLinks[i].target = '_blank'
    }
  }

  // FitVids init
  $("#main").fitVids();

  // Sticky sidebar
  var stickySideBar = function() {
    var show =
      $(".author__urls-wrapper button").length === 0
        ? $(window).width() > 1024 // width should match $large Sass variable
        : !$(".author__urls-wrapper button").is(":visible");
    if (show) {
      // fix
      $(".sidebar").addClass("sticky");
    } else {
      // unfix
      $(".sidebar").removeClass("sticky");
    }
  };

  stickySideBar();

  $(window).resize(function() {
    stickySideBar();
  });

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").toggleClass("is--visible");
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // Close search screen with Esc key
  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      if ($(".initial-content").hasClass("is--hidden")) {
        $(".search-content").toggleClass("is--visible");
        $(".initial-content").toggleClass("is--hidden");
      }
    }
  });

  // Search toggle
  $(".search__toggle").on("click", function() {
    $(".search-content").toggleClass("is--visible");
    $(".initial-content").toggleClass("is--hidden");
    // set focus on input
    setTimeout(function() {
      $(".search-content input").focus();
    }, 400);
  });

  // Smooth scrolling
  var scroll = new SmoothScroll('a[href*="#"]', {
    offset: 20,
    speed: 400,
    speedAsDuration: true,
    durationMax: 500
  });

  // Gumshoe scroll spy init
  if($("nav.toc").length > 0) {
    var spy = new Gumshoe("nav.toc a", {
      // Active classes
      navClass: "active", // applied to the nav list item
      contentClass: "active", // applied to the content

      // Nested navigation
      nested: false, // if true, add classes to parents of active link
      nestedClass: "active", // applied to the parent items

      // Offset & reflow
      offset: 20, // how far from the top of the page to activate a content area
      reflow: true, // if true, listen for reflows

      // Event support
      events: true // if true, emit custom events
    });
  }

  // add lightbox class to all image links
  $(
    "a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif'],a[href$='.webp']"
  ).addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    // disableOn: function() {
    //   if( $(window).width() < 500 ) {
    //     return false;
    //   }
    //   return true;
    // },
    type: "image",
    tLoading: "Loading image #%curr%...",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.'
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: "mfp-zoom-in",
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace(
          "mfp-figure",
          "mfp-figure mfp-with-anim"
        );
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

  // Add anchors for headings
  $('.page__content').find('h1, h2, h3, h4, h5, h6').each(function() {
    var id = $(this).attr('id');
    if (id) {
      var anchor = document.createElement("a");
      anchor.className = 'header-link';
      anchor.href = '#' + id;
      anchor.innerHTML = '<span class=\"sr-only\">Permalink</span><i class=\"fas fa-link\"></i>';
      anchor.title = "Permalink";
      $(this).append(anchor);
    }
  });

/* hacks-guide change start: add configs for navigation bar and language selector */
  if((window.location.href.indexOf("/he_IL/") > -1) || (window.location.href.indexOf("/ar_SA/") > -1)) {
    $("body").css("direction", "rtl");

    $("nav.greedy-nav .nav-selector").css("left", "2.5rem");
    $("nav.greedy-nav .lang-selector").css("left", ".2rem");

    $("nav.greedy-nav .links-menu").css("right", "auto");
    $("nav.greedy-nav .lang-menu").css("right", "auto");

    $("nav.greedy-nav .links-menu").css("left", "2.5rem");
    $("nav.greedy-nav .lang-menu").css("left", ".2rem");

    $("nav.greedy-nav .visible-links").css("padding-right", "0");
    $("nav.greedy-nav .visible-links").css("padding-left", "2rem");

    $("nav.greedy-nav .visible-links li:first-child a").css("margin-right", "0");
    $("nav.greedy-nav .visible-links li:first-child a").css("margin-left", "1rem");

    $("nav.greedy-nav .visible-links li:first-child").css("padding-right", "0");
    $("nav.greedy-nav .visible-links li:first-child").css("padding-left", "2em");

    $("nav.greedy-nav .visible-links li:last-child a").css("margin-right", "1rem");
    $("nav.greedy-nav .visible-links li:last-child a").css("margin-left", "0");

    // for some reason js cannot directly modify :before and :after pseudo-elements' css
    $('nav.greedy-nav').prepend('<style>.hidden-links:before{right:inherit !important;}</style>');
    $('nav.greedy-nav').prepend('<style>.hidden-links:before{left:5px !important;}</style>');

    $('nav.greedy-nav').prepend('<style>.hidden-links:after{right:inherit !important;}</style>');
    $('nav.greedy-nav').prepend('<style>.hidden-links:after{left:5px !important;}</style>');
  }
/* hacks-guide change end */

/* hacks-guide change start: add progress table */
  var sidebar_shown = false;

  var devices = {
    "hbc": "0",
    "hbc-mini": "1"
  };

  // The pages used to lookup which route to display
  // parsed from the location of the url
  // the value is the key to the displayed route in the device_common/old/new variable below
  // 
  var methods = {
    "letterbomb": "0",
    "wilbrand": "1",
    "bluebomb": "2",
    "flashhax": "3",
    "str2hax": "4",
    "hbc": "5",
    "hbc-mini": "6",
    "bootmii": "7",
    "priiloader": "8",
    "osc": "9",
    "cios-mini": "10",
    "wnd-mini": "11"
  };

  for(var device in devices){
    if(window.location.href.indexOf("/" + device) > -1) {
      localStorage.setItem('device', devices[device]);
      sidebar_shown = true;
    }
  }

  for(var method in methods){
    if(window.location.href.indexOf("/" + method) > -1) {
      localStorage.setItem('method', methods[method]);
      sidebar_shown = true;
    }
  }

  if(window.location.href.indexOf("/" + "get-started") > -1) {
    localStorage.setItem('method', methods[method]);
    sidebar_shown = true;
  }

  var device, method;
  if(!(method = localStorage.getItem('method'))){
    sidebar_shown = false;
  }
  if (!(device = localStorage.getItem('device'))) {
    device = "-1";
  }
  if(sidebar_shown){
    var unhide = [];

    // Common paths for navigation. Added to both routes.
    // These values of the array will be mapped to the _data/navigation/country_lang.yml files
    // be sure to add the relevent values to it, in the order of display. (finalizing setup last, for instance)
    // 
    // The key/propery name must match the value associated with the page in the methods variable above
    //
    var device_common = {
      "0": ["letterbomb", "hbc", "bootmii", "priiloader"],
      "1": ["wilbrand", "hbc", "bootmii", "priiloader"],
      "2": ["bluebomb", "multiple-options"],
      "3": ["flashhax", "hbc", "bootmii", "priiloader"],
      "4": ["str2hax", "hbc", "bootmii", "priiloader"]
    }
    // Can add custom routing if necessary but currently both routes are identical
    var device_wii =  Object.assign({}, device_common,{
      // custom routing here
      // example: "0": ["letterbomb", "hbc", "bootmii", "priiloader"],
      "5": ["multiple-options", "hbc", "bootmii", "priiloader"],
      "7": ["multiple-options", "hbc", "bootmii", "priiloader"],
      "8": ["multiple-options", "hbc", "bootmii", "priiloader"],
      "9": ["multiple-options", "hbc", "bootmii", "priiloader"]
    });
    var device_mini = Object.assign({}, device_common,{
      // custom routing here
      "6": ["bluebomb", "hbc-mini", "priiloader", "cios-mini", "wnd-mini"],
      "8": ["bluebomb", "hbc-mini", "priiloader", "cios-mini", "wnd-mini"],
      "9": ["bluebomb", "hbc-mini", "priiloader", "cios-mini", "wnd-mini"],
      "10": ["bluebomb", "hbc-mini", "priiloader", "cios-mini", "wnd-mini"],
      "11": ["bluebomb", "hbc-mini", "priiloader", "cios-mini", "wnd-mini"]
    });
    var route = {
      "-1": device_common,
      "0": device_wii,
      "1": device_mini,
    }
    unhide = unhide.concat(route[device][method]);
    if(typeof unhide !== 'undefined' && unhide.length > 0){
      unhide.push("get-started");
      var ol = $('.sidebar.sticky .nav__list .nav__items ol');
      for (var i = 0; i < unhide.length; i++){
        ol.children('li[data-name="' + unhide[i] + '"]').css("display", "");
      }
      ol.children().each(function(idx, li) {
        var link = $(li).find("a").attr('href');
        var name = $(li).attr('data-name');
        if((window.location.href.endsWith(link) ||
            window.location.href.endsWith(link + "/") ||
            window.location.href.indexOf(link + "#") > -1 ||
            window.location.href.indexOf(link + ".html") > -1)
            && name !== "home"){
          $(li).addClass("active");
          return false;
        }
        $(li).addClass("completed");
      });
      if (ol.children(".active").css("display") != "none"){
        $('.sidebar.sticky').css("display", "inherit");
      }
    }
  }
/* hacks-guide change end */
});
