/**
 * Backbone Model
 * http://documentcloud.github.com/backbone/#Model
 */

define(['jquery', 'underscore', 'backbone', 'dv'], function ($, _, Backbone, dv) {

	return Backbone.Model.extend({
		initialize: function (blockData) {
			this.set(blockData);
		}
	});
});




/**


 switch (name) {
		case 'sectionTitle':

			break;
		case 'dataMetric':

			break;
		case 'profile':

			break;
		case 'highlight':

			break;
		case 'hTable':

			break;
		case 'vTable':

			break;
		case 'text':

			break;
		default:

	}

 **/