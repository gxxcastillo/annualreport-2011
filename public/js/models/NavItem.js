define(['backbone'], function (Backbone) {

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