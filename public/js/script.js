(function codeSmell(global, $) {
	var $list = $('#tweets');
	var promise = $.getJSON('/api.json');

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

	promise.fail(function( jqxhr, textStatus, error ) {
    	var err = textStatus + ", " + error;
    	console.log( "Request Failed: " + err );
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
