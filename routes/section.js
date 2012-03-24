// Use this to feed the data in for each block

/**
 *
 * comon view properties:
 *
 *
 * // colorbox requires colorbox content to be in the DOM somehwhere
 *
 * lightox: {
 *      els: []
 *     rel: '.selector' // gets set in the view
 * }
 *
 * or link: url
 *
 *
 *
 *
 */



var sections = {
	borrowers: {
		title: 'Borrowers'
		, blocks: [
			{
				name: 'dataMetric'
				, cssClass: 'g1 h3'
				, value: '5.5'
				, unit: 'Mins'
				, label: 'avg. time on site'
				, context: 'vs. 2010 5.1 mins'
			}
			, {
				name: 'profile'
				, cssClass: 'g1 h1'
				, img: '/img/blue.jpg'
				, username: 'Sean'
				, label: 'avg. time on site'
			}
 			, {
				name: 'highlight'
				, cssClass: 'g1 h3'
				, img: '/img/deer.jpg'
				, link: ''
				, c1: 'Most friends recruited to Kiva'
				, c2: '140'
				, c3: 'Erin, Vancouer Canada'
			}
			, {
				name: 'dataMetric'
				, cssClass: 'g1 h3'
				, value: '5.5'
				, unit: 'Mins'
				, label: 'avg. time on site'
				, context: 'vs. 2010 5.1 mins'
			}
			, {
				name: 'text'
				, label: 'the label'
				, cssClass: 'g1 h2'
				, value: ['change', 'good', 'support']
				, context: 'vs. 2010 5.1 mins'
			}
			, {
				name: 'dataMetric'
				, cssClass: 'g1 h1'
				, value: '4.5'
				, unit: 'Mins'
				, label: 'avg. time on site'
				, context: 'vs. 2010 5.1 mins'
			}
			, {
				name: 'hTable'
				, cssClass: 'g2 h1'
				, dataset: [
					{
						label: 'Facebook'
						, datum: '30%'
					}
					, {
						label: 'Twitter'
						, datum: '10%'
					}
					, {
						label: 'Email'
						, datum: '40%'
					}
					, {
						label: 'Kiva Cards'
						, datum: '20%'
					}
				]
				, label: 'Popular ways to invite friends to Kiva (Shares per month)'
			}
			, {
				name: 'profile'
				, cssClass: 'g1 h1'
				, img: '/img/blue.jpg'
				, username: 'Sean'
				, label: 'avg. time on site'
			}
 			, {
				name: 'highlight'
				, cssClass: 'g1 h3'
				, img: '/img/deer.jpg'
				, link: ''
				, c1: 'Most friends recruited to Kiva'
				, c2: '140'
				, c3: 'Erin, Vancouer Canada'
			}
			, {
				name: 'dataMetric'
				, cssClass: 'g1 h3'
				, value: '5.5'
				, unit: 'Mins'
				, label: 'avg. time on site'
				, context: 'vs. 2010 5.1 mins'
			}
			, {
				name: 'text'
				, label: 'the label'
				, cssClass: 'g1 h2'
				, value: ['change', 'good', 'support']
				, context: 'vs. 2010 5.1 mins'
			}
		]
	}
	, lenders: {
		title: 'Lenders'
		, blocks: [
			{
				name: 'dataMetric'
				, cssClass: 'g1 h3'
				, value: '5.5'
				, unit: 'Mins'
				, label: 'avg. time on site'
				, context: 'vs. 2010 5.1 mins'
			}
			, {
				name: 'text'
				, label: 'the label'
				, cssClass: 'g1 h2'
				, value: ['change', 'good', 'support']
				, context: 'vs. 2010 5.1 mins'
			}
			, {
				name: 'text'
				, label: 'the label'
				, cssClass: 'g1 h2'
				, value: ['change', 'good', 'support']
				, context: 'vs. 2010 5.1 mins'
			}
			, {
				name: 'highlight'
				, cssClass: 'g1 h3'
				, img: '/img/deer.jpg'
				, context: 'Most friends recruited to Kiva'
				, datum: '140'
				, descriptor: 'Erin, Vancouer Canada'
				, link: '#'
			}
		]
	}
	, site: {
		title: 'Web Site'
		, blocks: [
			{
				name: 'hTable'
				, cssClass: 'g2 h1'
				, dataset: [
					{
						label: 'Facebook'
						, datum: '30%'
					}
					, {
						label: 'Twitter'
						, datum: '10%'
					}
					, {
						label: 'Email'
						, datum: '40%'
					}
					, {
						label: 'Kiva Cards'
						, datum: '20%'
					}
				]
				, label: 'Popular ways to invite friends to Kiva (Shares per month)'
			}
			, {
				name: 'dataMetric'
				, cssClass: 'g1 h1'
				, value: '5.5'
				, unit: 'Mins'
				, label: 'avg. time on site'
				, context: 'vs. 2010 5.1 mins'
			}
 			, {
				name: 'dataMetric'
				, cssClass: 'g2 h2'
				, value: '5.5'
				, unit: 'Mins'
				, label: 'avg. time on site'
				, context: 'vs. 2010 5.1 mins'
			}
			, {
				name: 'dataMetric'
				, cssClass: 'g1 h1'
				, value: '5.5'
				, unit: 'Mins'
				, label: 'avg. time on site'
				, context: 'vs. 2010 5.1 mins'
			}
		]
	}
	, partners: {
		title: 'Partners'
		, blocks: [
			{
				name: 'dataMetric'
				, cssClass: 'g1 h3'
				, value: '5.5'
				, unit: 'Mins'
				, label: 'avg. time on site'
				, context: 'vs. 2010 5.1 mins'
			}
			, {
				name: 'dataMetric'
				, cssClass: 'g1 h1'
				, value: '5.5'
				, unit: 'Mins'
				, label: 'avg. time on site'
				, context: 'vs. 2010 5.1 mins'
			}
 			, {
				name: 'dataMetric'
				, cssClass: 'g3 h5'
				, value: '5.5'
				, unit: 'Mins'
				, label: 'avg. time on site'
				, context: 'vs. 2010 5.1 mins'
			}
			, {
				name: 'dataMetric'
				, cssClass: 'g1 h1'
				, value: '5.5'
				, unit: 'Mins'
				, label: 'avg. time on site'
				, context: 'vs. 2010 5.1 mins'
			}
		]
	}
	, ecosystem: {
		title: 'Kiva Ecosystem'
		, blocks: [
			{
				name: 'dataMetric'
				, cssClass: 'g1 h1'
				, value: '5.5'
				, unit: 'Mins'
				, label: 'avg. time on site'
				, context: 'vs. 2010 5.1 mins'
			}
			, {
				name: 'dataMetric'
					, cssClass: 'g1 h2'
				, value: '5.5'
				, unit: 'Mins'
				, label: 'avg. time on site'
				, context: 'vs. 2010 5.1 mins'
			}
 			, {
				name: 'dataMetric'
				, cssClass: 'g2 h3'
				, value: '5.5'
				, unit: 'Mins'
				, label: 'avg. time on site'
				, context: 'vs. 2010 5.1 mins'
			}
			, {
				name: 'dataMetric'
				, cssClass: 'g1 h4'
				, value: '5.5'
				, unit: 'Mins'
				, label: 'avg. time on site'
				, context: 'vs. 2010 5.1 mins'
			}
			, {
				name: 'dataMetric'
				, cssClass: 'g1 h5'
				, value: '5.5'
				, unit: 'Mins'
				, label: 'avg. time on site'
				, context: 'vs. 2010 5.1 mins'
			}
		]
	}
	, stories: {
		title: 'Stories From the Field'
		, blocks: [
			{
				name: 'highlight'
				, cssClass: 'g2 h2'
				, img: '/img/stache.jpg'
//	only use when clicking adds a link			, link: 'http://google.com'
				, lightbox: [
					{
						href: '/img/blue.jpg'
						, title: 'blue.jpg'
					}
					, {
						href: '/img/deer.jpg'
						, title: 'deer.jpg'
					}
					, {
						href: '/img/fish.jpg'
						, title: 'fish.jpg'
					}
				]
				, c2: 'Photo highlights'
				, c3: 'Best Kiva photos from 2011'
			}
			, {
				name: 'dataMetric'
				, cssClass: 'g1 h1'
				, value: '5.5'
				, unit: 'Mins'
				, label: 'avg. time on site'
				, context: 'vs. 2010 5.1 mins'
			}
 			, {
				name: 'dataMetric'
				, cssClass: 'g2 h2'
				, value: '5.5'
				, unit: 'Mins'
				, label: 'avg. time on site'
				, context: 'vs. 2010 5.1 mins'
			}
			, {
				name: 'dataMetric'
				, cssClass: 'g1 h1'
				, value: '5.5'
				, unit: 'Mins'
				, label: 'avg. time on site'
				, context: 'vs. 2010 5.1 mins'
			}
		]
	}
	, press: {
		title: 'Press & Promotions'
		, blocks: [
			{
				name: 'dataMetric'
				, cssClass: 'g1 h3'
				, value: '5.5'
				, unit: 'Mins'
				, label: 'avg. time on site'
				, context: 'vs. 2010 5.1 mins'
			}
			, {
				name: 'dataMetric'
				, cssClass: 'g1 h1'
				, value: '5.5'
				, unit: 'Mins'
				, label: 'avg. time on site'
				, context: 'vs. 2010 5.1 mins'
			}
 			, {
				name: 'dataMetric'
				, cssClass: 'g2 h2'
				, value: '5.5'
				, unit: 'Mins'
				, label: 'avg. time on site'
				, context: 'vs. 2010 5.1 mins'
			}
			, {
				name: 'dataMetric'
				, cssClass: 'g1 h1'
				, value: '5.5'
				, unit: 'Mins'
				, label: 'avg. time on site'
				, context: 'vs. 2010 5.1 mins'
			}
		]
	}
	, finances: {
		title: 'Financial Health'
		, blocks: [
			{
				name: 'dataMetric'
				, cssClass: 'g1 h3'
				, value: '5.5'
				, unit: 'Mins'
				, label: 'avg. time on site'
				, context: 'vs. 2010 5.1 mins'
			}
			, {
				name: 'dataMetric'
				, cssClass: 'g1 h1'
				, value: '5.5'
				, unit: 'Mins'
				, label: 'avg. time on site'
				, context: 'vs. 2010 5.1 mins'
			}
 			, {
				name: 'dataMetric'
				, cssClass: 'g2 h2'
				, value: '5.5'
				, unit: 'Mins'
				, label: 'avg. time on site'
				, context: 'vs. 2010 5.1 mins'
			}
			, {
				name: 'dataMetric'
				, cssClass: 'g1 h1'
				, value: '5.5'
				, unit: 'Mins'
				, label: 'avg. time on site'
				, context: 'vs. 2010 5.1 mins'
			}
		]
	}
};


module.exports = function (req, res) {
	var viewData = sections[req.params.section];

	if (viewData) {
		viewData.success = true;
	} else {
		viewData = {
			success: false
		};
	}

	if (req.query['raw'] == 1) {
		// return json object representation of this view, broken up into "blocks".
		// Rendering will then iterate over each block.  (no frame)

		res.send(viewData);
	} else {
		// @todo, this is temporary until we figure out how to serve the ":section" view from the server
		// @todo this works, but with no sidebar, and that is because the data for the sidebar is currently in the index.js route
		res.render('index', viewData);
	}
};