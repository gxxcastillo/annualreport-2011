define(['jquery'], function ($) {
	'use strict';
	var $obj = $({});

	return {
		url: {
			host: window.location.host
		}


		, publish: function () {
			$obj.trigger.apply($obj, arguments);
		}


		, subscribe: function () {
			$obj.on.apply($obj, arguments);
		}


		, unsubscribe: function () {
			$obj.off.apply($obj, arguments);
		}
	};
});

/**
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
 	, count =0;

 	// instantiate isotope
 	$('#main').isotope({
 		animationEngine: 'best-available'
 		, itemSelector: '.block'
 	});

 	function appendBlock() {
 		modelData.content = 'Number ' + count++;

 		newBlock = new blockView({
 			model: modelData
 			, className: 'block g2'
 		});

 		$('#main').isotope( 'insert', newBlock.$el ).isotope('appended', newBlock.$el );
 	};

 	var $primaryNav = $('nav.primaryNav');

 	// Navigation
 	$primaryNav.on('click', 'li', function (e) {
 		e.preventDefault();

 		var $el = $(e.target)
 		, page = $el.data('dv-page');

 		$primaryNav.find('li.active').removeClass('active');
 		$el.parent().addClass('active');

 		var stateObj = {
 			page: page
 		}

 		appendBlock();

 		history.pushState(stateObj, page, page);
 	});

 	// Fires when you go to a page
 	window.onpopstate = function () {
 		console.log('log');
 	}
 });

*/