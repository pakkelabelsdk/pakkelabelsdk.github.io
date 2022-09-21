jQuery(document).ready(function(){
	var $ = jQuery;

	$('.w3t-topbar-box').each(function(){
		var pos = $(this).attr('data-pos');
		var move = $(this).attr('data-move');
		var name = $(this).attr('id');
		//console.log(pos);
		setTimeout(function(){
			if (pos == 'top') {
				$('#'+name).css({
					'top' : 0,
					'transition' : 'top 0.5s',
				});
			} else {
				$('#'+name).css({
					'bottom' : 0,
					'transition' : 'bottom 0.5s',
				});
			}
		}, 300)

	});

	$('.close-icon').click(function(){
		var nametp = $(this).parent().attr('id');
		var moveDistance = $(this).parent().attr('data-height');
		var moveTime = $(this).parent().attr('data-move-time');
		var moveActive = $(this).parent().attr('data-smooth-close');

		if (moveActive == 'on') {
			$('#' + nametp).css({
				'top' : '-' + moveDistance + 'px',
				'transition' : 'top ' + moveTime + 's',
			});
		} else {
			$('#' + nametp).css({
				'top' : '-' + moveDistance + 'px',
			});
		}
	});	

});