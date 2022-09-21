jQuery(document).ready(function($){

	"use strict";
	
	// Fixed header
	jQuery('.fixedheader').affix({
	    offset: {
	    	top: 40
	    }
	});
	jQuery('.fullfixed').affix({
		 offset: {
	    	top: 90
	    }
	});
})