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
				, value: '2.5'
				, unit: 'Mins'
				, label: 'avg. time on site'
				, context: 'vs. 2010 5.1 mins'
			}
 			, {
				name: 'dataMetric'
				, cssClass: 'g2 h2'
				, value: '1.5'
				, unit: 'Mins'
				, label: 'avg. time on site'
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
				name: 'dataMetric'
				, cssClass: 'g1 h1'
				, value: '5.5'
				, unit: 'Mins'
				, label: 'avg. time on site'
				, context: 'vs. 2010 5.1 mins'
			}
		]
	}
	, site: {
		title: 'Web Site'
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
				, cssClass: 'g1 h'
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
	, fundraising: {
		title: 'Fundraising'
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
	if (req.query['raw'] == 1) {
		// return json object representation of this view, broken up into "blocks".
		// Rendering will then iterate over each block.  (no frame)

		var viewData = sections[req.params.section];

		if (viewData) {
			viewData.success = true;
		} else {
			viewData = {
				success: false
			};
		}

		res.send(viewData);
	} else {
		res.redirect('/');
	}
};