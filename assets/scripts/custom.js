$(document).ready(function(){
	
/*
* Headroom
**/
	$("#header").headroom();

	$("header").headroom({
		"offset": 205,
		"tolerance": 5,
		"classes": {
			"initial": "animated",
			"pinned": "slideDown",
			"unpinned": "slideUp"
			}
		});

	// to destroy
	$("#header").headroom("destroy");

/*
* Scrollify
**/
	$(function(){
		$.scrollify({
			section: ".scrollify-section",
			interstitialSection : ".leaf .contact .footer",
			setHeights: false,
			touchScroll: false,

			before:function(i,panels) {
		      var ref = panels[i].attr("data-section-name");

		      $(".pagination .active").removeClass("active");

		      $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");

		      var ref = panels[i].attr("data-section-name");

		      if(ref==="breaking-away") {
		        $(".breaking-away .carousel-box-shadow").addClass("animate");
		      }
		      if(ref==="intro") {
		        $(".breaking-away .carousel-box-shadow").removeClass("animate");
		      }
		      if(ref==="testimonials") {
		        $(".breaking-away .carousel-box-shadow").removeClass("animate");
		      }
		    },

		    afterRender:function() {
		      var pagination = "<ul class=\"pagination\">";
		      var activeClass = "";
		      $(".panel").each(function(i) {
		        activeClass = "";
		        if(i===0) {
		          activeClass = "active";
		        }
		        pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
		      });

		      pagination += "</ul>";

		    }
		});
	});

/*** Hide Navigation Bar on Load ***/
	$( document ).ready(function(){
		$(".pagination").css({"display": "none", "visibility": "hidden"});
	});

/*** Show Navigation on Scroll ***/
	$( document ).scroll(function(){
		$(".pagination").css({"display": "all", "visibility": "visible"});
		    if ($(this).scrollTop()==0) {
		    	$('.pagination').fadeOut(0.2);
		    }
		    else {
		    	$('.pagination').fadeIn(0.5);
		    }
	});

/*** Links ***/
	$(".links li a[href='#contact']").click(function(){
		$.scrollify.move("#contact");
	});

/*** Pagination ***/
	$(".pagination li a[href='#intro']").click(function(){
		$.scrollify.move("#intro");
	});

	$(".pagination li a[href='#breaking-away']").click(function(){
		$.scrollify.move("#breaking-away");
	});

	$(".pagination li a[href='#why-right-now']").click(function(){
		$.scrollify.move("#why-right-now");
	});

	$(".pagination li a[href='#testimonials']").click(function(){
		$.scrollify.move("#testimonials");
	});

	$(".pagination li a[href='#deep-dive']").click(function(){
		$.scrollify.move("#deep-dive");
	});

/*** Learn More ***/
	$("#learnMore").click(function(){
		$.scrollify.move("#breaking-away");
	});

	$("#learnMore02").click(function(){
		$.scrollify.move("#why-right-now");
	});

	$("#learnMore03").click(function(){
		$.scrollify.move("#testimonials");
	});

	$("#learnMore04").click(function(){
		$.scrollify.move("#deep-dive");
	});

/*
* VIDEO
**/
	// ANIMATED MODAL
	$("#myAnimatedModal").animatedModal();
	//MODAL 01
    $("#modal01").animatedModal();
    //MODAL 02
    $("#modal02").animatedModal({
        modalTarget:'modal-02'
    });
    $("#modal02g").animatedModal({
        modalTarget:'modal-02'
    });
    $("#modal03").animatedModal({
        modalTarget:'leafModal'
    });
	// SLICK Carousel
	$(".carousel-box-shadow").slick({
		dots: true,
		// infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		//MAGIC
		responsive: [{
			breakpoint: 768,
			settings: "unslick" // destroys slick
		}]
	});

	$("#share").jsSocials({
		showLabel: false,
    	showCount: false,
        shares: ["twitter", "facebook", "googleplus", "linkedin", "email"]
    });
});
