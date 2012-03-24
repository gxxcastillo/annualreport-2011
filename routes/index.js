// @todo this probably needs to go into a model somewhere
//var navData = {
//	title: 'dataviz'
//	, navItems: [
//		{
//			name: 'borrowers'
//			, text: 'borrowers'
//		}
//		, {
//			name: 'lenders'
//			, text: 'lenders'
//		}
//		, {
//			name: 'site'
//			, text: 'web site'
//		}
//		, {
//			name: 'partners'
//			, text: 'partners'
//		}
//		, {
//			name: 'ecosystem'
//			, text: 'kiva ecosystem'
//		}
//		, {
//			name: 'stories'
//			, text: 'stories from the field'
//		}
//		, {
//			name: 'press'
//			, text: 'press & promotions'
//		}
//		, {
//			name: 'fundraising'
//			, text: 'fundraising'
//		}
//	]
//};

var NavProvider = require('./nav-provider.js').NavProvider;
var navProvider = new NavProvider();

module.exports =  function (req, res) {
    navProvider.findAll(function(error, navData){
        res.render('index', navData);
     });

};
