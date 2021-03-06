(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        $(".homepage-slider").owlCarousel({
            items: 1,
            loop:true,
            nav:true,
            dots:true,
            navText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'>"],
            autoplay:true,
        });
        
        $(".case-study-carousel").owlCarousel({
            items: 3,
            loop:true,
            margin:30,
            nav:false,
            dots:true,
            autoplay:true,
        });
        
        $(".testimonial-carousel").owlCarousel({
            items: 1,
            loop:true,
            nav:false,
            dots:true,
            autoplay:true,
        });
        
        $(".logo-carousel").owlCarousel({
            items: 7,
            margin:30,
            loop:true,
            nav:false,
            dots:false,
			autoplay:true,
        });
        
        $(".testimonial-carousel-homepage-2").owlCarousel({
            items: 1,
            loop:true,
            nav:false,
            dots:true,
            autoplay:true,
        });
        
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	