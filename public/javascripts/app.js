require.config({
    baseUrl: '/javascripts'
	, paths: {
		'order': 'lib/order'
		, 'jquery': 'lib/jquery'
		, 'underscore': 'lib/underscore'
		, 'backbone': 'lib/backbone'
		, 'handlebars': 'lib/handlebars'
		, 'app': 'lib/app'
		, 'jquery.isotope': 'lib/jquery.isotope'
		, 'jquery.infinitescroll': 'lib/jquery.infinitescroll'
		, 'blockView': 'views/blockView'
	}
});


require([
	'backbone'
	, 'handlebars'
	, 'jquery.isotope'
	, 'blockView'
]
, function (backbone, Handlebars, undefined, blockView) {
	'use strict';

	var newBlock
	, modelData = {title: 'blockTpl'}
	, count;

	// instantiate isotope
	$('#main').isotope({
		animationEngine: 'best-available'
		, itemSelector: '.block'
	});

	for (count = 0; count < 2; count++) {
		newBlock = new blockView({
			model: modelData
			, className: 'block g2'
		});

		$('#main').isotope( 'insert', newBlock.$el );
	}

	// Start appending
	count = 0;
	var intervalId = window.setInterval(function () {

		if (++count === 4) {
			window.clearInterval(intervalId);
		}

		modelData.content = 'Number ' + count;

		newBlock = new blockView({
			model: modelData
			, className: 'block g2'
		});

		$('#main').isotope( 'insert', newBlock.$el ).isotope('appended', newBlock.$el );

	}, 2000);
});