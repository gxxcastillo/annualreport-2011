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

var SectionProvider = require('./section-provider.js').SectionProvider;
var sectionProvider = new SectionProvider();

module.exports = function (req, res) {
    var sections = [];
    sectionProvider.findAll(function(error, sectionData){
        sections = sectionData;
    });
	var viewData = sections[0][req.params.section];

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