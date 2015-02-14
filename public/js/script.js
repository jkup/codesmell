(function codeSmell(global, $) {
	var $list = $('#tweets');
	var promise = $.getJSON('/api.json');

	promise.done(function(data) {
		var delay = 1000;
		for(var i = 0; i < data.length; i++) {
			(function(status) {
				setTimeout(function() {
					addTweet(status);
				}, delay);
			})(data[i]);
			delay += 5000;
		}
	});

	function addTweet(status) {
		var img = '<a href="https://twitter.com/' + status.user_name + '"><img src="' + status.user_image + '" /></a>';
		var author = '<h3>@<a href="https://twitter.com/' + status.user_name + '">' + status.user_name + '</a></h3>';
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
