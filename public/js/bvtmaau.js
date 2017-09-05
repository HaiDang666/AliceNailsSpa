var App = {
    owlCarousel: function() {

        // images
        var owl2 = jQuery("#image-slide");
        owl2.owlCarousel({
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            pagination: false
        });
        jQuery(".inext").click(function() {
            owl2.trigger('owl.next');
        })
        jQuery(".iprev").click(function() {
            owl2.trigger('owl.prev');
        })
        // images
        var owl3 = jQuery("#owl3");
        owl3.owlCarousel({
            slideSpeed: 300,
            singleItem:true,
            paginationSpeed: 400,
            autoPlay: 3000,
            pagination: true
        });
    },
    scrolltoDiv: function() {
        jQuery(".navbar-menu .nav a").click(function(e) {
            // Prevent a page reload when a link is pressed
            e.preventDefault();
            var $toDiv = 0,
                    $href = jQuery(this).attr('href');
            if ($href) {
                $toDiv = jQuery($href).offset().top;
            }

            jQuery('html,body').animate({
                scrollTop: $toDiv
            }, 'slow');
            // Call the scroll function
            return false;
        });
    }
};
jQuery(document).ready(function() {
    App.owlCarousel();
    App.scrolltoDiv();
});
// jQuery(window).scroll(function(){
// 	if(jQuery(this).scrollTop() > 75){
// 	    jQuery("#logo").addClass('logo-scroll');
// 	    jQuery("#logo").removeClass('logo');
// 	}
// 	else{
// 	    jQuery("#logo").addClass('logo');
// 	    jQuery("#logo").removeClass('logo-scroll');
// 	}
// });


jQuery(document).ready(function($) {
    /***************** Waypoints ******************/
    jQuery('.wp1').waypoint(function() {
        jQuery('.wp1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    jQuery('.wp2').waypoint(function() {
        jQuery('.wp2').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    jQuery('.wp3').waypoint(function() {
        jQuery('.wp3').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    jQuery('.wp4').waypoint(function() {
        jQuery('.wp4').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });
    jQuery('.wp5').waypoint(function() {
        jQuery('.wp5').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });
    jQuery('.wp6').waypoint(function() {
        jQuery('.wp6').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });
    jQuery('.wp7').waypoint(function() {
        jQuery('.wp7').addClass('animated zoomInDown');
    }, {
        offset: '75%'
    });

});