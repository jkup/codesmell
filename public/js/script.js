(function codeSmell(global, $) {
	var $list = $('#tweets');
	var cursor = {id: null};

	var intervalID = window.setInterval(function(){
		$.ajax({
			type: 'GET',
			url: '/api.json',
			data: cursor,
			success: function(data) {
				cursor.id = data.id;
				addTweet(data);
			}
		});
	}, 3000);

	function addTweet(status) {
		var img = '<a href="https://twitter.com/' + status.user_name + '"><img src="' + status.user_image + '" /></a>';
		var author = '<h3>@<a href="https://twitter.com/' + status.user_name + '">' + status.user_name + '</a></h3>';
		$item = $('<li hidden>' + img + author + status.text + '</li>');
		$item.linkify();
		$list.prepend($item);
		$item.fadeIn( "slow" );
	}

})(window, jQuery);
