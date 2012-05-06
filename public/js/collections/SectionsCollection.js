/**
 * Backbone Collection
 * http://documentcloud.github.com/backbone/#Collection
 *
 */
define(['jquery', 'underscore', 'backbone', 'SectionModel']
, function ($, _, Backbone, SectionModel, undefined) {
	'use strict';

	return Backbone.Collection.extend({

		model: SectionModel

		, url: '/'

		// @todo This can probably be done with a built in Backbone method
		, request: function (sectionId) {
			return $.get(sectionId, {raw: 1});
		}


		/**
		 *
		 * @params {Backbone.Model} requestModel
		 */
		, load: function (requestModel) {
			var collection = this
			, activeSection = this.getActive()
			, requestIndex = this.indexOf(requestModel)
			, activeIndex
			, sectionsToRequest
			, requestedSections = [];

			if (!activeSection) {
				sectionsToRequest = [this.at(requestIndex)];
			}
			// Get all sections between the active section and the requested section
			else {
				activeIndex = this.indexOf(activeSection);
				sectionsToRequest = activeIndex < requestIndex
					? this.toArray().slice(activeIndex + 1, requestIndex + 1)
			        : this.toArray().slice(requestIndex, activeIndex);
			}

			// We have to get fancy if we are requesting more than one section at a time
			// @todo abstract this implementation so that the same logic could be used for sectionToRequest > 1 && sectionToRequest == 1
			if (sectionsToRequest.length > 1) {
				// Build an array of requested sections
				_.each(sectionsToRequest, function (section, i) {
					requestedSections[i] = collection.request(section.id);
				});

				// Using apply() means each of our response arguments will be in the form "response, responseText, jqXHR"
				// Using done() allows us to wait for all section requests to return, we can then load them in order.
				$.when.apply($, requestedSections).done(function () {
					// Iterate over each response argument and "load" the blocks into their corresponding Model
					_.each(arguments, function (args) {
						var response = args[0];
						collection.get(response.id).set('blocks', response.blocks);
					});
				});
			}
			else if (sectionsToRequest.length == 1){
				collection.request(sectionsToRequest[0].id).done(function (response) {
					collection.get(response.id).set('blocks', response.blocks);
				});
			}

			else {
				// @todo
			}
		}


		/**
		 *
		 * @returns {Backbone.Model}
		 */
		, getActive: function () {
			return this.get(this.active);
		}


		/**
		 * @params {Backbone.Model} sectionModel
		 * @returns {Backbone.Model}
		 */
		, setActive: function (sectionModel, eventName) {
			var activeSection = this.getActive();

			// @todo better error handling
			if (!sectionModel) {
				throw 'Invalid section';
			}

			// Has this section already been loaded?
			// No blocks == Not loaded
			if (!sectionModel.has('blocks')) {
				this.load(sectionModel);
			}

			// First, deactivate the already active section
			if (activeSection) {
				activeSection.set({isActive: false, lastAlteredBy: eventName});
			}

			// Now, set the new section as "active"
			this.active = sectionModel.id;
			sectionModel.set({isActive: true, lastAlteredBy: eventName});

			return sectionModel;
		}


		/**
		 * @params {String} sectionId
		 * @returns {Backbone.Model}
		 */
		, setActiveById: function (sectionId, eventName) {
			return this.setActive(this.get(sectionId), eventName);
		}


		/**
		 * Get the previous model in the collection
		 *
		 * @params {Backbone.Model} [activeModel]
		 * @returs {Bakbone.Model|undefined}
		 */
		, prev: function(activeModel) {
			activeModel = activeModel || this.getActive();

			var i = this.indexOf(activeModel);

			if (i <= 0) {
				return;
			}

	        return this.at(i - 1);
	    }


		/**
		 * Get the next model in the collection
		 *
		 * @params {Backbone.Model} [activeModel]
		 * @returs {Bakbone.Model|undefined}
		 */
		, next: function(activeModel) {
			activeModel = activeModel || this.getActive();

			var i = this.indexOf(activeModel);

			if (i >= this.length) {
				return;
			}

			return this.at(i + 1);
        }


		/**
		* Using the currently active section as context, sets the previous section as active
		*/
		, setPrevActive: function (eventName) {
			var activeModel = this.getActive()
			, prevModel = this.prev(activeModel);

			if (!_.isEmpty(prevModel)) {
				this.setActive(prevModel, eventName);
			}
		}


		/**
		 * Using the currently active section as context, sets the next section as active
		 */
		, setNextActive: function (eventName) {
			var activeModel = this.getActive()
			, nextModel = this.next(activeModel);

			if (!_.isEmpty(nextModel)) {
				this.setActive(nextModel, eventName);
			}
		}


		, sync: function (method, model) {
			console.log(arguments, 'sync');
		}
	});
});