require(['jquery', 'underscore', 'backbone', 'dv'], function ($, _, Backbone, dv) {

	return Backbone.Model.extend({

		defaults: {
			isActive: false
		}

		, initialize: function (data) {
			this.name = data.name;
			this.text = data.text;
		}
	})
});