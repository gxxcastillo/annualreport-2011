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

			var section = event.target.getAttribute('href').substr(1);
			this.sections.setActive(section);
		}


		/**
		 * @todo This is not currently used.  Should we have an update function that only replaces elements instead of
		 * re-rendering?  It might make sense in the case of the sidebar as its not very complicated
		 *
		 * @params {String} activeSection
		 */
		, update: function (activeSection) {
			// Remove the old active class
			this.$el.find('li.active').removeClass('active');

			// Add the new active class
			$('.nav-' + activeSection, this.$el).parent().addClass('active');
		}


		, template: function (data) {
			return hogan.compile(tpl).render(data);
		}


		/**
		 * Responsible for rendering the entire sidebar
		 *
		 * @params {string} [activeSection] Tells the renderer which nav item to show as "active"
		 */
		, render: function (activeSection) {
			activeSection = activeSection || this.sections.getActive();

			var navListData = this.navListData
			, prevId
			, nextId;

			// Build the view data object
			_.each(this.navListData, function (navItem, i) {
				if (navItem.id == activeSection) {
					navItem.classname = 'active';
					prevId = i == 0
						? null
						: navListData[i-1].id;
					nextId = i == navListData.length - 1
						? null
						: navListData[i+1].id;
				} else {
					navItem.classname = '';
				}
			});

			// Insert the new content into our view's DOM
			this.$el.html(this.template({
				prevId: prevId
				, nextId: nextId
				, navItems: this.navListData
			}));
		}


		, initialize: function (options) {
			var sections = this.sections = options.sections
			, navListData = [];

			_.each(sections.models, function (section, i) {
				navListData[i] = {
					id: section.attributes.id
					, text: section.attributes.title
					, classname: ''
				};
			});

			this.navListData = navListData;
			this.render();
		}
	});
});