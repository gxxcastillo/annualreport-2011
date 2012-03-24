/**
 *
 * Useful links:
 * http://developers.facebook.com/docs/
 * http://developers.facebook.com/docs/reference/dialogs/feed/
 */

define(['jquery, underscore, dv'], function ($, _, dv) {
	'use strict';

	return {

		// Poor mans's facebook share, here as a backup option.
		postToFeedUrl: 'http://www.facebook.com/dialog/feed?app_id=123050457758183&link=http://developers.facebook.com/docs/reference/dialogs/&picture=http://fbrell.com/f8.jpg&name=Facebook%20Dialogs&caption=Reference%20Documentation&description=Using%20Dialogs%20to%20interact%20with%20users.&redirect_uri=http://www.example.com/response'

		, postToFeed: function () {

			// calling the API ...
			var obj = {
				method: 'feed',
				link: 'https://developers.facebook.com/docs/reference/dialogs/',
				picture: 'http://fbrell.com/f8.jpg',
				name: 'Facebook Dialogs',
				caption: 'Reference Documentation',
				description: 'Using Dialogs to interact with users.'
			};

			function callback(response) {
				console.log(response);
			}

			FB.ui(obj, callback);
		}
	};
});