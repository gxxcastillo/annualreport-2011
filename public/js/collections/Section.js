require(['jquery', 'underscore', 'backbone', 'dv', 'SectionsCollection'], function ($, _, Backbone, dv, SectionsCollection) {

	// @todo, this is also set on the server side, should only be set in one spot
	// Purpose of this is to set a sequential "order"

	return Backbone.Model.extend({

		defaults: {
			currentState: ''
			, renderedSections: []
			, sections: [
				'borrowers'
				, 'lenders'
				, 'partners'
				, 'site'
				, 'ecosystem'
				, 'stories'
				, 'press'
				, 'finances'
			]
		}


		, setActive: function () {
			this.set({active: true});
		}


		, isActive: function () {
			return this.get('active');
		}


		, setRendered: function () {
			this.set({rendered: true});
		}


		, isRendered: function () {
			this.get('rendered');
		}
	});
});