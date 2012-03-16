// Use this to feed the data in for each block
var sections = {
	borrowers: {
		title: 'Borrowers'
		, blocks: [
			{
				title: 'block title'
				, style: 'styleName'
				, bgImage: '/images/990541.jpg'
				, link: '#'
			}
			, {
				title: 'block title'
				, style: 'styleName'
				, bgImage: '/images/990541.jpg'
				, link: '#'
			}
			, {
				title: 'block title'
				, style: 'styleName'
				, bgImage: '/images/990541.jpg'
				, link: '#'
			}
			, {
				title: 'block title'
				, style: 'styleName'
				, bgImage: '/images/990541.jpg'
				, link: '#'
			}
			, {
				title: 'block title'
				, style: 'styleName'
				, bgImage: '/images/990541.jpg'
				, link: '#'
			}
		]
	}

	, lenders: {
		title: 'Lenders'
		, blocks: [
			{
				title: 'block title'
				, style: 'styleName'
				, bgImage: '/images/990541.jpg'
				, link: '#'
			}
		]
	}
};


// This is the newer version, as apposed to using /r/:section, we now do /:section?raw=1
module.exports = function (req, res) {
	if (req.query['raw']) {
		// return json object representation of this view, broken up into "blocks".
		// Rendering will then iterate over each block.  (no frame)

		var viewData = sections[req.params.section];

		if (viewData) {
			viewData.success = true;
		} else {
			viewData = {};
			viewData.success = false;
		}

		res.send(viewData);
	} else {
		res.render('index', {title: 'dataviz'});
	}
};