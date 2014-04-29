(function codeSmell(global, $) {
	var $list = $('#tweets');
	var promise = $.getJSON('api/index.php');

	promise.done(function(data) {
		var delay = 1000;
		for(var i = 0; i < data.statuses.length; i++) {
			console.log(data.statuses[i]);
			(function(status) {
				setTimeout(function() {
					addTweet(status);
				}, delay);
			})(data.statuses[i]);
			delay += 5000;
		}
	});

	function addTweet(status) {
		var img = '<img src="' + status.user.profile_image_url + '" />';
		var author = '<h3>' + status.user.screen_name + '</h3>';
		$item = $('<li hidden>' +
			img +
			author +
			status.text +
		'</li>');
		$list.prepend($item);
		$item.fadeIn( "slow" );
	}

})(window, jQuery);