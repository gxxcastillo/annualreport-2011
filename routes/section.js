// Use this to feed the data in for each block
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