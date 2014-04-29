(function codeSmell(global, $) {
	var $list = $('#tweets');
	var promise = $.getJSON('api/index.php');

	promise.done(function(data) {
		console.log(data);
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
		var img = '<a href="https://twitter.com/' + status.user.screen_name + '"><img src="' + status.user.profile_image_url + '" /></a>';
		var author = '<h3>@<a href="https://twitter.com/' + status.user.screen_name + '">' + status.user.screen_name + '</a></h3>';
		$item = $('<li hidden>' +
			img +
			author +
			status.text +
		'</li>');
		$item.linkify();
		$list.prepend($item);
		$item.fadeIn( "slow" );
	}

})(window, jQuery);