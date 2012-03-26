/*
@todo sidebar view should have a model associeated with it.
That model will have the sidebar elements, as well as information as to how to display (I think?)

 */

define(['jquery', 'underscore', 'backbone', 'dv', 'hogan', 'text!views/sidebarView.hogan']
, function ($, _ ,Backbone, dv, hogan, tpl, undefined) {
	'use strict';

	return Backbone.View.extend({

		el: '#sidebar'

		, events: {
			'click .primaryNav a': 'navClickHandler'
		}


		, elements: {
			'#primaryNav': '$primaryNav'
		}


		, navClickHandler: function (event) {
			event.preventDefault();

			var section = event.target.getAttribute('href').substr(1);
			this.sections.setActive(section);
		}

		, update: function (activeSection) {
			// Remove the old active class
			this.$el.find('li.active').removeClass('active');

			// Add the new active class
			$('.nav-' + activeSection, this.$el).parent().addClass('active');
		}


		, template: function (data) {
			this.tpl = hogan.compile(tpl);
			return this.tpl.render(data);
		}


		, render: function (activeSection) {
			activeSection = activeSection || this.sections.getActive();

			var navListData = this.navListData
			, prevId
			, nextId;


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

			this.sections = options.sections;
		}
	});
});