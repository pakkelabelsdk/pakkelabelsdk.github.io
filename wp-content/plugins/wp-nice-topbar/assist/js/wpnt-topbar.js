jQuery(document).ready(function(){
	//console.log(wpnt_settings);
	var $ = jQuery;
	var pageId = $('body').attr('class').match(/\d+/);
	for (i = 0; i < wpnt_settings.length; i++) {
		var checkType = wpnt_settings[i]['wpnt_place'];
		//console.log(checkType);
		var checkId = '';
		if (checkType == 'page') {
			checkId = wpnt_settings[i]['wpnt_page'];
		}
		if (checkType == 'post') {
			checkId = wpnt_settings[i]['wpnt_post'];	
		}
		//console.log(checkType);
		switch (checkType) {
			case 'page':
			case 'post':
				if (checkId == pageId) {
					// Create topbar with settings
					topbar = wpnt_settings[i]['wpnt_elem'];
					//console.log(topbar);
					$('body').append(topbar);
				}
			break;
			case 'all':
				topbar = wpnt_settings[i]['wpnt_elem'];
				$('body').append(topbar);
			break;
			case 'disabled':
			default:

			break;
		}

    var form = $('#mcp_form');

    if ( form.length > 0 ) {
        $('form input[type="submit"]').bind('click', function ( event ) {
            if ( event ) event.preventDefault();
            // validate_input() is a validation function I wrote, you'll have to substitute this with your own.
            register(form);
        });
    }

	}
});

function register(form) {
    jQuery.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize(),
        cache       : false,
        dataType    : 'json',
        contentType: "application/json; charset=utf-8",
        error       : function(err) { alert("Could not connect to the registration server. Please try again later."); },
        success     : function(data) {
            if (data.result != "success") {
                // Something went wrong, do something to notify the user. maybe alert(data.msg);
                jQuery('#message').append('NOT OK');
            } else {
                // It worked, carry on...
                jQuery('#message').append('OK');
            }
        }
    });
}