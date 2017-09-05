
var antsTriggerTrackingOk = false;
var antsSubmitForm = function(){
		   
        var email = "";
        var hoten = "";
        var phone = "";
        var service = "";
        var content = "";

        // for desktop
    	hoten = jQuery('.formkham input[name="hoten"').val();
    	email = jQuery('.formkham input[name="email"').val();
    	phone = jQuery('.formkham input[name="headphone"').val();
    	service = jQuery('.formkham select[name="dichvu"').val();
    	content = jQuery('.formkham textarea[name="content"').val();

	    if(hoten == "" || email == "" || phone == ""){
			return false;
	   	}	    

	   	var goalId = 584078701;

	   	service = service.toLowerCase();
	   	
	   	if (service == 'hút mỡ') {
	   		goalId = 584088101;
	   	} else if (service == 'căng da chỉ vàng') {
	   		goalId = 584088103;
	   	} else if (service == 'âm đạo, nhũ hoa') {
	   		goalId = 584088105;
	   	} else if (service == 'thẩm mỹ mắt') {
	   		goalId = 584088107;
	   	} else if (service == 'thẩm mỹ mũi') {
	   		goalId = 584088111;
	   	} else if (service == 'răng, hàm') {
	   		goalId = 584088113;
	   	} else if (service == 'nâng ngực, nâng mông') {
	   		goalId = 584088115;
	   	} else if (service == 'điều trị da') {
	   		goalId = 584088117;
	   	} else if (service == 'cấy mỡ') {
	   		goalId = 584088119;
	   	} else if (service == 'phun xăm') {
	   		goalId = 584088123;
	   	} else if (service == 'detox') {
	   		goalId = 584088129;
	   	}

	    var  infoCustomTargetKey = [
			{   
				field: 'service',
				value: service
			 }
		];

		var userInfo = {
			name: hoten, // Họ tên
		    phone: phone, // Điện thoại
		    email: email,
		    description : content,
		    others:  JSON.stringify(infoCustomTargetKey)
		};
		
		console.log('userInfo:' , userInfo);  
		adx_analytic.trackingEvent('tup', userInfo, true, goalId);


}

var antsSubmitFormLienHe = function(){
		
		try {
			var email = "";
	        var hoten = "";
	        var phone = "";
	        var service = "Liên hệ";
	        var content = "";
	        var date = "";

	        // for desktop
	    	hoten = jQuery('#entry_1431387140').val();
	    	email = jQuery('#entry_1453085291').val();
	    	phone = jQuery('#entry_1511818966').val();
	    	date = jQuery('#entry_542910917').val();
	    	content = jQuery('#entry_147923081').val();

		    if(hoten == "" || email == "" || phone == "" || date == "" || email.indexOf('@') < 0 ){
				return false;
		   	}	    

		   	antsTriggerTrackingOk = true;
		    var  infoCustomTargetKey = [
			{   
				field: 'service',
				value: service
			 },
			 {   
				field: 'date_booked',
				value: date
			 }
			];

			var userInfo = {
				name: hoten, // Họ tên
			    phone: phone, // Điện thoại
			    email: email,
			    description : content,
			    others:  JSON.stringify(infoCustomTargetKey)
			};
			
			console.log('userInfo:' , userInfo);  
			adx_analytic.trackingEvent('tup', userInfo, true, 584078699);
		} catch(e) {
			jQuery("#ss-submit" ).prop("type","submit") ;
			antsTriggerTrackingOk = true;
			console.error(e);
		}
        

}


var antsDeferQuery = function(method) {
    
    if (window.jQuery)
        method();
    else
        setTimeout(function() { antsDeferQuery(method) }, 50);
};

antsDeferQuery(function () {

	console.log('load antsDeferQuery');

	jQuery(document).ready(function() {

		//jQuery(".wpcf7-submit" ).prop("type","button") ;
	    jQuery(".formkham .wpcf7-form" ).on('submit', function(e) {
			
	    		console.log('load antsSubmitForm');
		    	antsSubmitForm();
		    	setTimeout( function(){
		    		console.log('deplay 2s');
		    		//jQuery(".wpcf7-submit" ).prop("type","submit") ;
		    		//jQuery(".wpcf7-submit" ).trigger('click');
		    		return true;
		    	}, 2000);

	    });

	    var url = window.location.href;
	    if (url.indexOf('lien-he') > 0) {

	    	jQuery("#ss-submit" ).prop("type","button") ;
	    	jQuery("#ss-submit" ).on('click', function(e) {
				
				if (jQuery("#ss-submit").attr('type') == 'button') {			
		    		console.log('load antsSubmitForm');
			    	
			    	
			    	antsSubmitFormLienHe();	


			    	if (antsTriggerTrackingOk) {
				    	setTimeout( function(){
				    		console.log('deplay 2s');
				    		jQuery("#ss-submit" ).prop("type","submit") ;
				    		jQuery("#ss-submit" ).trigger('click');
				    	}, 2000);
			    	}
		    	}

	    	});

	    }

	});  	
 
});