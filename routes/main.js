var fs = require('fs')
, viewData = {
	title: 'dataviz'
	, navItems: [
		{
			name: 'borrowers'
			, text: 'borrowers'
		}
		, {
			name: 'lenders'
			, text: 'lenders'
		}
		, {
			name: 'site'
			, text: 'web site'
		}
		, {
			name: 'partners'
			, text: 'partners'
		}
		, {
			name: 'ecosystem'
			, text: 'kiva ecosystem'
		}
		, {
			name: 'stories'
			, text: 'stories from the field'
		}
		, {
			name: 'press'
			, text: 'press & promotions'
		}
		, {
			name: 'fundraising'
			, text: 'fundraising'
		}
	]
	, partials: {
		sidebar: fs.readFileSync('/localhost/dataviz/views/includes/sidebar.hogan', 'utf8')
	}
}


module.exports =  function (req, res) {
	res.render('index', viewData);
};