// @todo this probably needs to go into a model somewhere
var viewData = {
	title: 'dataviz'
	, navMenuItems: [
		{
			name: 'borrowers'
			, text: 'borrowers'
		}
		, {
			name: 'lenders'
			, text: 'lenders'
		}
		, {
			name: 'partners'
			, text: 'partners'
		}
		, {
			name: 'site'
			, text: 'web site'
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
			name: 'finances'
			, text: 'financial health'
		}
	]
};

// @contrived...but then, so is this whole project
// @todo these are the menu items, in order: var navItems = ['borrowers', 'lenders', 'site', 'partners', 'ecosystem', 'stories', 'press', 'fundraising'];

// @todo This mapping get produced dynamically
var navItemMapping = {
	borrowers: 1
	, lender: 2
	, site: 3
	, partners: 4
	, ecosystem: 5
	, stories: 6
	, press: 7
	, fundraising: 8
}

viewData.navItemMapping = navItemMapping;

module.exports =  function (req, res) {
	res.render('index', viewData);
};