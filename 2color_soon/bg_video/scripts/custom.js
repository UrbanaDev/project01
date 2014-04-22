$(document).ready(function(){
	
    // Gallery slider options
    var owl = $("#owl-slider");
    owl.owlCarousel({
        items : 4, 
        itemsDesktop : [1200,3], 
        itemsDesktopSmall : [900,3], 
        itemsTablet: [800,2], 
        itemsMobile : [500,2], 
        itemsMobile : [330,1] 
    });
	
    //Background slider options
	if(!(navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|IEMobile/i))) {
		$('#wrap').tubular({videoId: 'eoD672IB9gw'}); // where idOfYourVideo is the YouTube ID.At_qpmsYEpw
	};
	
    // Lightbox(Magnific popup) options                
    $('#owl-slider').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: { // options for gallery
            enabled: true
        }
    });
	
    // Countdown options               
    $(".countdown").jCounter({
        date: "1 january 2015 12:00:00", // Deadline date
        timezone: "Europe/Bucharest",
        format: "dd:hh:mm:ss",
        twoDigits: 'on',
        fallback: function() {
            console.log("count finished!")
        }
    });    
	           
    // Form validate options            
    $('#subscribe_form').validate({
        onfocusout: false,
        onkeyup: false,
        rules: {
            email: {
                required: true,
                email: true
            },
        },
        errorPlacement: function(error, element) {
            error.appendTo( element.closest("form"));
        },
        messages: {
            email: {
                required: "We need your email address to contact you",
                email: "Please, enter a valid email"
            }
        },
					
        highlight: function(element) {
            $(element)
        },                    
					
        success: function(element) {
            element
            .text('').addClass('valid')
        }
    }); 
				

    // Subscribe form MailChimp integration			
    $('#subscribe_form').submit(function() {
        $('.error').hide();
        $('.error').fadeIn();
        // submit the form
        if($(this).valid()){
            $('#subscribe_submit').button('loading'); 
            var action = $(this).attr('action');
            $.ajax({
                url: action,
                type: 'POST',
                data: {
                    newsletter_email: $('#subscribe_email').val()
                },
                success: function(data) {
                    $('#subscribe_submit').button('reset');
                    $('.error').html('Well done, you are now subscribed!');
                },
                error: function() {
                    $('#subscribe_submit').button('reset');
                    // Change subscribe form error message text here
                    $('.error').html('Oops! Something went wrong!');
                }
            });
        // return false to prevent normal browser submit and page navigation 
        }
        return false; 
    });
	  
	

                
    // Construktor  
    $('.settings_link').toggle(function(event){
        $(this).find('i').css({
            'transform': 'rotate(90deg)',
            'transition' : 'all linear 0.5s'
        },500);
        $(this).prev().animate({
            'marginLeft': '0'
        },500);
        event.preventDefault();
    },function(){
        $(this).find('i').css({
            'transform': 'rotate(-90deg)',
            'transition' : 'all linear 0.5s'
        },500);
        $(this).prev().animate({
            'marginLeft': '-140px'
        },500);
    });                
    $('.colors ul li a').click(function(event){
        $('.colors ul li a').removeClass('selected');
        $(this).addClass('selected');
                    
        var color = $(this).attr('data-color');
        if(color=='color1')less.modifyVars({
            '@color1': '#553762',
			'@color2': '#fff'
        });            
        if(color=='color2')less.modifyVars({
			'@color1': '#c4e8ff',
			'@color2': '#664b2e'
        });       
        if(color=='color3')less.modifyVars({
            '@color1': '#ffdf30',
			'@color2': '#333'
        }); 
        if(color=='color4')less.modifyVars({
			'@color1': '#b7244c',
			'@color2': '#fffbed'
        }); 
        if(color=='color5')less.modifyVars({
			'@color1': '#4b3118',
			'@color2': '#fffeef'
        });            
        if(color=='color6')less.modifyVars({
            '@color1': '#1b926c',
			'@color2': '#fff'
        });       
        if(color=='color7')less.modifyVars({
            '@color1': '#ffeded',
			'@color2': '#444'
        }); 
        if(color=='color8')less.modifyVars({
            '@color1': '#333',
			'@color2': '#eee'
        }); 
                    
        event.preventDefault();
    });
});