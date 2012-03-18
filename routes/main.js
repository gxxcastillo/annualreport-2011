var viewData = {
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
}


module.exports =  function (req, res) {
	res.render('index', viewData);
};