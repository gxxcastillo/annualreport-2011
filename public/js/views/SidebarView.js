define(['jquery', 'underscore', 'backbone', 'dv', 'hogan', 'text!views/sidebarView.hogan']
, function ($, _ ,Backbone, dv, hogan, tpl, undefined) {
	'use strict';

	return Backbone.View.extend({

		el: '#sidebar'

		, events: {
			'click .primaryNav a': 'navClickHandler'
		}


		, navClickHandler: function (event) {
			event.preventDefault();

			// @TODO QUICK HACK


			var sectionId = event.target.getAttribute('href');

			// @todo %HACK% Notifies the controller that this "setActive" is being triggered by a nav click
			dv.navClickTriggered = true;

			this.sections.setActiveById(sectionId);
		}


		/**
		 * @todo we have to return undefined for now as apposed to an empty string as Hogan treats empty string as truthy
		 *
		 */
		, getPrevUrl: function (activeSectionModal) {
			var prevModel = this.sections.prev(activeSectionModal);
			return prevModel ? prevModel.id : undefined
		}


		/**
		 * @todo we have to return undefined for now as apposed to an empty string as Hogan treats empty string as truthy
		 * @params {Backbone.Model} activeSectionModel
		 *
		 */
		, getNextUrl: function (activeSectionModel) {
			var nextModel = this.sections.next(activeSectionModel);
			return nextModel ? nextModel.id : undefined
		}


		/**
		 * @todo This is not currently used.  Should we have an update function that only replaces elements instead of
		 * re-rendering?  It might make sense in the case of the sidebar as its not very complicated
		 *
		 * @params {String} activeSection
		 */
		, update: function (activeSectionId) {
			var activeSectionModal = this.sections.getActive(activeSectionId);

			// Remove the old active class
			this.$el.find('li.active').removeClass('active');

			// Add the new active class
			$('.nav-' + activeSectionId, this.$el).parent().addClass('active');
			this.$prev.href = this.getPrevUrl(activeSectionModal);
			this.$next.href = this.getNextUrl(activeSectionModal);
		}


		, template: function (data) {
			return hogan.compile(tpl).render(data);
		}


		/**
		 * Responsible for rendering the entire sidebar
		 *
		 * @params {Backbone.Model} [activeSection] Tells the renderer which nav item to show as "active"
		 */
		, render: function (activeSection) {
			activeSection = activeSection || this.sections.getActive();

			var navListData = this.navListData

			// Build the view data object
			_.each(navListData, function (navItem, i) {
				if (navItem.id == activeSection) {
					navItem.classname = 'active';
				} else {
					navItem.classname = '';
				}
			});

			// Insert the new content into our view's DOM
			this.$el.html(this.template({
				prevId: this.getPrevUrl(activeSection)
				, nextId: this.getNextUrl(activeSection)
				, navItems: navListData
			}));
		}


		, initialize: function (options) {
			var sections = this.sections = options.sections
			, navListData = [];

			this.$prev = this.$('.primaryNav .nav-prev');
			this.$next = this.$('.primaryNav .nev-next');

			_.each(sections.models, function (section, i) {
				navListData[i] = {
					id: section.attributes.id
					, title: section.attributes.title
					, classname: ''
				};
			});

			this.navListData = navListData;
			this.render();
		}
	});
});