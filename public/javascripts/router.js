define(['jquery', 'backbone'], function ($, Backbone) {

	// Keep the router private
	var Router = Backbone.Router.extend({
		routes: {
			'borrowers': 'showSection'
			, 'lenders': 'showSection'
		}

		, showSection: function () {
			console.log(arguments);
		}

		, defaultAction: function (action) {
			console.log('no route:', action);
		}
	});


	return {
		initialize: function () {
			new Router();

			//Wait for domReady.  IE history fallback relies on an iframe.
			$(Backbone.history.start({pushState: true}));
		}
	};


});