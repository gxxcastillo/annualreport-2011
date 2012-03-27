// @todo, had to do this to keep my changes to a minimum,
// basically, I need all the layoutData for rendering views and this was the quickest way to get back on track


/**
 * Constructor function
 *
 * @param [layoutData]
 */
LayoutProvider = function(layoutData){
	if (layoutData == 'defaultLayout') {
		this.save(this.defaults);
	} else if (layoutData){
		this.save(layoutData);
	}
};

LayoutProvider.prototype = {
	getLayoutData: function () {
		return this.layoutData;
	}

	, findById: function(id) {
		var result = this.layoutData[id];

		if (!result) {
			result = {
				success: false
				, message: 'Id not found: "' + id + '"'
			};
		}

		return result;
	}


	, save: function(layoutData) {
		this.layoutData = layoutData;
	}


	// These are the default properties that get set for the "layout"
	, defaults: {
		title: 'dataviz'
		, meta: {

		}
	}
};

module.exports = LayoutProvider;